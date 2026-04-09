"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { CVConfig } from "@/types/cv";

interface Props {
  name: CVConfig["name"];
  title: CVConfig["title"];
  photo?: CVConfig["photo"];
  contact: CVConfig["contact"];
  cvPdfPath?: CVConfig["cvPdfPath"];
}

const avatarSize = 112;

const chipClass =
  "flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 " +
  "text-sm text-gray-600 bg-white hover:scale-105 hover:border-[#b0a86a] " +
  "hover:shadow-sm hover:text-[#3d4a1a] transition-all duration-150 cursor-pointer select-none";

export default function Header({ name, title, photo, contact, cvPdfPath }: Props) {
  const downloadFileName = `${name.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}-CV.pdf`;

  const chips = [
    contact.location && {
      icon: <LocationIcon />,
      label: contact.location,
      href: undefined,
    },
    contact.website && {
      icon: <GlobeIcon />,
      label: contact.website.replace(/^https?:\/\//, ""),
      href: contact.website,
      external: true,
    },
    contact.github && {
      icon: <GithubIcon />,
      label: contact.github.replace(/^https?:\/\/(www\.)?github\.com\//, ""),
      href: contact.github,
      external: true,
    },
    contact.linkedin && {
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      href: contact.linkedin.trim(),
      external: true,
    },
    contact.twitter && {
      icon: <TwitterIcon />,
      label: contact.twitter.replace(/^https?:\/\/(www\.)?twitter\.com\//, "@"),
      href: contact.twitter,
      external: true,
    },
  ].filter(Boolean) as {
    icon: React.ReactNode;
    label: string;
    href?: string;
    external?: boolean;
  }[];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-b border-gray-200 pb-8 mb-10 print:pb-5 print:mb-7"
    >
      <div className="flex flex-col items-center text-center">
        <FadeIn delay={0} className="mb-5 shrink-0">
          {photo ? (
            <Image
              src={photo}
              alt={`${name} profile photo`}
              width={avatarSize}
              height={avatarSize}
              className="rounded-full object-cover object-[50%_30%] ring-2 ring-[#d4ceaa] shadow-sm mx-auto h-[112px] w-[112px]"
              priority
            />
          ) : (
            <div
              className="mx-auto flex h-[112px] w-[112px] items-center justify-center rounded-full border-2 border-dashed border-[#c5bc8a] bg-[#edf0e0]/50 text-xs font-medium text-[#7a8f3a] ring-2 ring-[#d4ceaa]/80"
              role="img"
              aria-label="Profile photo placeholder — add photo in cv.config.ts and public folder"
            >
              Photo
            </div>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{name}</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-2 max-w-xl text-lg text-[#3d4a1a] font-medium leading-snug">{title}</p>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {contact.email && (
          <li key="email">
            <a href={`mailto:${contact.email}`} className={chipClass}>
              <EmailIcon />
              {contact.email}
            </a>
          </li>
        )}

        {contact.phone && (
          <li key="phone">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className={chipClass}
              aria-label={`Phone ${contact.phone}`}
            >
              <PhoneIcon />
              {contact.phone}
            </a>
          </li>
        )}

        <li key="download-cv">
          {cvPdfPath ? (
            <a
              href={cvPdfPath}
              download={downloadFileName}
              className={chipClass}
            >
              <DownloadIcon />
              Download CV
            </a>
          ) : (
            <button
              type="button"
              onClick={() => window.print()}
              className={chipClass}
              title="Opens the print dialog — choose Save as PDF to download your CV"
              aria-label="Download CV — opens print dialog; use Save as PDF"
            >
              <DownloadIcon />
              Download CV
            </button>
          )}
        </li>

        {chips.map(({ icon, label, href, external }) => {
          if (!href) {
            return (
              <li key={label} className={chipClass}>
                {icon}
                {label}
              </li>
            );
          }

          return (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={chipClass}
              >
                {icon}
                {label}
              </a>
            </li>
          );
        })}
        </ul>
      </FadeIn>
    </motion.header>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
