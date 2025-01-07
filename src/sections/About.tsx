import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
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
            Bonjour! I'm a full-stack web developer and recent Electronics and Communications graduate from 
            Netaji Subhas University of Technology (NSUT, Delhi). With expertise in both frontend and backend 
            technologies, I specialize in building scalable web applications using ReactJS, Node.js, and Express,
             complemented by proficiency in database management systems including PostgreSQL, MySQL, and MongoDB. 
             My project portfolio showcases my ability to deliver comprehensive solutions, from developing a full-stack 
             educational platform using the MERN stack to creating a real-time chat application with Socket.io integration.
              I've also demonstrated my problem-solving skills through projects like an automated Amazon price tracking tool.
               My strong foundation in C/C++, Java, and Python, combined with my passion for innovative technology solutions,
                enables me to tackle complex development challenges while continuously expanding my technical expertise.
          </p>
          
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">MySQL</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">PowerBI</li>
            <li className="about-grid-info-list-item">Pandas</li>
            <li className="about-grid-info-list-item">Numpy</li>
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
