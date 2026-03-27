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
      role: "Software Engineering Intern",
      period: "Jun. 2025 – Present",
      bullets: [
        "Architected an LLM agent platform using OpenClaw and MCP, integrating a Flask API and external data APIs, deployed on AWS with a Slack integration — leveraged in multi-million dollar decisions.",
        "Engineered resilient web scrapers and parallel data collection pipelines for JavaScript-heavy dynamic pages.",
        "Implemented multi-source geospatial and REST API data fusion with an SQLite caching layer to reduce redundant network calls across automated pipelines.",
      ],
      tags: ["Flask", "AWS", "OpenClaw", "MCP", "SQLite", "Python"],
    },
    {
      company: "Legal Forensics AI",
      role: "Software Engineering Intern",
      period: "Jun. 2024 – Sep. 2024",
      bullets: [
        "Designed and developed a full stack website using Angular and Python with Llama 3 (LLM) on AWS Bedrock.",
        "Enabled smart data retrieval by integrating an LLM with Court Listener API, allowing search through millions of case law documents.",
        "Deployed on AWS, ensuring scalable cloud integration and seamless functionality.",
      ],
      tags: ["Angular", "AWS", "Python", "Llama 3", "LLM", "AWS Bedrock"],
    },
    {
      company: "Xen.AI",
      role: "Software Engineering Intern",
      period: "Jun. 2023 – Jun. 2024",
      bullets: [
        "Designed and deployed Angular web applications on Microsoft Azure, leveraging HTML, CSS, and TypeScript.",
        "Built backend function apps using Python and SQL to integrate OpenAI's GPT-4 and databases with web apps.",
        "Configured Azure services (databases, authentication, search functions) for multi-tenant use.",
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
        "Full-stack ML application for real-time Formula One race outcome predictions, born from a passion for the sport.",
      bullets: [
        "Architected a full-stack ML application combining PyTorch neural networks, FastAPI REST API, and React UI.",
        "Performed feature engineering on F1 telemetry data — driver metrics, constructor standings, track features — and applied advanced optimization techniques.",
      ],
      tags: ["PyTorch", "FastAPI", "React", "Python", "ML"],
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
    {
      name: "Discord Bot",
      period: "Jul. 2021 – Present",
      description:
        "Multi-functional Discord bot deployed to 200+ users with AI features, real-time data feeds, and a companion mobile app.",
      bullets: [
        "Developed a suite of utilities including a calculator and live updates for YouTube, gaming, music playback, and weather using Python APIs and web scraping.",
        "Integrated AI-powered features such as Llama 3 chat, stable diffusion image generation, and Discord server moderation.",
        "Built a mobile app with React Native to make functionality accessible to users outside Discord.",
        "Deployed for 200+ Discord users to access.",
      ],
      tags: ["Python", "Llama 3", "Stable Diffusion", "React Native", "Web Scraping"],
    },
    {
      name: "Fishing Platform",
      period: "2025 – Present",
      description:
        "A platform built for anglers to log detailed catches, visualize them on maps and timelines, and receive AI-driven suggestions for future trips.",
      bullets: [
        "Catch logging with full metadata — species, location, conditions, gear — visualized on interactive maps and a personal timeline.",
        "Insight engine that analyzes historical catch data to simulate and suggest optimal future fishing scenarios.",
      ],
      tags: ["React", "Python", "Maps API", "ML", "Full Stack"],
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
