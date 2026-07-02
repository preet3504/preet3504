export const PERSONAL_INFO = {
  name: "Preet Patel",
  title: "AI Engineer and Full-Stack Developer",
  location: "Surat, Gujarat, India",
  email: "preetpatel3504@gmail.com",
  phone: "+91 9023350676",
  linkedin: "https://linkedin.com/in/preet3504",
  github: "https://github.com/preet3504",
  
  summary: "AI Engineer and Full-Stack Developer having production experience creating intelligent, cloud-native web applications and scalable systems. Experience in progressing from the initial system software on full-stack systems to the management of data-driven platforms for the enterprise cloud. Proven ability in the design of robust backend API systems, optimization of database systems, caching mechanisms and current modern frameworks while integrating production quality Generative AI pipelines and LLMOps to maximize business outcomes.",
  
  tagline: "Building scalable web applications with modern technologies",
  
  heroDescription: "I craft high-performance web applications that scale. From optimizing database queries to implementing real-time features, I turn complex problems into elegant solutions.",
};

export const EXPERIENCE = [
  {
    id: 1,
    company: "Skyllect Private Limited",
    position: "Full Stack Developer",
    location: "India",
    duration: "July 2024 – Present",
    type: "Full-time",
    achievements: [
      "Transitioned from a Full Stack Intern to a core engineer, leveraging React.js, Express.js, and MySQL to deliver highly responsive UI modules and robust REST APIs, improving frontend rendering speeds by 25%.",
      "Optimized high-throughput database architectures by implementing Redis caching layers and refactoring PostgreSQL database schemas, reducing database query latencies by 40% under peak concurrent traffic loads.",
      "Designed and managed distributed cloud infrastructure on Amazon Web Services (AWS), utilizing cloud-native design patterns to achieve 99.9% application availability and seamless high-volume data packet routing.",
      "Accelerated team development velocity by 15% by implementing standardized Git workflows and continuous integration environments spanning both GitHub and GitLab platforms.",
      "Engineered bi-directional, real-time communication layers utilizing WebSockets, enhancing interactive application feature responsiveness and lowering communication latency by over 30%.",
    ],
  },
];

export const EDUCATION = {
  institution: "R. N. G. Patel Institute of Technology",
  degree: "Bachelor of Vocational in Computer Software Engineering",
  location: "Surat, India",
  duration: "Sep 2021 – May 2024",
};

export const SKILLS = {
  "Languages & Frameworks": [
    "JavaScript", "TypeScript", "Python", "Node.js", "Express.js", "React.js", "Next.js", "Redux.js"
  ],
  "Databases & Caching": [
    "PostgreSQL", "MySQL", "SQLite", "Redis", "SQL Query Optimization", "Vector Databases"
  ],
  "Cloud & DevOps": [
    "Amazon Web Services (AWS)", "GitHub", "GitLab", "Serverless Architecture", "Git", "WebSocket", "Postman API"
  ],
  "Generative AI & NLP": [
    "Large Language Models (LLMs)", "RAG", "Prompt Engineering", "AI Agents", "LangChain", "LlamaIndex", "LLMOps"
  ],
  "Data Science & Pipelines": [
    "Scikit-Learn", "Feature Scaling (Standardization/Normalization)", "ColumnTransformer"
  ]
};

export const FOCUS_AREAS = [
  {
    title: "AI Engineering",
    description: "Actively building Python-based backend microservices to integrate Large Language Models (LLMs) into production environments.",
    icon: "Brain",
  },
  {
    title: "Scalable Systems",
    description: "Researching distributed system patterns to enhance fault tolerance and horizontal scalability for enterprise applications.",
    icon: "Network",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/preet3504",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/preet3504",
    icon: "Github",
  },
  {
    name: "Email",
    url: "mailto:preetpatel3504@gmail.com",
    icon: "Mail",
  },
  {
    name: "Phone",
    url: "tel:+919023350676",
    icon: "Phone",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Production-Grade RAG Chatbot: Multi-Source Knowledge Engine",
    liveUrl: "https://multi-document-rag-chatbot-mrkuwswcepqxaaw8ep9hdk.streamlit.app/",
    technologies: ["Python", "LangChain", "ChromaDB", "Llama 3", "Streamlit"],
    achievements: [
      "Engineered an enterprise-ready Retrieval-Augmented Generation (RAG) system enabling dynamic, contextual conversations over multiple complex data sources (PDFs, Web URLs, and live SQLite/MySQL databases).",
      "Implemented strict grounding mechanisms establishing high-confidence relevance thresholds to successfully prevent LLM hallucinations and incorrect responses.",
      "Designed a session-aware conversational memory pipeline delivering precise source-level text citations, document page-number markers, and exact reference URLs.",
      "Deployed the application on Streamlit Community Cloud, utilizing Groq's ultra-fast inference APIs for Llama 3 and HuggingFace for scalable cloud vector embeddings."
    ]
  },
  {
    id: 2,
    title: "ResumeTailor: AI-Powered ATS Resume Optimizer",
    liveUrl: "https://resume-builder-five-eta-85.vercel.app/",
    technologies: ["Next.js", "FastAPI", "Python", "LangChain", "Groq"],
    achievements: [
      "Architected a full-stack resume optimization platform with a Next.js frontend and FastAPI backend, enabling users to upload existing resumes in PDF or DOCX format alongside a target job description.",
      "Built an AI-driven tailoring pipeline leveraging Groq's Llama 3.3 70B and HuggingFace's Llama 3.1 8B models to perform keyword optimization, content rewriting, and relevancy scoring against job descriptions.",
      "Engineered a dual-format document generation pipeline producing ATS-friendly, clean, and parsable resume outputs in both PDF and DOCX, free of complex tables or graphics.",
      "Designed and exposed RESTful API endpoints for resume generation and file retrieval, reducing end-to-end processing and delivery time to under 8 seconds per request.",
      "Deployed the full application to production on Vercel, delivering a live, publicly accessible AI resume optimization tool."
    ]
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
