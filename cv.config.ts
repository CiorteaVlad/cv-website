import type { CVConfig } from "@/types/cv";

export const cv: CVConfig = {
  name: "Vlad Ciortea",
  title: "Senior QA Engineer | Scrum Master",
  photo: "/photo.png",
  cvPdfPath: "/CV_Vlad_Ciortea.pdf",

  contact: {
    email: "ciorteavlad2004@yahoo.com",
    phone: "+40 749 225 405",
    location: "Cluj-Napoca, Romania",
    linkedin: "https://www.linkedin.com/in/vlad-ciortea-4456b4173/",
  },

  summary:
    "Senior QA Engineer with 10+ years of experience testing mobile, web, backend, and API products " +
    "across healthcare, gaming, and wellness domains. Combines hands-on QA ownership with Scrum Master " +
    "and delivery coordination experience in Agile and Kanban teams. Strong background in end-to-end " +
    "manual testing, stakeholder communication, team alignment, and mentoring. Well suited for Senior " +
    "Manual QA, Scrum Master, Product Owner, and QA coordination roles.",

  experience: [
    {
      company: "MESH",
      role: "Lead QA Engineer / Scrum Master / Project Manager",
      period: "Oct 2024 – Jan 2026",
      location: "Cluj-Napoca, Romania",
      bullets: [
        "Led end-to-end QA for an iOS meditation app, web presentation platform, admin panel, and backend APIs.",
        "Performed functional, integration, regression, smoke, sanity, exploratory, acceptance, API, payment, notification, and AI-related testing.",
        "Wrote and maintained test cases, smoke suites, and Confluence documentation to improve release readiness.",
        "Facilitated standups, sprint planning, reviews, retrospectives, and backlog refinement across a cross-functional team.",
        "Coordinated 5 developers, 1 designer, a product owner, and stakeholders to keep delivery aligned with the roadmap.",
        "Switched the team from Scrum to Kanban to better match workflow and delivery needs.",
        "Improved Jira workflows and reorganized Slack channels to streamline communication and task visibility.",
        "Reduced escaped defects by introducing testing checkpoints after each completed story.",
        "Trained a junior tester from zero QA experience to independent feature testing and bug reporting.",
      ],
    },
    {
      company: "Cognizant",
      role: "Senior QA Engineer",
      period: "Aug 2019 – Mar 2026",
      location: "Cluj-Napoca, Romania",
      bullets: [
        "Tested a healthcare communication platform used by hospital staff for critical alerts, VoIP calls, chat, and directory navigation.",
        "Covered Android apps, web admin, backend services, APIs, audit flows, and database validation.",
        "Performed functional, integration, regression, exploratory, smoke, sanity, API, backend, server, and web testing.",
        "Specialized in VoIP/SIP testing and complex system integrations.",
        "Handled production incidents and urgent releases in a high-impact healthcare environment.",
        "Created and reviewed test cases to improve coverage and speed up repeatable validation flows.",
        "Reviewed specifications early to identify risks, inconsistencies, and blockers before execution.",
        "Acted as QA lead in the lead’s absence, coordinating team tasks, reporting progress, and maintaining testing velocity.",
        "Coordinated device validation and OS validation cycles across multiple test scenarios.",
        "Mentored new colleagues and supported senior teammates on feature areas requiring deeper product knowledge.",
        "Participated in estimations, spec reviews, stakeholder meetings, and day-end planning when covering lead responsibilities.",
        "Supported a product used by 150k+ users with stable latest releases and no major visible defects.",
      ],
    },
    {
      company: "Tapptitude",
      role: "Senior QA Engineer",
      period: "Aug 2017 – Aug 2019",
      location: "Cluj-Napoca, Romania",
      bullets: [
        "Tested 10+ client projects across iOS, Android, and web platforms.",
        "Owned the QA process on most projects as the sole QA engineer.",
        "Performed functional, integration, regression, acceptance, AB, exploratory, smoke, sanity, API, and backend testing.",
        "Wrote and maintained test cases to support coverage and repeatable execution.",
        "Identified risks early and reported bugs, blockers, and release concerns clearly.",
        "Mentored new colleagues and supported onboarding into QA practices and team workflows.",
        "Conducted technical interviews for QA candidates.",
        "Explored automation concepts at POC level during early career development.",
        "Delivered quality validation for a streaming app designed to support 100k+ users in a short time window.",
      ],
    },
    {
      company: "Gameloft",
      role: "QA Engineer → Senior QA Engineer",
      period: "Feb 2016 – Aug 2017",
      location: "Cluj-Napoca, Romania",
      bullets: [
        "Tested iOS versions of mobile games including Blacklist Conspiracy, Dungeon Hunter, and Asphalt.",
        "Performed functional, regression, acceptance, AB, exploratory, localization, performance, stress, and compatibility testing.",
        "Logged and tracked defects using Bugzilla, Trello, and internal tools through release cycles.",
        "Promoted to Senior QA within 1.5 years and took ownership of task assignment and daily reporting.",
        "Trained new team members on testing workflows, tools, and project expectations.",
        "Supported successful game releases through consistent device-based quality validation.",
      ],
    },
  ],

  skills: [
    {
      category: "Testing",
      level: 10,
      items: [
        "Manual",
        "Functional",
        "Integration",
        "Regression",
        "Exploratory",
        "Smoke",
        "Sanity",
        "Acceptance",
        "API",
        "Backend",
        "Database validation",
        "Test case design",
        "Bug reporting",
        "Device & OS validation",
      ],
    },
    {
      category: "Agile & delivery",
      level: 9,
      items: [
        "Scrum Master",
        "Kanban",
        "Sprint planning",
        "Retrospectives",
        "Backlog refinement",
        "Story writing",
        "Estimation support",
        "Stakeholder communication",
        "Team coordination",
        "Risk identification",
        "Release planning",
      ],
    },
    {
      category: "Tools",
      level: 9,
      items: [
        "Jira",
        "Confluence",
        "Jama",
        "Postman",
        "Insomnia",
        "DBeaver",
        "PuTTY",
        "Android Studio",
        "Xcode",
        "Jenkins",
        "GitHub",
        "Slack",
        "Teams",
        "Figma",
        "Zendesk",
        "Zoiper",
        "Vysor",
        "Linux",
      ],
    },
    {
      category: "Platforms",
      level: 9,
      items: ["iOS", "Android", "Web", "Admin panels", "Backend APIs", "AI-enabled features"],
    },
  ],

  projects: [
    {
      name: "Healthcare communication platform",
      description:
        "End-to-end QA for a hospital-critical communication product: Android, web admin, backend, APIs, " +
        "VoIP/SIP, audit flows, and production incident support. Helped sustain stable releases for 150k+ users.",
      tags: ["Healthcare", "VoIP", "Android", "API", "QA lead"],
    },
    {
      name: "MESH wellness suite",
      description:
        "Lead QA across an iOS meditation app, web presentation layer, admin tooling, and backend APIs. " +
        "Facilitated Scrum/Kanban ceremonies, coordinated cross-functional delivery, and mentored a junior tester.",
      tags: ["iOS", "Web", "API", "Scrum", "Kanban"],
    },
    {
      name: "Agency & gaming QA",
      description:
        "Sole QA on 10+ client projects (iOS, Android, web) at Tapptitude; iOS game testing and promotion to " +
        "Senior QA at Gameloft on titles including Asphalt and Dungeon Hunter.",
      tags: ["Mobile", "iOS", "Android", "Web", "Games"],
    },
    {
      name: "Mock project — API regression suite",
      description:
        "Placeholder card for scroll testing. Represents a Postman/Newman collection covering critical REST " +
        "endpoints, smoke checks, and contract tests against staging environments.",
      tags: ["Postman", "REST", "Regression", "Mock"],
    },
    {
      name: "Mock project — device lab matrix",
      description:
        "Placeholder card for scroll testing. Represents OS and device coverage matrices, compatibility passes, " +
        "and release sign-off across iOS and Android builds.",
      tags: ["Devices", "Compatibility", "Mock", "Mobile"],
    },
  ],

  education: [
    {
      institution: "Technical University of Cluj-Napoca",
      degree: "Bachelor’s degree in Energy Engineering",
      year: "2014",
      location: "Cluj-Napoca, Romania",
      notes: "Oct 2010 – Aug 2014",
    },
    {
      institution: "Scoala Informala de IT",
      degree: "Automation testing course",
      year: "2019",
      location: "Romania",
      notes: "2018 – 2019",
    },
  ],
};
