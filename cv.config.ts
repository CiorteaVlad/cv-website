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
      category: "Manual QA & Testing Tools",
      level: 9,
      items: [
        "Mobile app testing",
        "Functional testing",
        "Regression testing",
        "Exploratory testing",
        "Integration testing",
        "API testing (Postman)",
        "Database validation (DBeaver)",
        "Jira workflows",
        "Test case management",
        "Release validation",
      ],
    },
    {
      category: "Cross-Platform Expertise",
      level: 9,
      items: [
        "iOS testing",
        "Android testing",
        "Web apps",
        "Admin panels",
        "Device validation",
        "OS cycles",
        "Multi-platform regression",
      ],
    },
    {
      category: "Agile & Delivery Coordination",
      level: 6,
      items: [
        "Scrum coordination",
        "Kanban workflows",
        "Sprint planning",
        "Backlog refinement",
        "Stakeholder communication",
        "Jira for Agile",
        "Confluence documentation",
        "Retrospectives",
        "Estimation support",
        "Release readiness",
      ],
    },
    {
      category: "Automation Testing",
      level: 2,
      items: [
        "Automation concepts",
        "Test framework basics",
        "Scripting fundamentals",
        "Tooling familiarity",
      ],
    },
  ],

  projects: [
    {
      name: "Critical Healthcare Communication Platform",
      description:
        "Delivered end-to-end manual QA for a complex healthcare communication platform spanning Android, " +
        "iOS, web, and admin applications. The product combined VoIP, real-time chat, alert management, " +
        "live patient monitoring data, and hospital-wide directory workflows, requiring broad cross-platform " +
        "validation, production incident support, and deep expertise in voice-related testing.",
      tags: [
        "Healthcare",
        "Android",
        "iOS",
        "Web",
        "Admin Panel",
        "VoIP/SIP",
        "Real-time Data",
        "API Testing",
        "Production Support",
        "Device Validation",
        "OS Validation",
        "QA Coordination",
      ],
    },
    {
      name: "AI-Assisted Meditation and Wellness App",
      description:
        "Led manual QA for a subscription-based meditation and wellness app built around guided audio/video " +
        "sessions, AI-assisted reflections, and goal-oriented user journeys. The product combined structured " +
        "meditation content, themed support for common emotional states, and progress tracking features, " +
        "while I also coordinated delivery as Scrum Master/Product Owner, working closely with stakeholders " +
        "on backlog refinement and release readiness.",
      tags: [
        "Meditation App",
        "Wellness",
        "AI Assisted",
        "Subscription Content",
        "Guided Sessions",
        "Goal Tracking",
        "Scrum",
        "Product Ownership",
        "Manual QA",
        "Stakeholder Communication",
      ],
    },
    {
      name: "Live Streaming Trivia Platform",
      description:
        "Manual QA for a mobile live-streaming trivia platform with scheduled daily contests where hundreds " +
        "of thousands of users joined a synchronized quiz session for prize money. The contest flow depended " +
        "on accurate stream timing, question overlays, and a strict response window, so testing focused on " +
        "real-time behavior, device and OS coverage, and load-sensitive user flows.",
      tags: [
        "Live Streaming",
        "Trivia Game",
        "Mobile QA",
        "Manual QA",
        "Real-time Sync",
        "High Traffic",
        "JMeter",
        "Jira",
        "Load Testing",
        "Device Coverage",
      ],
    },
    {
      name: "Wine Discovery Marketplace",
      description:
        "Manual QA for a premium wine discovery and booking platform where users could explore curated " +
        "winery profiles, schedule visits, and purchase wines directly. Testing covered the full user journey " +
        "from profile browsing and content discovery through booking workflows and commerce interactions.",
      tags: [
        "Wine Marketplace",
        "Discovery Platform",
        "Mobile QA",
        "Manual QA",
        "Booking System",
        "E-commerce",
        "Winery Profiles",
        "User Experience",
      ],
    },
    {
      name: "Opinion Discovery and Engagement Platform",
      description:
        "Manual QA for a sophisticated mobile platform where users engaged with curated opinion cards through " +
        "interaction, commenting, and content creation, powered by algorithms that generated personalized " +
        "statistics and recommendations. Testing validated the full engagement lifecycle from card discovery " +
        "to algorithmic content delivery.",
      tags: [
        "Opinion Platform",
        "Engagement",
        "Algorithms",
        "Mobile QA",
        "Manual QA",
        "Content Curation",
        "User Analytics",
        "Personalization",
      ],
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
