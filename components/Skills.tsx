"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SkillGroup } from "@/types/cv";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { sectionFrameClass, sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  skills: SkillGroup[];
}

function ProficiencyBar({ level }: { level: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const [printReady, setPrintReady] = useState(false);
  const targetPct = level * 10;

  useEffect(() => {
    const beforePrint = () => setPrintReady(true);
    window.addEventListener("beforeprint", beforePrint);
    return () => window.removeEventListener("beforeprint", beforePrint);
  }, []);

  const showFill = isInView || printReady;

  return (
    <div
      ref={containerRef}
      className="w-24 h-1.5 rounded-full bg-[#edf0e0] overflow-hidden"
      aria-label={`Proficiency: ${level} out of 10`}
    >
      <motion.div
        className="h-full rounded-full bg-[#d4a017]"
        initial={{ width: "0%" }}
        animate={{ width: showFill ? `${targetPct}%` : "0%" }}
        transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
      />
    </div>
  );
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <motion.div
      className="rounded-xl border border-[#d4ceaa]/80 bg-gradient-to-b from-[#edf0e0]/40 to-white p-4 sm:p-5 shadow-sm print:border-gray-200 print:shadow-none print:bg-white print:translate-y-0"
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(61,74,26,0.12)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <span className="inline-flex w-fit items-center rounded-md bg-[#e8c56a] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-[#3d4a1a] ring-1 ring-inset ring-[#c5bc8a]/80">
          {group.category}
        </span>
        <div className="sm:shrink-0">
          <ProficiencyBar level={group.level} />
        </div>
      </div>

      <div
        className="my-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent print:via-gray-300"
        aria-hidden="true"
      />

      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {group.items.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white text-[#3d4a1a] border border-[#d4ceaa] shadow-sm print:border-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const expandButtonClass =
  "flex items-center gap-1.5 text-sm font-medium text-[#3d4a1a] hover:text-[#2a3312] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#edf0e0]";

export default function Skills({ skills }: Props) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasMore = skills.length > 1;

  function collapseAndScrollIntoView() {
    setExpanded(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  return (
    <section ref={sectionRef} className={`${sectionFrameClass} ${sectionScrollMarginClass}`}>
      <SectionHeading id="skills">Skills</SectionHeading>

      <div className="space-y-8 print:space-y-6">
        {skills.map((group, i) => {
          const isPeek = !expanded && i === 1;
          const isHidden = !expanded && i > 1;

          if (isHidden) {
            return (
              <FadeIn key={group.category} delay={i * 0.1}>
                <div className="hidden print:block">
                  <SkillGroupCard group={group} />
                </div>
              </FadeIn>
            );
          }

          return (
            <FadeIn key={group.category} delay={i * 0.1}>
              <div
                className={
                  isPeek
                    ? "relative overflow-hidden max-h-[7rem] sm:max-h-[8rem] print:max-h-none print:overflow-visible"
                    : ""
                }
              >
                <SkillGroupCard group={group} />
                {isPeek && (
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent print:hidden"
                    aria-hidden="true"
                  />
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-3 print:hidden">
          {!expanded ? (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-expanded={false}
              aria-label="Show more skills"
              className={expandButtonClass}
            >
              <span>Show more</span>
              <ChevronDownIcon />
            </button>
          ) : (
            <button
              type="button"
              onClick={collapseAndScrollIntoView}
              aria-expanded={true}
              aria-label="Show less skills"
              className={expandButtonClass}
            >
              <span>Show less</span>
              <ChevronUpIcon />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );
}
