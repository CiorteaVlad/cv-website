import SectionHeading from "@/components/SectionHeading";
import { sectionFrameClass, sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  summary: string;
}

export default function Summary({ summary }: Props) {
  return (
    <section className={`${sectionFrameClass} ${sectionScrollMarginClass}`}>
      <SectionHeading id="about">About</SectionHeading>
      <p className="text-gray-700 leading-relaxed">{summary}</p>
    </section>
  );
}
