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
        location: "Dubai, UAE",
        bullets: [
          "Served as the sole QA engineer and Scrum coordinator for a small cross-functional team, staying involved from early concept and risk assessment through feature delivery and app launch",
          "Covered the full product surface — iOS app, web platform, admin panel, and backend APIs — across all testing types, from exploratory and functional to API, payment, and AI-related flows",
          "Worked closely with the product owner and stakeholders to keep delivery aligned, facilitated all Scrum ceremonies, and transitioned the team to Kanban when it better matched the workflow",
          "Mentored a junior tester from no prior QA experience to independently owning feature testing and bug reporting",
        ],
      },
      {
        company: "Cognizant",
        role: "Senior QA Engineer",
        period: "Aug 2019 – Mar 2026",
        location: "Cluj-Napoca, Romania",
        bullets: [
          "Long-term QA specialist on a technically complex healthcare communication platform used by 150k+ hospital staff, covering Android, web admin, backend services, APIs, audit flows, and database validation",
          "Built deep product knowledge over 6+ years, becoming a go-to resource for VoIP/SIP testing, complex system integrations, and high-risk scenarios that required thorough understanding of the platform",
          "Handled production incidents and urgent releases in an environment where quality directly affected clinical operations",
          "Stepped into full QA lead responsibilities during absences — coordinating the team, fielding questions and providing direction, owning device and OS validation cycles, and representing QA in estimations, backlog refinements, bug prioritisation meetings, and client status calls",
        ],
      },
      {
        company: "Tapptitude",
        role: "Senior QA Engineer",
        period: "Aug 2017 – Aug 2019",
        location: "Cluj-Napoca, Romania",
        bullets: [
          "Managed manual QA across multiple concurrent client projects in a fast-paced agency environment, covering iOS, Android, and web as the sole QA engineer on most engagements",
          "Handled the full testing cycle independently across multiple simultaneous projects — from risk identification and test case writing through execution, bug reporting, and release sign-off",
          "Conducted technical interviews for QA candidates and mentored new team members joining the QA practice",
        ],
      },
      {
        company: "Gameloft",
        role: "QA Engineer → Senior QA Engineer",
        period: "Feb 2016 – Aug 2017",
        location: "Cluj-Napoca, Romania",
        bullets: [
          "Started as a Junior QA Engineer testing iOS mobile games across a wide range of Apple devices — iPhone, iPad, iPod, and Apple TV — working within a structured Waterfall delivery process",
          "Promoted to Senior QA Engineer within 1.5 years, taking on task assignment, daily reporting, and onboarding of new team members while maintaining full QA responsibilities",
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
