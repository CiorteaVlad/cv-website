import { sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function SectionHeading({ children, id }: Props) {
  return (
    <h2
      id={id}
      className={`${sectionScrollMarginClass} mb-7 sm:mb-8 print:mb-6 border-l-4 border-[#3d4a1a] pl-4 py-1 text-base font-bold uppercase tracking-[0.18em] text-[#3d4a1a] print:border-gray-400 print:text-gray-900`}
    >
      {children}
    </h2>
  );
}
