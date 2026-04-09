import type { CVConfig } from "@/types/cv";

interface Props {
  name: CVConfig["name"];
  contact: CVConfig["contact"];
}

export default function Footer({ name, contact }: Props) {
  const links = [
    contact.github && { label: "GitHub", href: contact.github },
    contact.website && { label: "Website", href: contact.website },
    contact.twitter && { label: "Twitter / X", href: contact.twitter },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-400 print:mt-8">
      <div className="flex flex-col gap-0.5">
        <span>
          © {new Date().getFullYear()} {name}
        </span>
        <a
          href={`mailto:${contact.email}`}
          className="text-[#556128] hover:text-[#3d4a1a] transition-colors font-medium text-xs"
        >
          Open to new opportunities — get in touch ↗
        </a>
      </div>
      {links.length > 0 && (
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3d4a1a] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </footer>
  );
}
