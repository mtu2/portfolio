import styles from "./App.module.scss";
import pomodoroScreenshot from "./pomodoro-screenshot.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);

function App() {
  return (
    <div className={styles.app}>
      {/* Landing/Introduction */}
      <div className={`${styles.landingContainer} ${styles.container}`}>
        <div className={styles.intro}>
          <img
            alt="LinkedIn"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFOZPwTmkBXIw/profile-displayphoto-shrink_800_800/0/1587538300231?e=1619049600&v=beta&t=5i7meG2J4PSZCXgSu2lCClCLgLMwUsbhVo6Ow8Nwu8E"
          />
          <div>
            <div className={styles.name}>
              <h1>michael tu</h1>
              <div className={styles.socialIcons}>
                <a href="https://github.com/mtu2" title="GitHub">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className={styles.icon}
                  />
                </a>
                <a href="www.linkedin.com/in/tu-michael" title="LinkedIn">
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
            <p>
              Hi 👋, I'm Michael. I'm a full stack developer based in{" "}
              <strong>Sydney, Australia</strong>.
            </p>
          </div>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>

      {/* About Me */}
      <div className={`${styles.aboutMeContainer} ${styles.container}`}>
        <h2>🤷 about me</h2>
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
        <h2>👨‍💻 projects</h2>
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
          <img src={pomodoroScreenshot} alt="Pomodoro Screenshot" />
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

      {/* Reach Out */}
      <div className={`${styles.reachOutContainer} ${styles.container}`}>
        <h2>💬 reach out</h2>
        <p>
          I'm always down for a coffee chat. Feel free to reach out to me either
          by email at{" "}
          <span className={styles.email}>2.michaeltu@gmail.com</span> or on
          social media.
        </p>
      </div>

      {/* Footer */}
      <footer className={styles.container}>
        <p>
          <strong>©️ 2021, Michael Tu 💖</strong>
        </p>
        <div className={styles.footerIcons}>
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
      </footer>
    </div>
  );
}

export default App;
