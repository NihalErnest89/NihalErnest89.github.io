export const resumeData = {
  name: "NIHAL ERNEST",
  title: "Software Engineer",
  roles: ["Software Engineer", "Full Stack Developer", "AI Systems Builder"],
  tagline: "M.S. Computer Science · Bay Area, CA",
  location: "Gilroy, CA",
  email: "nihal.ernest@gmail.com",
  github: "https://github.com/NihalErnest89",
  linkedin: "https://www.linkedin.com/in/nihal-ernest/",

  education: [
    {
      degree: "M.S. Computer Science",
      school: "University of California, Santa Cruz",
      period: "Sep. 2024 – Mar. 2026",
      gpa: "3.85",
    },
    {
      degree: "B.S. (Honors) Computer Science",
      school: "University of California, Santa Cruz",
      period: "Jul. 2020 – Jun. 2024",
      gpa: "3.62",
    },
  ],

  experience: [
    {
      company: "Stealth Startup",
      role: "Software Engineer",
      period: "Jun. 2025 – Present",
      bullets: [
        "Built a full-stack platform with a Python/Flask REST API, SQLite data layer, and Slack client integration via Model Context Protocol (MCP), deployed on AWS — directly informed multi-million dollar investment decisions.",
        "Engineered parallel data ingestion pipelines with an SQLite caching layer, reducing a 4-hour process to under 20 minutes.",
        "Designed RESTful API routes aggregating multi-source geospatial and third-party data, handling authentication and structured JSON payloads.",
      ],
      tags: ["Flask", "AWS", "MCP", "SQLite", "Python", "REST API"],
    },
    {
      company: "Legal Forensics AI",
      role: "Software Engineering Intern",
      period: "Jun. 2024 – Sep. 2024",
      bullets: [
        "Developed a full-stack web application with an Angular/TypeScript frontend and a Python backend powered by Llama 3 on AWS Bedrock.",
        "Delivered a search interface over millions of case law documents by integrating the Court Listener REST API, replacing manual filtering workflows.",
        "Deployed on AWS, configuring cloud infrastructure for scalable document retrieval and LLM-powered query processing.",
      ],
      tags: ["Angular", "AWS", "Python", "Llama 3", "LLM", "AWS Bedrock"],
    },
    {
      company: "Xen.AI",
      role: "Software Engineering Intern",
      period: "Jun. 2023 – Jun. 2024",
      bullets: [
        "Built multi-tenant Angular/TypeScript frontends and Python backend function apps on Microsoft Azure, integrating OpenAI GPT-4 and SQL databases via REST endpoints, serving 2 enterprise clients.",
        "Implemented Azure authentication, database, and search services for production use.",
      ],
      tags: ["Angular", "Azure", "Python", "GPT-4", "TypeScript", "SQL"],
    },
  ],

  projects: [
    {
      name: "Formula Forecast",
      link: "https://nihalernest89.github.io/Formula-Forecast/",
      period: "Sep. 2025 – Present",
      description:
        "Full-stack F1 prediction app with a custom neural network and Huber-based loss function, achieving 89% accuracy within 3 positions.",
      bullets: [
        "Architected a full-stack F1 prediction app (React + FastAPI + PyTorch) with a custom neural network (128→64→32) and a custom Huber-based loss function, achieving 89% accuracy within 3 positions.",
        "Built an end-to-end data pipeline ingesting live telemetry via the FastF1 API, engineering 9 features per driver-race, and serving predictions through REST endpoints — with time-aware cross-validation to prevent data leakage.",
      ],
      tags: ["PyTorch", "FastAPI", "React", "Python", "ML"],
    },
    {
      name: "Fishing Platform",
      period: "Feb. 2025 – Present",
      description:
        "A full-stack platform for anglers to log catches, visualize them on maps, and receive data-driven suggestions for future trips.",
      bullets: [
        "Built a full-stack catch-logging platform (React + Python REST API) where anglers record fish species, weight, photos, location, and conditions — stored in a database-backed metadata layer for historical tracking and analysis.",
        "Integrated Maps API for interactive geospatial visualization of catch history and built an insight engine that analyzes past trips to suggest future scenarios.",
      ],
      tags: ["React", "Python", "Maps API", "REST API", "Full Stack"],
    },
    {
      name: "Discord Bot",
      period: "Jul. 2021 – Present",
      description:
        "Multi-functional Discord bot serving 100+ users with AI features, real-time data feeds, and a companion React Native mobile app.",
      bullets: [
        "Launched a Python backend serving 100+ users with real-time integrations to YouTube, weather, and gaming APIs via web scraping and REST API calls.",
        "Shipped a React Native mobile app extending the platform cross-platform, with Llama 3 chat and Stable Diffusion image generation features.",
      ],
      tags: ["Python", "Llama 3", "Stable Diffusion", "React Native", "Web Scraping"],
    },
    {
      name: "Slide Generation",
      period: "Mar. 2025 – Dec. 2025",
      description:
        "AI-powered slide generation system (graduate capstone) that converts structured JSON into fully branded presentations.",
      bullets: [
        "Built an AI-powered slide generation system using Python, GPT-4o-mini, and python-pptx to convert structured JSON into branded presentations.",
        "Developed an intelligent image retrieval and processing pipeline to integrate company-specific visuals with dynamic overlays and brand colors.",
        "Designed a prompt-engineered, template-based content generation framework for automated, brand-consistent presentations.",
      ],
      tags: ["Python", "GPT-4o", "AI", "NLP", "python-pptx"],
    },
  ],

  skills: {
    Languages: ["Python", "C/C++", "TypeScript", "JavaScript", "Java", "SQL", "HTML/CSS"],
    "AI / ML": ["PyTorch", "OpenAI API", "Llama", "RAG", "Stable Diffusion", "NLP"],
    Frontend: ["React", "Angular", "HTML/CSS", "TypeScript"],
    Backend: ["Flask", "FastAPI", "REST APIs", "Node.js"],
    Cloud: ["Azure", "AWS", "Supabase", "AWS Bedrock"],
    Tools: ["Git", "Linux", "Selenium", "BeautifulSoup", "Docker", "python-pptx"],
  },
};
