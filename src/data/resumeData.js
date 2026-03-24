export const resumeData = {
  name: "NIHAL ERNEST",
  title: "Software Engineer",
  roles: ["Software Engineer", "ML Engineer", "Full Stack Developer", "AI Systems Builder"],
  tagline: "M.S. Computer Science · UC Santa Cruz",
  location: "Gilroy, CA",
  email: "nernest2002@gmail.com",
  github: "https://github.com/NihalErnest89",
  linkedin: "#", // update with your LinkedIn URL

  education: [
    {
      degree: "M.S. Computer Science",
      school: "University of California, Santa Cruz",
      period: "Sep. 2024 – Mar. 2026",
      gpa: "3.91",
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
      period: "Jun. 2025 – Dec. 2025",
      bullets: [
        "Designed and deployed automation workflows for complex web interactions using an agent-based approach, including resilient web-crawlers for JavaScript-heavy dynamic pages.",
        "Developed a RESTful API using Flask for LLM-powered data analysis, integrating external APIs on Azure and AWS.",
        "Created serverless Slack bot functions on Supabase used in multi-million dollar investment decisions.",
      ],
      tags: ["Flask", "Azure", "AWS", "Supabase", "LLM", "Python"],
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
      period: "Mar. 2025 – Present",
      description:
        "AI-powered slide generation system (graduate capstone) that converts structured JSON into fully branded presentations.",
      bullets: [
        "Built using Python, GPT-4o-mini, and python-pptx with an intelligent image retrieval and processing pipeline.",
        "Designed a prompt-engineered, template-based framework for automated, brand-consistent output.",
      ],
      tags: ["Python", "GPT-4o", "AI", "NLP", "python-pptx"],
    },
    {
      name: "Discord Bot",
      period: "Jul. 2021 – Present",
      description:
        "Multi-functional AI-powered Discord bot deployed to 200+ users with RAG, image generation, and real-time data feeds.",
      bullets: [
        "Integrated Llama 3 chat, stable diffusion image generation, and server moderation features.",
        "Added RAG capabilities and real-time web scraping to ground Llama 3.2 beyond its knowledge cutoff.",
      ],
      tags: ["Python", "Llama 3", "RAG", "Stable Diffusion", "Web Scraping"],
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
