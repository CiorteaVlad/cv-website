"use client";

import { motion } from "framer-motion";
import { sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function SectionHeading({ children, id }: Props) {
  return (
    <div className="relative mb-7 sm:mb-8 print:mb-6">
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-[#3d4a1a] print:hidden"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        aria-hidden
      />
      <h2
        id={id}
        className={`${sectionScrollMarginClass} pl-4 py-1 text-base font-bold uppercase tracking-[0.18em] text-[#3d4a1a] print:border-l-4 print:border-gray-400 print:text-gray-900`}
      >
        {children}
      </h2>
    </div>
  );
}
