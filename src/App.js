import React from "react";
import "./App.css";

function ProfileCard() {
  return (
    <aside className="sidebar">
      {/* Removed profile image */}
      <h1 className="name">Shakthi P</h1>
      <p className="role">
        M.C.A. Graduate | Aspiring Full Stack / Software Engineer
      </p>

      <div className="contact">
        <a href="mailto:shakthipthulasi@gmail.com">shakthipthulasi@gmail.com</a>
        <a href="/Shakthi_Resume.pdf" download>
          Download PDF
        </a>
        <a
          href="https://www.linkedin.com/in/shakthi-p-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/shakthi-p"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <p>Bengaluru, India 560003</p>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Full Stack Development</li>
          <li>Machine Learning</li>
          <li>Cloud Computing</li>
          <li>Software Testing & QA</li>
          <li>Business Analysis</li>
          <li>Communication & Teamwork</li>
        </ul>
      </div>
    </aside>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-root">
      <ProfileCard />

      <main className="main-content">
        {/* Profile */}
        <header className="hero">
          <h2>Profile</h2>
          <p>
            Detail-oriented M.C.A. graduate and aspiring Full Stack / Software
            Engineer with a strong interest in cloud computing and machine
            learning. Skilled in programming, software testing, and business
            analysis, eager to contribute to innovative projects and real-world
            solutions.
          </p>
        </header>

        {/* Professional Experience */}
        <Section title="Professional Experience">
          <article className="item">
            <h3>Digital INNK — Testing & Business Analyst Intern</h3>
            <p className="meta">08/2024 – 01/2025 · Maharashtra, India</p>
            <ul>
              <li>
                Conducted software testing, executed test cases, and reported
                bugs to improve quality.
              </li>
              <li>
                Translated business requirements into technical specifications.
              </li>
            </ul>
          </article>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <article className="item">
            <h3>Detection of Skin Diseases Using Deep Neural Networks</h3>
            <p className="meta">01/2024 – 08/2024 · Python, Machine Learning</p>
            <ul>
              <li>
                Developed a neural network model to identify various skin
                diseases.
              </li>
              <li>
                Applied advanced ML techniques, showcasing analytical and
                programming skills.
              </li>
            </ul>
          </article>

          <article className="item">
            <h3>QRApp – Android QR Code Generator</h3>
            <p className="meta">Android App | Java, ZXing</p>
            <ul>
              <li>Generates QR codes from website URLs.</li>
              <li>
                Clean, user-friendly interface; works offline after generation.
              </li>
            </ul>
          </article>

          <article className="item">
            <h3>Stock Sentiment App</h3>
            <p className="meta">Web App | Python, Flask, Bootstrap</p>
            <ul>
              <li>
                Predicts stock market sentiment (Positive, Neutral, Negative)
                from tweets.
              </li>
              <li>
                ML model trained using Naive Bayes and CountVectorizer; deployed
                with Flask.
              </li>
              <li>Live sentiment prediction using a saved .pkl model.</li>
            </ul>
          </article>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="item">
            <h3>
              Master of Computer Application (M.C.A) — Nitte Meenakshi Institute
              of Technology
            </h3>
            <p className="meta">2023 – 2026 · Bengaluru | CGPA: 8.68</p>
          </div>
          <div className="item">
            <h3>
              Bachelor of Computer Applications (B.C.A) — Maharani Lakshmi
              Ammanni College for Women
            </h3>
            <p className="meta">2020 – 2024 · Bengaluru | CGPA: 8.1</p>
          </div>
          <div className="item">
            <h3>
              Pre-University (PCMB) — Maharani Lakshmi Ammanni College for Women
            </h3>
            <p className="meta">2019 – 2021 · Bengaluru | Percentage: 71.83%</p>
          </div>
          <div className="item">
            <h3>High School (Class X) — Thirumala Vidya Nikethan</h3>
            <p className="meta">2019 · Bengaluru | Percentage: 78.56%</p>
          </div>
        </Section>

        {/* Footer */}
        <footer className="footer">Designed by Shakthi</footer>
      </main>
    </div>
  );
}
