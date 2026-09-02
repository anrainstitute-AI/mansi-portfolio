import { a7 as head, a8 as attr_class, e as escape_html, a9 as attr, aa as ensure_array_like } from "../../chunks/index.js";
const personalInfo = {
  name: "Mansi Garg",
  role: "Data Scientist | Power BI Developer | Python Developer",
  description: "I build data-driven dashboards, analytics solutions, AI applications and modern full-stack applications using Python, Power BI, SQL and TypeScript.",
  email: "your-email@example.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  upwork: "https://www.upwork.com/"
};
const skillGroups = [
  { category: "Programming", items: ["Python", "TypeScript", "JavaScript", "C"] },
  { category: "Data & Analytics", items: ["Pandas", "NumPy", "Matplotlib", "EDA"] },
  { category: "Business Intelligence", items: ["Power BI", "DAX", "Power Query"] },
  { category: "Database", items: ["SQL Server", "SQLAlchemy", "SQL"] },
  { category: "AI", items: ["Generative AI", "RAG", "LLM Applications", "Embeddings"] },
  { category: "Web Development", items: ["Svelte", "FastAPI", "Flask", "HTML", "CSS"] }
];
const projects = [
  {
    title: "Superstore Sales Analytics",
    category: "Power BI",
    description: "Interactive dashboard for sales, profit, customers, products and regional performance.",
    technologies: ["Power BI", "DAX", "Power Query"],
    icon: "📊",
    link: "#"
  },
  {
    title: "RAG AI Assistant",
    category: "Generative AI",
    description: "Document-based question answering application using retrieval, embeddings and an LLM.",
    technologies: ["Python", "RAG", "LLM", "Embeddings"],
    icon: "🤖",
    link: "#"
  },
  {
    title: "Sales Prediction Model",
    category: "Data Science",
    description: "Machine learning workflow for cleaning historical sales data and predicting future outcomes.",
    technologies: ["Python", "Pandas", "NumPy", "ML"],
    icon: "📈",
    link: "#"
  },
  {
    title: "Full-Stack Analytics App",
    category: "Full Stack",
    description: "Modern analytics application with a Svelte frontend, FastAPI backend and SQL Server.",
    technologies: ["Svelte", "TypeScript", "FastAPI", "SQL Server"],
    icon: "🌐",
    link: "#"
  }
];
const services = [
  { title: "Power BI Development", description: "Interactive dashboards, DAX measures and business reporting." },
  { title: "Data Analysis", description: "Data cleaning, exploration and visualization with Python." },
  { title: "Python Development", description: "APIs, automation and backend applications using Python." },
  { title: "AI & RAG", description: "Practical AI applications using LLMs, retrieval and document search." },
  { title: "SQL Development", description: "Queries, reporting datasets and SQL Server data solutions." },
  { title: "Full-Stack Applications", description: "Svelte and TypeScript applications backed by Python APIs." }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let menuOpen = false;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(personalInfo.name)} | Data Science &amp; Power BI</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Portfolio of Mansi Garg — Data Science, Power BI, Python, AI and full-stack development."/>`);
    });
    $$renderer2.push(`<nav class="navbar svelte-1uha8ag"><div class="container nav-inner svelte-1uha8ag"><a class="logo svelte-1uha8ag" href="#home">Mansi<span class="svelte-1uha8ag">.</span></a> <button class="menu svelte-1uha8ag" aria-label="Toggle navigation">☰</button> <div${attr_class("nav-links svelte-1uha8ag", void 0, { "open": menuOpen })}><a href="#home" class="svelte-1uha8ag">Home</a> <a href="#about" class="svelte-1uha8ag">About</a> <a href="#skills" class="svelte-1uha8ag">Skills</a> <a href="#projects" class="svelte-1uha8ag">Projects</a> <a href="#services" class="svelte-1uha8ag">Services</a> <a href="#contact" class="svelte-1uha8ag">Contact</a></div></div></nav> <main><section id="home" class="hero svelte-1uha8ag"><div class="container hero-grid svelte-1uha8ag"><div class="hero-copy svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">HELLO, I'M</p> <h1 class="svelte-1uha8ag">${escape_html(personalInfo.name)}</h1> <h2 class="svelte-1uha8ag">${escape_html(personalInfo.role)}</h2> <p class="hero-description svelte-1uha8ag">${escape_html(personalInfo.description)}</p> <div class="actions svelte-1uha8ag"><a class="btn primary svelte-1uha8ag" href="#projects">View My Work</a> <a class="btn secondary svelte-1uha8ag" href="#contact">Contact Me</a></div> <div class="quick-links svelte-1uha8ag"><a${attr("href", personalInfo.linkedin)} target="_blank" rel="noreferrer" class="svelte-1uha8ag">LinkedIn ↗</a> <a${attr("href", personalInfo.github)} target="_blank" rel="noreferrer" class="svelte-1uha8ag">GitHub ↗</a> <a${attr("href", personalInfo.upwork)} target="_blank" rel="noreferrer" class="svelte-1uha8ag">Upwork ↗</a></div></div> <div class="profile-card svelte-1uha8ag" aria-label="Profile placeholder"><div class="profile-circle svelte-1uha8ag">MG</div> <div class="floating-card one svelte-1uha8ag">Python</div> <div class="floating-card two svelte-1uha8ag">Power BI</div> <div class="floating-card three svelte-1uha8ag">AI + RAG</div></div></div></section> <section id="about" class="section"><div class="container"><div class="section-heading"><p class="label svelte-1uha8ag">ABOUT ME</p> <h2>Turning data into useful solutions.</h2></div> <div class="about-grid svelte-1uha8ag"><div><p class="muted svelte-1uha8ag">I work across data analytics, business intelligence, Python development and artificial intelligence. I enjoy taking a business problem, understanding the data behind it and turning it into something practical and easy to use.</p> <p class="muted svelte-1uha8ag">My portfolio combines analytics dashboards, machine learning, AI/RAG applications and modern web development with Svelte and TypeScript.</p></div> <div class="stats svelte-1uha8ag"><div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">Power BI</strong><span class="svelte-1uha8ag">Dashboards &amp; DAX</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">Python</strong><span class="svelte-1uha8ag">Data &amp; Backend</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">AI</strong><span class="svelte-1uha8ag">GenAI &amp; RAG</span></div> <div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">SQL</strong><span class="svelte-1uha8ag">Data Solutions</span></div></div></div></div></section> <section id="skills" class="section soft svelte-1uha8ag"><div class="container"><div class="section-heading"><p class="label svelte-1uha8ag">MY SKILLS</p> <h2>Technologies I work with.</h2></div> <div class="skills-grid svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(skillGroups);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let group = each_array[$$index_1];
      $$renderer2.push(`<article class="skill-card svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(group.category)}</h3> <div class="tags svelte-1uha8ag"><!--[-->`);
      const each_array_1 = ensure_array_like(group.items);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$renderer2.push(`<span class="svelte-1uha8ag">${escape_html(item)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section id="projects" class="section"><div class="container"><div class="section-heading"><p class="label svelte-1uha8ag">FEATURED WORK</p> <h2>Projects that show what I can build.</h2></div> <div class="projects-grid svelte-1uha8ag"><!--[-->`);
    const each_array_2 = ensure_array_like(projects);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let project = each_array_2[$$index_3];
      $$renderer2.push(`<article class="project-card svelte-1uha8ag"><div class="project-visual svelte-1uha8ag"><span class="svelte-1uha8ag">${escape_html(project.icon)}</span><small class="svelte-1uha8ag">${escape_html(project.category)}</small></div> <div class="project-body svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(project.title)}</h3> <p class="svelte-1uha8ag">${escape_html(project.description)}</p> <div class="tags svelte-1uha8ag"><!--[-->`);
      const each_array_3 = ensure_array_like(project.technologies);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let tech = each_array_3[$$index_2];
        $$renderer2.push(`<span class="svelte-1uha8ag">${escape_html(tech)}</span>`);
      }
      $$renderer2.push(`<!--]--></div> <a${attr("href", project.link)} class="svelte-1uha8ag">View Project →</a></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section id="services" class="section soft svelte-1uha8ag"><div class="container"><div class="section-heading"><p class="label svelte-1uha8ag">SERVICES</p> <h2>How I can help your project.</h2></div> <div class="services-grid svelte-1uha8ag"><!--[-->`);
    const each_array_4 = ensure_array_like(services);
    for (let i = 0, $$length = each_array_4.length; i < $$length; i++) {
      let service = each_array_4[i];
      $$renderer2.push(`<article class="service-card svelte-1uha8ag"><span class="number svelte-1uha8ag">0${escape_html(i + 1)}</span> <h3 class="svelte-1uha8ag">${escape_html(service.title)}</h3> <p class="svelte-1uha8ag">${escape_html(service.description)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section id="contact" class="contact svelte-1uha8ag"><div class="container contact-box svelte-1uha8ag"><p class="label svelte-1uha8ag">GET IN TOUCH</p> <h2 class="svelte-1uha8ag">Let's work together.</h2> <p class="svelte-1uha8ag">Have a data, analytics, AI or software development project? Let's discuss it.</p> <a class="contact-email svelte-1uha8ag"${attr("href", `mailto:${personalInfo.email}`)}>${escape_html(personalInfo.email)}</a> <div class="socials svelte-1uha8ag"><a${attr("href", personalInfo.linkedin)} target="_blank" rel="noreferrer">LinkedIn</a> <a${attr("href", personalInfo.github)} target="_blank" rel="noreferrer">GitHub</a> <a${attr("href", personalInfo.upwork)} target="_blank" rel="noreferrer">Upwork</a></div></div></section></main> <footer class="svelte-1uha8ag"><div class="container">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} ${escape_html(personalInfo.name)}. All rights reserved.</div></footer>`);
  });
}
export {
  _page as default
};
