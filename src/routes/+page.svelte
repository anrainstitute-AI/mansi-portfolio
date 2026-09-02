<script lang="ts">
  import { personalInfo, projects, services, skillGroups } from '$lib/data/portfolio';

  let menuOpen = false;
</script>

<svelte:head>
  <title>{personalInfo.name} | Data Science & Power BI</title>
  <meta name="description" content="Portfolio of Mansi Garg — Data Science, Power BI, Python, AI and full-stack development." />
</svelte:head>

<nav class="navbar">
  <div class="container nav-inner">
    <a class="logo" href="#home" onclick={() => (menuOpen = false)}>Mansi<span>.</span></a>
    <button class="menu" aria-label="Toggle navigation" onclick={() => (menuOpen = !menuOpen)}>☰</button>
    <div class:open={menuOpen} class="nav-links">
      <a href="#home" onclick={() => (menuOpen = false)}>Home</a>
      <a href="#about" onclick={() => (menuOpen = false)}>About</a>
      <a href="#skills" onclick={() => (menuOpen = false)}>Skills</a>
      <a href="#projects" onclick={() => (menuOpen = false)}>Projects</a>
      <a href="#services" onclick={() => (menuOpen = false)}>Services</a>
      <a href="#contact" onclick={() => (menuOpen = false)}>Contact</a>
    </div>
  </div>
</nav>

