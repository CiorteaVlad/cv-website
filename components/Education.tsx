import type { EducationItem } from "@/types/cv";
import SectionHeading from "@/components/SectionHeading";
import { sectionFrameClass, sectionScrollMarginClass } from "@/lib/sectionFrame";

interface Props {
  education: EducationItem[];
}

export default function Education({ education }: Props) {
  return (
    <section className={`${sectionFrameClass} ${sectionScrollMarginClass}`}>
      <SectionHeading id="education">Education</SectionHeading>

      <div className="space-y-4">
        {education.map((item, i) => (
          <article key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{item.degree}</h3>
                <span className="text-sm font-medium text-indigo-700">{item.institution}</span>
                {item.location && (
                  <span className="text-sm text-gray-500"> · {item.location}</span>
                )}
              </div>
              <span className="text-sm text-gray-500 shrink-0">{item.year}</span>
            </div>
            {item.notes && (
              <p className="mt-1 text-sm text-gray-500">{item.notes}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
