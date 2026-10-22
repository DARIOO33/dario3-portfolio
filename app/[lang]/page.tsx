import { notFound } from "next/navigation";

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

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (lang !== "fr" && lang !== "en") notFound();
  const fr = lang === "fr";
  return (
    <main>
      <div className="site-shell">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Dario, home"><span className="wordmark-icon">D<span>.</span></span><span className="wordmark-name">DARIO<span>33</span></span></a>
          <nav aria-label={fr ? "Navigation principale" : "Main navigation"}><a href="#work">{fr ? "Projets" : "Selected work"}</a><a href="#about">{fr ? "À propos" : "About me"}</a><a href="#contact">Contact</a></nav>
          <div className="language-switch"><a href="/fr" lang="fr" aria-current={fr ? "page" : undefined}>FR</a><span>/</span><a href="/en" lang="en" aria-current={!fr ? "page" : undefined}>EN</a></div>
          <a className="availability" href="#contact"><span className="status-dot" /> {fr ? "DISPONIBLE POUR PROJETS" : "AVAILABLE FOR WORK"}</a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> {fr ? "DÉVELOPPEUR WEB FULL-STACK" : "FULL-STACK WEB DEVELOPER"} <span className="eyebrow-muted">· {fr ? "TUNISIE" : "TUNISIA"}</span></p>
            <h1>{fr ? <>Je crée des sites<br />et des <span className="serif-accent">applications<span className="accent-period">.</span></span></> : <>I build things<br />for the <span className="serif-accent">web<span className="accent-period">.</span></span></>}</h1>
            <p className="hero-description">{fr ? "Je suis Dario, développeur web full-stack en Tunisie. Je conçois des sites rapides et des expériences numériques soignées pour les entreprises et leurs clients." : "Hey, I’m Dario — a full-stack developer in Tunisia who turns thoughtful ideas into fast, polished websites and digital experiences."}</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">{fr ? "Voir mes projets" : "Explore my work"} <Arrow /></a><a className="text-link" href="#contact">{fr ? "Parlons de votre projet" : "Let’s talk"} <Arrow diagonal /></a></div>
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
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> {fr ? "À PROPOS DE MOI" : "A LITTLE ABOUT ME"}</p><span className="section-index">01 / {fr ? "PROFIL" : "PROFILE"}</span></div>
          <div className="about-grid"><div><h2>{fr ? <>Curieux par nature.<br /><span className="serif-accent">Créateur</span> par choix.</> : <>Curious by nature.<br /><span className="serif-accent">Builder</span> by choice.</>}</h2><a className="inline-link" href="https://github.com/DARIOO33" target="_blank" rel="noreferrer">{fr ? "En savoir plus sur mon parcours" : "A bit more about my journey"} <Arrow diagonal /></a></div><div className="about-copy"><p>{fr ? "J’aime penser un produit dans son ensemble : interface claire, parcours utilisateur intuitif, données et systèmes fiables en coulisses." : "I’m a developer who enjoys the whole picture — from a clean interface and a thoughtful user flow to the data and systems working quietly behind it."}</p><p>{fr ? "Je travaille surtout avec l’écosystème JavaScript et choisis les outils adaptés à chaque projet. J’accorde autant d’attention aux finitions qu’à l’idée de départ." : "My strongest work lives in the JavaScript ecosystem. I reach for the right tool for the job, keep learning as I go, and care about the finishing touches as much as the first idea."}</p><div className="about-signature"><span className="signature-mark">D<span>.</span></span><span>{fr ? <>Code soigné. Produits utiles. <b>Toujours apprendre.</b></> : <>Thoughtful code. Useful products. <b>Always learning.</b></>}</span></div></div></div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> {fr ? "MES OUTILS" : "MY TOOLKIT"}</p><span className="section-index">02 / {fr ? "COMPÉTENCES" : "SKILLS"}</span></div>
          <div className="skills-top"><h2>{fr ? <>À l’aise dans mon<br /><span className="serif-accent">écosystème.</span></> : <>Comfortable in the<br /><span className="serif-accent">stack.</span></>}</h2><p>{fr ? "Des outils concrets pour transformer une idée en produit numérique complet et soigné." : "A practical toolkit for shaping ideas into complete, considered products."}</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <div className="skill-row" key={skill.name}><div className="skill-name"><span className="skill-index">0{index + 1}</span><span>{skill.name}</span></div><div className="skill-meter"><div className={`skill-fill ${skill.color}`} style={{ width: `${skill.level}%` }} /></div><span className="skill-level">{skill.level}<small>%</small></span></div>)}</div>
          <p className="skills-note"><span>+</span> {fr ? <>J’explore aussi <b>Supabase</b>, les outils modernes et les solutions adaptées à chaque besoin.</> : <>Also exploring <b>Supabase</b>, modern tooling & whatever solves the problem best.</>}</p>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> {fr ? "PROJETS SÉLECTIONNÉS" : "SELECTED WORK"}</p><span className="section-index">03 / {fr ? "PROJETS" : "PROJECTS"}</span></div>
          <div className="work-intro"><h2>{fr ? <>Des idées<br /><span className="serif-accent">concrétisées.</span></> : <>Ideas made<br /><span className="serif-accent">tangible.</span></>}</h2><p>{fr ? "Des boutiques en ligne conçues pour des entreprises et des clients en Tunisie." : "Live storefronts built for real customers and businesses."}</p></div>
          <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}><div className={`project-art ${project.mark}`}><img src={project.image} alt={fr ? `Capture d’écran du site ${project.name}` : `${project.name} website screenshot`} /></div><div className="project-info"><div className="project-meta"><span>{project.number} /</span><span>{fr ? (project.number === "01" ? "E-COMMERCE · EN LIGNE" : "AUDIO · E-COMMERCE · EN LIGNE") : project.type}</span></div><h3>{project.name}</h3><p>{fr ? (project.number === "01" ? "Boutique en ligne pensée pour le marché tunisien. J’ai réalisé le développement, le déploiement, l’indexation et l’optimisation SEO." : "Boutique spécialisée dans les écouteurs intra-auriculaires (IEM) en Tunisie. Développement, déploiement, indexation et optimisation SEO.") : project.description}</p><div className="project-tags">{(fr ? ["Développement", "Déploiement", "SEO"] : project.tags).map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={fr ? `Visiter ${project.name}` : `Visit ${project.name}`}><Arrow diagonal /></a></article>)}</div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-noise" /><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> {fr ? "UN PROJET EN TÊTE ?" : "HAVE A GOOD ONE IN MIND?"}</p><h2>{fr ? <>Donnons vie<br /><span className="serif-accent">à votre idée.</span></> : <>Let’s make<br /><span className="serif-accent">it real.</span></>}</h2><a className="button button-light" href="mailto:darioanwar3@gmail.com">{fr ? "Démarrer une conversation" : "Start a conversation"} <Arrow diagonal /></a><p className="contact-small">{fr ? "Un projet de site web, une question ou simplement envie d’échanger ? Écrivez-moi." : "Have an idea, a question, or just want to say hello? My inbox is open."}</p><a className="contact-email" href="mailto:darioanwar3@gmail.com">darioanwar3@gmail.com</a></div><div className="contact-side">{fr ? <>TUNISIE<br />OUVERT SUR LE MONDE</> : <>TUNISIA<br />OPEN TO THE WORLD</>} <span>↗</span></div></section>

        <footer className="footer"><a className="wordmark" href="#top"><span className="wordmark-icon">D<span>.</span></span><span className="wordmark-name">DARIO<span>33</span></span></a><span className="footer-credit">DESIGNED & BUILT WITH CARE <span>© 2025</span></span><div className="footer-links"><a href="https://github.com/DARIOO33" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><a href="https://www.linkedin.com/in/dario33/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="#top">BACK TO TOP ↑</a></div></footer>
      </div>
    </main>
  );
}
