"use client";

import { useRef, useState } from "react";
import type { ExperienceItem } from "@/types/cv";
import SectionHeading from "@/components/SectionHeading";
import { sectionFrameClass, sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  experience: ExperienceItem[];
}

function ExperienceArticle({ item }: { item: ExperienceItem }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{item.role}</h3>
          <span className="text-sm font-medium text-indigo-700">{item.company}</span>
          {item.location && (
            <span className="text-sm text-gray-500"> · {item.location}</span>
          )}
        </div>
        <span className="text-sm text-gray-500 shrink-0">{item.period}</span>
      </div>

      <ul className="mt-3 space-y-1.5">
        {item.bullets.map((bullet, j) => (
          <li key={j} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </>
  );
}

const expandButtonClass =
  "p-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-500 " +
  "hover:text-indigo-700 hover:border-indigo-300 transition-colors";

export default function Experience({ experience }: Props) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasMore = experience.length > 1;

  function collapseAndScrollIntoView() {
    setExpanded(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  return (
    <section
      ref={sectionRef}
      className={`${sectionFrameClass} ${sectionScrollMarginClass}`}
    >
      <SectionHeading id="experience">Experience</SectionHeading>

      <div className="space-y-8 print:space-y-6">
        {experience.map((item, i) => {
          const isPeek = !expanded && i === 1;
          const isHidden = !expanded && i > 1;

          if (isHidden) {
            return (
              <article key={i} className="hidden print:block">
                <ExperienceArticle item={item} />
              </article>
            );
          }

          return (
            <article
              key={i}
              className={
                isPeek
                  ? "relative overflow-hidden max-h-[7rem] sm:max-h-[8rem] print:max-h-none print:overflow-visible"
                  : ""
              }
            >
              <ExperienceArticle item={item} />
              {isPeek && (
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent print:hidden"
                  aria-hidden="true"
                />
              )}
            </article>
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
              aria-label="Show more experience"
              className={expandButtonClass}
            >
              <ChevronDownIcon />
            </button>
          ) : (
            <button
              type="button"
              onClick={collapseAndScrollIntoView}
              aria-expanded={true}
              aria-label="Show less experience"
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
