import styles from "./App.module.scss";
import sydney from "./sydney2.jpg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);

function App() {
  return (
    <div className={styles.app}>
      {/* Navbar */}
      <nav className={`${styles.nav} ${styles.container}`}>
        <p>MTU</p>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Landing/Introduction */}
      <div className={`${styles.landingContainer} ${styles.container}`}>
        <h1>
          Hi 👋, I'm <span className={styles.name}>Michael</span>
        </h1>
        <p>
          I'm a full stack developer based in <strong>Sydney, Australia</strong>
          .
        </p>
        <div className={styles.socialIcons}>
          <a href="https://github.com/mtu2" title="GitHub">
            <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
          </a>
          <a href="www.linkedin.com/in/tu-michael" title="LinkedIn">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.icon}
            />
          </a>
        </div>
        <img src={sydney} alt="Sydney"></img>
      </div>

      {/* About Me */}
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
        <div className={`${styles.skills}`}>
          <ul>
            <li>HTML & CSS/SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React & Redux</li>
          </ul>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>Git</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className={`${styles.projectsContainer} ${styles.container}`}>
        <h2>Projects</h2>
        <div className={styles.project}>
          <div className={styles.projectTitle}>
            <h3>Pomodoro</h3>
            <div>
              <a href="http://mtu-pomodoro.herokuapp.com/" title="Pomodoro">
                <FontAwesomeIcon
                  icon={["fas", "external-link-alt"]}
                  className={styles.icon}
                />
              </a>
              <a href="https://github.com/mtu2" title="GitHub">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <p>
            Track your work using a fully customisable pomodoro-based timer
            system. Create an account and sync your work across multiple
            devices.
          </p>
          <code>
            HTML, CSS/SCSS, JavaScript, React, Node.js, Express, MongoDB, OAuth
          </code>
        </div>
        <div className={styles.project}>
          <div className={styles.projectTitle}>
            <h3>How bad is your code?</h3>
            <div>
              <a
                href="https://chrome.google.com/webstore/detail/how-bad-is-your-code/imhffphhfhhmdohjflcnahlnjcoogafk?hl=en/"
                title="How bad is your code? - Chrome Webstore"
              >
                <FontAwesomeIcon
                  icon={["fas", "external-link-alt"]}
                  className={styles.icon}
                />
              </a>
              <a href="https://github.com/mtu2" title="GitHub">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <p>
            A chrome extension that visualises all your visits and bookmarks to
            stackoverflow.com. Add additional websites to keep track of as well
            as your Stack Overflow user id to see more of your usage stats.
          </p>
          <code>HTML, CSS/SCSS, JavaScript, jQuery, Chrome API</code>
        </div>
        <div className={styles.project}>
          <div className={styles.projectTitle}>
            <h3>Other projects...</h3>
          </div>
        </div>
      </div>

      <div className={`${styles.reachOutContainer} ${styles.container}`}>
        <h2>Reach Out</h2>
        <p>
          I'm always down for a coffee chat. Feel free to reach out to me either
          by email at{" "}
          <span className={styles.email}>2.michaeltu@gmail.com</span> or on
          social media.
        </p>
      </div>
    </div>
  );
}

export default App;