<main>
  <section id="home" class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">HELLO, I'M</p>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.role}</h2>
        <p class="hero-description">{personalInfo.description}</p>
        <div class="actions">
          <a class="btn primary" href="#projects">View My Work</a>
          <a class="btn secondary" href="#contact">Contact Me</a>
        </div>
        <div class="quick-links">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={personalInfo.upwork} target="_blank" rel="noreferrer">Upwork ↗</a>
        </div>
      </div>
      <div class="profile-card" aria-label="Profile placeholder">
        <div class="profile-circle">MG</div>
        <div class="floating-card one">Python</div>
        <div class="floating-card two">Power BI</div>
        <div class="floating-card three">AI + RAG</div>
      </div>
    </div>
  </section>

  <section id="about" class="section">
    <div class="container">
      <div class="section-heading">
        <p class="label">ABOUT ME</p>
        <h2>Turning data into useful solutions.</h2>
      </div>
      <div class="about-grid">
        <div>
          <p class="muted">I work across data analytics, business intelligence, Python development and artificial intelligence. I enjoy taking a business problem, understanding the data behind it and turning it into something practical and easy to use.</p>
          <p class="muted">My portfolio combines analytics dashboards, machine learning, AI/RAG applications and modern web development with Svelte and TypeScript.</p>
        </div>
        <div class="stats">
          <div><strong>Power BI</strong><span>Dashboards & DAX</span></div>
          <div><strong>Python</strong><span>Data & Backend</span></div>
          <div><strong>AI</strong><span>GenAI & RAG</span></div>
          <div><strong>SQL</strong><span>Data Solutions</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="section soft">
    <div class="container">
      <div class="section-heading">
        <p class="label">MY SKILLS</p>
        <h2>Technologies I work with.</h2>
      </div>
      <div class="skills-grid">
        {#each skillGroups as group}
          <article class="skill-card">
            <h3>{group.category}</h3>
            <div class="tags">
              {#each group.items as item}<span>{item}</span>{/each}
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="projects" class="section">
    <div class="container">
      <div class="section-heading">
        <p class="label">FEATURED WORK</p>
        <h2>Projects that show what I can build.</h2>
      </div>
      <div class="projects-grid">
        {#each projects as project}
          <article class="project-card">
            <div class="project-visual"><span>{project.icon}</span><small>{project.category}</small></div>
            <div class="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div class="tags">{#each project.technologies as tech}<span>{tech}</span>{/each}</div>
              <a href={project.link}>View Project →</a>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="services" class="section soft">
    <div class="container">
      <div class="section-heading">
        <p class="label">SERVICES</p>
        <h2>How I can help your project.</h2>
      </div>
      <div class="services-grid">
        {#each services as service, i}
          <article class="service-card">
            <span class="number">0{i + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container contact-box">
      <p class="label">GET IN TOUCH</p>
      <h2>Let's work together.</h2>
      <p>Have a data, analytics, AI or software development project? Let's discuss it.</p>
      <a class="contact-email" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      <div class="socials">
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={personalInfo.upwork} target="_blank" rel="noreferrer">Upwork</a>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</div>
</footer>

<style>
  .navbar { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,.94); border-bottom: 1px solid #e5e7eb; backdrop-filter: blur(12px); }
  .nav-inner { height: 72px; display:flex; align-items:center; justify-content:space-between; }
  .logo { font-size:1.55rem; font-weight:800; } .logo span { color:#2563eb; }
  .nav-links { display:flex; gap:28px; color:#4b5563; font-weight:600; }
  .nav-links a:hover { color:#2563eb; }
  .menu { display:none; border:0; background:none; font-size:1.5rem; cursor:pointer; }

  .hero { min-height:680px; display:flex; align-items:center; background:linear-gradient(135deg,#f8fafc 0%,#eff6ff 100%); overflow:hidden; }
  .hero-grid { display:grid; grid-template-columns:1.25fr .75fr; gap:70px; align-items:center; }
  .eyebrow,.label { color:#2563eb; font-weight:800; letter-spacing:1.7px; }
  h1 { font-size:clamp(3.3rem,8vw,6rem); line-height:.95; margin:16px 0; letter-spacing:-.06em; }
  .hero-copy h2 { color:#374151; font-size:clamp(1.25rem,2.5vw,1.8rem); line-height:1.35; }
  .hero-description { max-width:680px; margin:22px 0; color:#6b7280; font-size:1.08rem; line-height:1.8; }
  .actions { display:flex; gap:14px; flex-wrap:wrap; }
  .btn { padding:13px 22px; border-radius:9px; font-weight:700; }
  .primary { background:#2563eb; color:white; box-shadow:0 10px 25px rgba(37,99,235,.18); }
  .secondary { border:1px solid #2563eb; color:#2563eb; background:white; }
  .quick-links { display:flex; gap:20px; margin-top:26px; color:#6b7280; font-size:.92rem; }
  .quick-links a:hover { color:#2563eb; }

  .profile-card { min-height:390px; position:relative; display:grid; place-items:center; }
  .profile-circle { width:290px; height:290px; border-radius:50%; display:grid; place-items:center; background:white; border:12px solid #dbeafe; box-shadow:0 25px 70px rgba(15,23,42,.12); color:#2563eb; font-size:5rem; font-weight:800; }
  .floating-card { position:absolute; padding:11px 15px; border-radius:10px; background:white; box-shadow:0 10px 30px rgba(15,23,42,.1); font-weight:700; font-size:.9rem; }
  .one { top:20px; right:10px; } .two { bottom:70px; left:0; } .three { bottom:10px; right:30px; }

  .soft { background:#f8fafc; }
  .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:70px; }
  .about-grid .muted + .muted { margin-top:20px; }
  .stats { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
  .stats div { padding:25px; background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; }
  .stats strong,.stats span { display:block; } .stats strong { font-size:1.2rem; margin-bottom:7px; } .stats span { color:#6b7280; font-size:.9rem; }

  .skills-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .skill-card,.service-card { padding:27px; background:white; border:1px solid #e5e7eb; border-radius:14px; }
  .skill-card h3,.service-card h3 { margin-bottom:18px; }
  .tags { display:flex; flex-wrap:wrap; gap:8px; }
  .tags span { padding:7px 10px; border-radius:20px; background:#eff6ff; color:#2563eb; font-size:.78rem; font-weight:600; }

  .projects-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:26px; }
  .project-card { border:1px solid #e5e7eb; border-radius:15px; overflow:hidden; background:white; transition:transform .2s, box-shadow .2s; }
  .project-card:hover { transform:translateY(-5px); box-shadow:0 18px 45px rgba(15,23,42,.08); }
  .project-visual { height:190px; background:#eff6ff; display:flex; align-items:center; justify-content:center; position:relative; }
  .project-visual span { font-size:4rem; } .project-visual small { position:absolute; top:15px; left:15px; background:white; padding:7px 10px; border-radius:7px; font-weight:700; color:#2563eb; }
  .project-body { padding:25px; } .project-body h3 { font-size:1.3rem; margin-bottom:10px; } .project-body p { color:#6b7280; line-height:1.7; }
  .project-body .tags { margin:18px 0; } .project-body a { color:#2563eb; font-weight:700; }

  .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .number { color:#2563eb; font-weight:800; } .service-card p { color:#6b7280; line-height:1.7; }

  .contact { background:#111827; color:white; padding:100px 0; }
  .contact-box { text-align:center; max-width:720px; }
  .contact-box h2 { color:white; font-size:clamp(2.4rem,5vw,4rem); margin:12px 0; }
  .contact-box > p:not(.label) { color:#d1d5db; line-height:1.8; }
  .contact-email { display:inline-block; margin:25px 0; font-size:1.15rem; color:white; }
  .socials { display:flex; justify-content:center; gap:25px; color:#93c5fd; }
  footer { background:#0f172a; color:#94a3b8; text-align:center; padding:24px; font-size:.9rem; }

  @media (max-width:900px) {
    .hero-grid { grid-template-columns:1fr; gap:20px; padding:80px 0; }
    .profile-card { order:-1; min-height:300px; }
    .profile-circle { width:220px; height:220px; font-size:4rem; }
    .skills-grid,.services-grid { grid-template-columns:repeat(2,1fr); }
  }
  @media (max-width:700px) {
    .menu { display:block; }
    .nav-links { display:none; position:absolute; top:72px; left:0; right:0; padding:20px; background:white; flex-direction:column; border-bottom:1px solid #e5e7eb; }
    .nav-links.open { display:flex; }
    .hero { min-height:auto; }
    .about-grid,.projects-grid,.skills-grid,.services-grid { grid-template-columns:1fr; }
    .stats { grid-template-columns:1fr 1fr; }
    .quick-links { flex-wrap:wrap; }
    .one { right:0; } .two { left:0; }
  }
</style>