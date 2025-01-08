import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/imaginify.png",
      projectName: "Imaginify",
      projectLink: "",
      projectDescription:
        "Developed a sophisticated web application leveraging Next.js, TypeScript, and MongoDB, while incorporating Cloudinary AI for advanced image processing capabilities and Shadcn/Clerk for seamless UI/authentication integration, resulting in an intuitive interface optimized for AI-driven image manipulation tasks.",
      projectTech: [
        "Next",
        "Typescript",
        "MongoDB",
        "Clerk",
        "Shadcn",
        "Cloudinary AI",
      ],
      projectExternalLinks: {
        github: "https://github.com/viveksharma19110/imaginify",
        externalLink: "https://imaginify-one-zeta.vercel.app/",
      },
    },
    {
      image: "/EduPoint.png",
      projectName: "EduPoint",
      projectLink: "",
      projectDescription:
        "I developed a full-stack Ed-Tech platform utilizing React.js, Node.js, Express.js, and MongoDB, incorporating features for seamless content creation, consumption, and rating. I implemented robust user authentication using JWT, integrated Cloudinary for efficient media storage, and employed bcrypt for enhanced security, ensuring a secure and user-friendly experience.",
      projectTech: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Token",
      ],
      projectExternalLinks: {
        github: "https://github.com/viveksharma19110/EduPoint",
        externalLink: "https://edu-point-seven.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Shopping Cart",
      projectLink: "",
      projectDescription:
        "I developed an e-commerce platform using React and Redux, implementing Redux slices for effective application state management. By leveraging useSelector and useDispatch, I ensured efficient data retrieval and streamlined state updates. Additionally, I integrated React Toast to provide real-time notifications, enhancing the user experience with timely alerts and updates.",
      projectTech: [
        "React",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/viveksharma19110/ShoppingCart-Redux",
        externalLink: "https://shopping-cart-redux-fawn.vercel.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I have Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;