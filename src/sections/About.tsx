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
            Bonjour! I am a full-stack web developer and recent Electronics and Communications graduate
            from Netaji Subhas University of Technology (NSUT, Delhi). I specialize in building scalable
            web applications using Next, ReactJS, Node.js, and Express, with expertise in PostgreSQL, MySQL, and
            MongoDB. Additionally, I am a data analyst with strong knowledge in SQL and PowerBI, and I currently
            work at Aarvy Technologies as a full-stack developer. My portfolio includes projects like a
            full-stack educational platform using the MERN stack, a real-time chat application with Socket.io,
            and an automated Amazon price tracking tool. With a strong foundation in C/C++, Java, and Python,
            I am passionate about innovative solutions and tackling complex challenges. I have also solved 300+
            DSA questions on Leetcode and CodeStudio combined, which has sharpened my problem-solving skills.
            ReactJS, Node.js, and Express enable me to build dynamic and scalable applications, focusing on
            clean architecture, high performance, and seamless integration of front-end and back-end technologies.
            I continuously explore new technologies to ensure my solutions remain at the forefront of industry trends.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I have been working with recently:
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
            <li className="about-grid-info-list-item">NumPy</li>
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