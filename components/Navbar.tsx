"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Order must match section order in the document (top → bottom) so scroll spy picks the correct active link. */
const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
] as const;

function computeActiveSectionId(): string {
  const doc = document.documentElement;
  const lastId = NAV_LINKS[NAV_LINKS.length - 1].id;

  // When the viewport is at (or past) the document bottom, the last section is always current.
  // This fixes the case where the Education heading has scrolled off-screen but the user is
  // still reading that section — IntersectionObserver on the heading alone misses that.
  if (window.scrollY + window.innerHeight >= doc.scrollHeight - 4) {
    if (document.getElementById(lastId)) return lastId;
  }

  const scrollPosition = window.scrollY + window.innerHeight * 0.35;
  let activeId: string = NAV_LINKS[0].id;

  for (const { id } of NAV_LINKS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (scrollPosition >= top) {
      activeId = id;
    }
  }

  return activeId;
}

export default function Navbar() {
  const [active, setActive] = useState<string>(NAV_LINKS[0].id);

  useEffect(() => {
    function update() {
      setActive(computeActiveSectionId());
    }

    update();

    let ticking = false;
    function onScrollOrResize() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 print:hidden"
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center gap-1 h-12">
        <a
          href="#"
          className="mr-auto text-sm font-bold text-gray-800 tracking-tight hover:text-[#3d4a1a] transition-colors"
        >
          VC
        </a>
        <LayoutGroup>
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={
                "relative z-0 inline-block px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 " +
                (active === id
                  ? "text-[#3d4a1a]"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100")
              }
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md bg-[#edf0e0] -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          ))}
        </LayoutGroup>
      </div>
    </motion.nav>
  );
}
