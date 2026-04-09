/**
 * Shared frame for main CV sections (About, Experience, Skills, Projects, Education).
 * Border, padding, and light background so sections read as distinct blocks.
 */
export const sectionFrameClass =
  "rounded-2xl border border-[#d4ceaa]/90 bg-gradient-to-b from-white to-slate-50/40 " +
  "p-5 sm:p-6 shadow-sm ring-1 ring-black/[0.04] " +
  "mb-10 print:mb-6 print:rounded-lg print:border-gray-200 print:bg-white print:shadow-none print:ring-0";

/** Offset for sticky nav when jumping to #section anchors */
export const sectionScrollMarginClass = "scroll-mt-16";
