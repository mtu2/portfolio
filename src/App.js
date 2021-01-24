import styles from "./App.module.scss";
import sydney from "./sydney2.jpg";

function App() {
  return (
    <div className={styles.app}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <h3>MTU</h3>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={`${styles.landingContainer} ${styles.container}`}>
        <h1>
          Hi 👋, I'm <span className={styles.name}>Michael</span>
        </h1>
        <p>
          I'm a full stack developer based in <strong>Sydney, Australia</strong>
          .
        </p>
        <p>Github Icon</p>
        <p>LinkedIn Icon</p>
        <img src={sydney} alt="Sydney"></img>
      </div>
      <div className={`${styles.aboutMeContainer} ${styles.container}`}>
        <h2>About Me</h2>
        <p>
          I'm a student at the University of Melbourne currently studying a{" "}
          <strong>Bachelor of Commerce</strong>, majoring in Finance and
          Economics, as well as a concurrent{" "}
          <strong>Diploma in Mathematical Sciences</strong> (Statistic &
          Stochastic Processes).
        </p>
        <p>
          Over the years I've learnt to code, and have dedicated time to learn
          computer science and full stack development outside of my university
          degree. I'm working towards my goal of combining my business and
          mathematical side into a meaningful career in tech.
        </p>
        <p>What I've been working with lately...</p>
        <ul>
          <li>HTML, CSS/SCSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express.js</li>
        </ul>
        <ul>
          <li>LinkedIn Icon</li>
          <li>MongoDB</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>
      <div className={`${styles.projectsContainer} ${styles.container}`}>
        <h2>Projects</h2>
        <p>Pomodoro project</p>
        <p>Simple definition</p>
        <p>Chrome extension</p>
        <p>Algorithm illustration</p>

        <h2>Reach Out</h2>
        <p>I'm always down for a coffee chat.</p>
        <p>
          Feel free to reach out to me either by email at{" "}
          <span className={styles.email}>2.michaeltu@gmail.com</span> or on
          social media
        </p>
        <p>Github Icon</p>
        <p>LinkedIn Icon</p>
      </div>
    </div>
  );
}

export default App;
