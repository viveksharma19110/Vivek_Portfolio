import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I am a Data Analyst focused on turning complex data into clear business
            insights. I work with SQL, Power BI, Excel, and Google Sheets to build
            dashboards, track KPIs, and create reports that support product and
            business decisions. My background in engineering helps me approach
            analysis with structure, accuracy, and problem-solving discipline.
          </p>

          <p className="about-grid-info-text">
            I enjoy understanding business goals, defining meaningful metrics,
            and translating raw data into actionable recommendations. I am
            actively seeking Data Analyst, Business Analyst, and Product Analyst
            opportunities where I can deliver measurable impact.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">SQL</li>
            <li className="about-grid-info-list-item">PySpark</li>
            <li className="about-grid-info-list-item">MySQL</li>
            <li className="about-grid-info-list-item">PostgreSQL</li>
            <li className="about-grid-info-list-item">PowerBI</li>
            <li className="about-grid-info-list-item">Excel</li>
            <li className="about-grid-info-list-item">Google Sheets</li>
            <li className="about-grid-info-list-item">Pandas</li>
            <li className="about-grid-info-list-item">NumPy</li>
            <li className="about-grid-info-list-item">Time Series Analysis</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Data Visualization</li>
            <li className="about-grid-info-list-item">KPI Reporting</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/vivek.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;