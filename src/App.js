import styles from "./App.module.scss";
// import pomodoroScreenshot from "./pomodoro-screenshot.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

library.add(fab, fas);

function App() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const reachOutRef = useRef(null);

  function scrollIntoView(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.app}>
      {/* Landing/Introduction */}
      <div className={`${styles.landingContainer} ${styles.container}`}>
        <img
          alt="LinkedIn"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFOZPwTmkBXIw/profile-displayphoto-shrink_800_800/0/1587538300231?e=1619049600&v=beta&t=5i7meG2J4PSZCXgSu2lCClCLgLMwUsbhVo6Ow8Nwu8E"
        />
        <div className={styles.name}>
          <h1>michael tu</h1>
          <div className={styles.socialIcons}>
            <a href="https://github.com/mtu2" title="GitHub">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className={styles.icon}
              />
            </a>
            <a href="https://www.linkedin.com/in/tu-michael" title="LinkedIn">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className={styles.icon}
              />
            </a>
          </div>
        </div>
        <p>
          Hi 👋, I'm Michael. I'm a software engineer based in{" "}
          <strong>Sydney, Australia</strong>.
        </p>

        <div className={styles.nav}>
          <ul>
            <li onClick={() => scrollIntoView(aboutMeRef)}>about</li>
            <li onClick={() => scrollIntoView(projectsRef)}>projects</li>
            <li onClick={() => scrollIntoView(reachOutRef)}>contact</li>
          </ul>
        </div>
      </div>

      {/* About Me */}
      <div
        ref={aboutMeRef}
        className={`${styles.aboutMeContainer} ${styles.container}`}
      >
        <h2>✏️ about me</h2>
        <p>
          I am a student at the University of Melbourne currently studying a{" "}
          <strong>Bachelor of Commerce</strong>, majoring in Finance and
          Economics, as well as a concurrent{" "}
          <strong>Diploma in Mathematical Sciences</strong> (Statistic &
          Stochastic Processes).
        </p>
        <p>
          Over the years, I've learnt to code and have dedicated time to learn
          computer science and full stack development outside of my university
          degree. I'm working towards my goal of combining my
          business/mathematics background, with my passion for technology, into
          a meaningful career in tech.
        </p>
        <p>What I've been working with lately...</p>
        <div className={`${styles.skills}`}>
          <ul>
            <li>HTML & (S)CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Python</li>
            <li>Java</li>
            <li>Git</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div
        ref={projectsRef}
        className={`${styles.projectsContainer} ${styles.container}`}
      >
        <h2>👨‍💻 projects</h2>
        <div className={styles.project}>
          <div className={styles.projectTitle}>
            <h3>Pomotimer</h3>
            <div>
              <a href="http://mtu-pomodoro.herokuapp.com/" title="Pomodoro">
                <FontAwesomeIcon
                  icon={["fas", "external-link-alt"]}
                  className={styles.icon}
                />
              </a>
              <a href="https://github.com/mtu2/pomodoro" title="GitHub">
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
            devices. Pomotimer uses the MERN stack with Google OAuth to register
            and save user data.
          </p>
          <code>React, Node.js, Express, MongoDB, OAuth, SASS</code>
          {/* <img src={pomodoroScreenshot} alt="Pomodoro Screenshot" /> */}
        </div>

        <div className={styles.project}>
          <div className={styles.projectTitle}>
            <h3>Script to Print</h3>
            <div>
              <a
                href="https://script-to-print.mttu.dev/"
                title="Script to Print"
              >
                <FontAwesomeIcon
                  icon={["fas", "external-link-alt"]}
                  className={styles.icon}
                />
              </a>
              <a href="https://github.com/mtu2/script-to-print" title="GitHub">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <p>
            Create posters and wallpapers by combining your favourite movie
            scripts/books/lyrics and images. Script to Print utilises the HTML5
            Canvas API to imprint and overlay images on text via pixel
            manipulation.
          </p>
          <code>TypeScript, React, SASS</code>
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
              <a
                href="https://github.com/mtu2/how-bad-is-your-code"
                title="GitHub"
              >
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
            as your Stack Overflow user id to see more of your usage stats. This
            extension uses the Chrome and Stack Exchange API to sort, categorise
            and represent user's browsing history and saved bookmarks.
          </p>
          <code>jQuery, Chrome API, Stack Exchange API, SASS</code>
        </div>

        <div className={styles.project}>
          <div className={styles.projectTitle}>
            <h3>Other projects...</h3>
          </div>
        </div>

        {/* <div className={styles.project}>
          <div className={styles.projectTitle}>
            <h3>Simple Definition</h3>
            <div>
              <a
                href="https://simple-definition.mttu.dev/"
                title="Simple Definition"
              >
                <FontAwesomeIcon
                  icon={["fas", "external-link-alt"]}
                  className={styles.icon}
                />
              </a>
              <a
                href="https://github.com/mtu2/simple-definition"
                title="GitHub"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <p>
            A simple web app that generates random words with definitions and
            examples.
          </p>
          <code>HTML/CSS, React</code>
        </div> */}
      </div>

      {/* Reach Out */}
      <div
        ref={reachOutRef}
        className={`${styles.reachOutContainer} ${styles.container}`}
      >
        <h2>💬 reach out</h2>
        <p>
          I'm always down for a coffee. Feel free to reach out to me either by
          email at <span className={styles.email}>2.michaeltu@gmail.com</span>{" "}
          or on social media.
        </p>
      </div>

      {/* Footer */}
      <footer className={styles.container}>
        <p>
          <strong>©️ {new Date().getFullYear()}, Michael Tu 💖</strong>
        </p>
        <div className={styles.footerIcons}>
          <a href="https://github.com/mtu2" title="GitHub">
            <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/tu-michael" title="LinkedIn">
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
