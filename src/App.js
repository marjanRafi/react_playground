import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Md Marjan Morshed Rafi</h1>
        <p>
          Full Stack Developer | React Enthusiast | Business Analyst in FinTech
        </p>
      </header>

      {/* About Me Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack developer with a focus on React.js and
          MERN stack. I enjoy building dynamic web applications and am
          constantly learning new technologies to improve my skills.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>React.js & Redux</li>
          <li>JavaScript (ES6+)</li>
          <li>Node.js & Express.js</li>
          <li>MongoDB</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>Agile Methodologies</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Expense Manager (MERN)</h3>
          <p>
            A full-stack web application to manage personal expenses, built with
            the MERN stack. Users can add, edit, and delete expense records with
            easy categorization.
          </p>
          <a
            href="https://github.com/yourusername/expense-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>
            This is my portfolio website, built with React.js and styled with
            CSS to showcase my work and skills.
          </p>
          <a
            href="https://github.com/yourusername/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/mwkywzlr" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>© 2025 Md Marjan Morshed Rafi</p>
      </footer>
    </div>
  );
}

export default App;
