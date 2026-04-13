"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { ProjectItem } from "@/types/cv";
import SectionHeading from "@/components/SectionHeading";
import { sectionFrameClass, sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  projects: ProjectItem[];
}

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: ProjectItem;
  index: number;
  onSelect: (p: ProjectItem) => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      custom={index}
      variants={projectCardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 24px rgba(61,74,26,0.10)",
        borderColor: "#b0a86a",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="group relative overflow-hidden shrink-0 w-64 border border-gray-200 rounded-lg p-4 flex flex-col gap-3
                 snap-start bg-white cursor-pointer text-left"
    >
      <motion.div
        className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-0.5 bg-[#3d4a1a]"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col gap-3 flex-1 min-h-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900">{project.name}</h3>
          <div className="flex gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code`}
                className="text-gray-400 hover:text-[#3d4a1a] transition-colors"
              >
                <GithubIcon />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live site`}
                className="text-gray-400 hover:text-[#3d4a1a] transition-colors"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-5 min-h-0">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-auto pt-1 text-xs font-medium text-[#556128] group-hover:text-[#3d4a1a] transition-colors">
          View details →
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  useEffect(() => {
    if (!selectedProject) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedProject(null);
    }

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedProject]);

  function scrollBy(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.offsetWidth ?? 272;
    el.scrollBy({ left: direction === "right" ? cardWidth + 16 : -(cardWidth + 16), behavior: "smooth" });
  }

  return (
    <section className={`${sectionFrameClass} ${sectionScrollMarginClass}`}>
      <SectionHeading id="projects">Projects</SectionHeading>

      <div className="relative isolate">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="relative z-0 flex gap-4 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-3 z-30 flex w-16 items-center justify-start bg-gradient-to-r from-white via-white/80 to-transparent">
            <div className="pointer-events-auto ml-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollBy("left");
                }}
                aria-label="Scroll projects left"
                className="pointer-events-auto rounded-full border border-gray-200 bg-white p-1.5 text-gray-500 shadow-sm transition-colors hover:border-[#b0a86a] hover:text-[#3d4a1a]"
              >
                <ChevronLeftIcon />
              </button>
            </div>
          </div>
        )}

        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-3 z-30 flex w-16 items-center justify-end bg-gradient-to-l from-white via-white/80 to-transparent">
            <div className="pointer-events-auto mr-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollBy("right");
                }}
                aria-label="Scroll projects right"
                className="pointer-events-auto rounded-full border border-gray-200 bg-white p-1.5 text-gray-500 shadow-sm transition-colors hover:border-[#b0a86a] hover:text-[#3d4a1a]"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm print:hidden"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            <h2 id="project-modal-title" className="text-lg font-semibold text-gray-900 pr-10">
              {selectedProject.name}
            </h2>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">{selectedProject.description}</p>

            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#3d4a1a] mb-3">
                Skills used
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#edf0e0] text-[#3d4a1a] border border-[#d4ceaa]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {(selectedProject.url || selectedProject.repo) && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-4">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#3d4a1a] hover:underline"
                  >
                    Visit site
                  </a>
                )}
                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#3d4a1a] hover:underline"
                  >
                    View repository
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
