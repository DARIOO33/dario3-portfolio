const skills = [
  { name: "MERN stack", level: 90, color: "lime" },
  { name: "Next.js", level: 85, color: "blue" },
  { name: "JavaScript", level: 85, color: "violet" },
  { name: "PostgreSQL", level: 80, color: "cyan" },
  { name: "Prisma", level: 80, color: "lime" },
  { name: "Python", level: 40, color: "orange" },
  { name: "C / Java / Laravel", level: 40, color: "pink" },
];

const projects = [
  { number: "01", name: "DarioStore", type: "E-COMMERCE · LIVE", description: "A Tunisia-focused online storefront. I handled the development, deployment, search indexing, and SEO optimization.", tags: ["Development", "Deployment", "SEO"], mark: "shop", image: "/dario%20store.png", href: "https://dariostore.tn" },
  { number: "02", name: "Level Up", type: "AUDIO · E-COMMERCE · LIVE", description: "A specialist IEM storefront for Tunisia. I handled the development, deployment, search indexing, and SEO optimization.", tags: ["Development", "Deployment", "SEO"], mark: "grid", image: "/level%20up.png", href: "https://levelup-store.tn" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Dario, home"><span className="wordmark-icon">D<span>.</span></span><span className="wordmark-name">DARIO<span>33</span></span></a>
          <nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About me</a><a href="#contact">Contact</a></nav>
          <a className="availability" href="#contact"><span className="status-dot" /> AVAILABLE FOR WORK</a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> FULL-STACK DEVELOPER <span className="eyebrow-muted">· TUNISIA</span></p>
            <h1>I build things<br />for the <span className="serif-accent">web<span className="accent-period">.</span></span></h1>
            <p className="hero-description">Hey, I’m Dario — a full-stack developer who turns thoughtful ideas into fast, polished digital experiences.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Arrow /></a><a className="text-link" href="#contact">Let’s talk <Arrow diagonal /></a></div>
            <div className="hero-social"><a href="https://github.com/DARIOO33" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><span /> <a href="https://www.linkedin.com/in/dario33/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a></div>
          </div>

          <div className="hero-art" aria-label="Code editor illustration">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="float-label label-top"><span className="pulse-dot" /> BUILDING THE NEXT THING</div>
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.tsx</span><span className="window-lock">⌘</span></div>
              <div className="code-body"><div className="line-numbers">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10</div><pre><span className="code-pink">const</span> <span className="code-blue">developer</span> = {'{'}<br />  name: <span className="code-yellow">&quot;Dario&quot;</span>,<br />  role: <span className="code-yellow">&quot;Full-stack dev&quot;</span>,<br />  stack: [<span className="code-yellow">&quot;MERN&quot;</span>,<br />         <span className="code-yellow">&quot;Next.js&quot;</span>],<br />  loves: <span className="code-yellow">&quot;the details&quot;</span>,<br />  openTo: <span className="code-purple">newIdeas</span>,<br />  ship: <span className="code-green">() =&gt; true</span>,<br />{'}'};</pre></div>
              <div className="window-footer"><span><i className="footer-dot" /> Ready to build</span><span>UTF-8&nbsp; · &nbsp;TypeScript</span></div>
            </div>
            <div className="float-label label-bottom"><span className="mini-stars">✳</span> MADE WITH INTENTION</div>
            <div className="art-index">01 <span>—</span> 04</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="tech-strip" aria-label="Technologies"><span className="strip-label">TOOLS I WORK WITH</span><span className="tech-name"><b className="tech-mark mongo">◉</b> MongoDB</span><span className="tech-name"><b className="tech-mark express">e</b> Express</span><span className="tech-name"><b className="tech-mark react">◌</b> React</span><span className="tech-name"><b className="tech-mark node">⬡</b> Node.js</span><span className="tech-name"><b className="tech-mark next">N</b> Next.js</span><span className="tech-name"><b className="tech-mark postgres">◉</b> PostgreSQL</span></section>

        <section className="about-section section-pad" id="about">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p><span className="section-index">01 / PROFILE</span></div>
          <div className="about-grid"><div><h2>Curious by nature.<br /><span className="serif-accent">Builder</span> by choice.</h2><a className="inline-link" href="https://github.com/DARIOO33" target="_blank" rel="noreferrer">A bit more about my journey <Arrow diagonal /></a></div><div className="about-copy"><p>I’m a developer who enjoys the whole picture — from a clean interface and a thoughtful user flow to the data and systems working quietly behind it.</p><p>My strongest work lives in the JavaScript ecosystem. I reach for the right tool for the job, keep learning as I go, and care about the finishing touches as much as the first idea.</p><div className="about-signature"><span className="signature-mark">D<span>.</span></span><span>Thoughtful code. Useful products. <b>Always learning.</b></span></div></div></div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> MY TOOLKIT</p><span className="section-index">02 / SKILLS</span></div>
          <div className="skills-top"><h2>Comfortable in the<br /><span className="serif-accent">stack.</span></h2><p>A practical toolkit for shaping ideas into complete, considered products.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <div className="skill-row" key={skill.name}><div className="skill-name"><span className="skill-index">0{index + 1}</span><span>{skill.name}</span></div><div className="skill-meter"><div className={`skill-fill ${skill.color}`} style={{ width: `${skill.level}%` }} /></div><span className="skill-level">{skill.level}<small>%</small></span></div>)}</div>
          <p className="skills-note"><span>+</span> Also exploring <b>Supabase</b>, modern tooling & whatever solves the problem best.</p>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p><span className="section-index">03 / PROJECTS</span></div>
          <div className="work-intro"><h2>Ideas made<br /><span className="serif-accent">tangible.</span></h2><p>Live storefronts built for real customers and businesses.</p></div>
          <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}><div className={`project-art ${project.mark}`}><img src={project.image} alt={`${project.name} website screenshot`} /></div><div className="project-info"><div className="project-meta"><span>{project.number} /</span><span>{project.type}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><Arrow diagonal /></a></article>)}</div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-noise" /><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> HAVE A GOOD ONE IN MIND?</p><h2>Let’s make<br /><span className="serif-accent">it real.</span></h2><a className="button button-light" href="mailto:darioanwar3@gmail.com">Start a conversation <Arrow diagonal /></a><p className="contact-small">Have an idea, a question, or just want to say hello? My inbox is open.</p><a className="contact-email" href="mailto:darioanwar3@gmail.com">darioanwar3@gmail.com</a></div><div className="contact-side">TUNISIA<br />OPEN TO THE WORLD <span>↗</span></div></section>

        <footer className="footer"><a className="wordmark" href="#top"><span className="wordmark-icon">D<span>.</span></span><span className="wordmark-name">DARIO<span>33</span></span></a><span className="footer-credit">DESIGNED & BUILT WITH CARE <span>© 2025</span></span><div className="footer-links"><a href="https://github.com/DARIOO33" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><a href="https://www.linkedin.com/in/dario33/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="#top">BACK TO TOP ↑</a></div></footer>
      </div>
    </main>
  );
}
