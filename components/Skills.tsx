"use client";

import { useRef, useState } from "react";
import type { SkillGroup } from "@/types/cv";
import SectionHeading from "@/components/SectionHeading";
import { sectionFrameClass, sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  skills: SkillGroup[];
}

/** Indigo scale from light to dark (matches page accent); position 1–10 */
function indigoFill(position: number): string {
  const l = Math.round(92 - (position - 1) * (92 - 28) / 9);
  return `hsl(239 84% ${l}%)`;
}

function ProficiencyBar({ level }: { level: number }) {
  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`Proficiency: ${level} out of 10`}
    >
      <span className="text-xs font-semibold tabular-nums text-indigo-700 shrink-0">
        {level}/10
      </span>
      <div className="flex items-center gap-1">
        {Array.from({ length: 10 }, (_, i) => {
          const pos = i + 1;
          const filled = pos <= level;
          return (
            <span
              key={pos}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm inline-block shrink-0 transition-colors"
              style={
                filled
                  ? {
                      backgroundColor: indigoFill(pos),
                      borderColor: indigoFill(pos),
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }
                  : {
                      backgroundColor: "white",
                      borderColor: "rgb(199 210 254)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-xl border border-indigo-100/80 bg-gradient-to-b from-indigo-50/40 to-white p-4 sm:p-5 shadow-sm print:border-gray-200 print:shadow-none print:bg-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <span className="inline-flex w-fit items-center rounded-md bg-indigo-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-indigo-800 ring-1 ring-inset ring-indigo-200/80">
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
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white text-indigo-900 border border-indigo-100 shadow-sm print:border-indigo-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const expandButtonClass =
  "p-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-500 " +
  "hover:text-indigo-700 hover:border-indigo-300 transition-colors";

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
              <div key={group.category} className="hidden print:block">
                <SkillGroupCard group={group} />
              </div>
            );
          }

          return (
            <div
              key={group.category}
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
