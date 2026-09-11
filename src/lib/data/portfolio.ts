export const personalInfo = {
  name: 'Mansi Garg',
  role: 'Data Scientist | Power BI Developer | Python Developer',
  description:
    'I build data-driven dashboards, analytics solutions, AI applications and modern full-stack applications using Python, Power BI, SQL and TypeScript.',
  email: 'your-email@example.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  upwork: 'https://www.upwork.com/'
};

export const skillGroups = [
  { category: 'Programming', items: ['Python', 'TypeScript', 'JavaScript', 'C'] },
  { category: 'Data & Analytics', items: ['Pandas', 'NumPy', 'Matplotlib', 'EDA'] },
  { category: 'Business Intelligence', items: ['Power BI', 'DAX', 'Power Query'] },
  { category: 'Database', items: ['SQL Server', 'SQLAlchemy', 'SQL'] },
  { category: 'AI', items: ['Generative AI', 'RAG', 'LLM Applications', 'Embeddings'] },
  { category: 'Web Development', items: ['Svelte', 'FastAPI', 'Flask', 'HTML', 'CSS'] }
];

export const projects = [
  {
    title: 'A full-stack inventory manager built with Svelte, FastAPI, and MongoDB, containerized with Docker for one-command deployment.',
    category: 'Full Stack App',
    description: 'A lightweight inventory management app with a Svelte frontend and a FastAPI backend connected to MongoDB via an async driver. The entire stack — frontend, backend, and database — runs as three Docker containers orchestrated with Docker Compose, so the whole app spins up with a single command. Built to practice clean API design, async database access, and containerized full-stack deployment.',
    technologies: ['Svelte','Vite','Python','FastAPI', 'MongoDB','Docker','Docker Compose'],
    icon: '📊',
    link: 'https://github.com/anrainstitute-AI/fullstack-app'
  },
  {
    title: 'Superstore Sales Analytics',
    category: 'Power BI',
    description: 'Interactive dashboard for sales, profit, customers, products and regional performance.',
    technologies: ['Power BI', 'DAX', 'Power Query'],
    icon: '📊',
    link: '#'
  },
  {
    title: 'RAG AI Assistant',
    category: 'Generative AI',
    description: 'Document-based question answering application using retrieval, embeddings and an LLM.',
    technologies: ['Python', 'RAG', 'LLM', 'Embeddings'],
    icon: '🤖',
    link: '#'
  },
  {
    title: 'Sales Prediction Model',
    category: 'Data Science',
    description: 'Machine learning workflow for cleaning historical sales data and predicting future outcomes.',
    technologies: ['Python', 'Pandas', 'NumPy', 'ML'],
    icon: '📈',
    link: '#'
  },
  {
    title: 'Full-Stack Analytics App',
    category: 'Full Stack',
    description: 'Modern analytics application with a Svelte frontend, FastAPI backend and SQL Server.',
    technologies: ['Svelte', 'TypeScript', 'FastAPI', 'SQL Server'],
    icon: '🌐',
    link: '#'
  }
];

export const services = [
  { title: 'Power BI Development', description: 'Interactive dashboards, DAX measures and business reporting.' },
  { title: 'Data Analysis', description: 'Data cleaning, exploration and visualization with Python.' },
  { title: 'Python Development', description: 'APIs, automation and backend applications using Python.' },
  { title: 'AI & RAG', description: 'Practical AI applications using LLMs, retrieval and document search.' },
  { title: 'SQL Development', description: 'Queries, reporting datasets and SQL Server data solutions.' },
  { title: 'Full-Stack Applications', description: 'Svelte and TypeScript applications backed by Python APIs.' }
];