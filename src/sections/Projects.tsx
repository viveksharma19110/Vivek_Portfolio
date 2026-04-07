import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectCategories = {
    tech: [
    {
      image: "/imaginify.png",
      projectName: "Imaginify",
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
  ],
    data: [
      {
        image: "/overview_image.png",
        projectName: "Sales Analytics Dashboard",
        projectDescription:
          "Built KPI dashboards to track sales performance, uncover trends in product & region, and support stakeholder decision-making. Cleaned and transformed raw datasets in Excel/Sheets to keep reporting accurate and consistent.",
        projectTech: ["Power BI", "Python", "Pandas", "Excel", "Google Sheets"],
        projectExternalLinks: {
          github: "https://github.com/viveksharma19110",
          externalLink: "",
        },
      },
      {
        image: "/project3.png",
        projectName: "Customer Churn Analysis",
        projectDescription:
          "Developed churn analytics to identify high-risk segments and explain drivers behind churn. Produced retention insights that help product and customer success teams prioritize interventions and improve outcomes.",
        projectTech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        projectExternalLinks: {
          github: "https://github.com/viveksharma19110",
          externalLink: "",
        },
      },
    ],
  } as const;

  const [activeCategory, setActiveCategory] = useState<"tech" | "data">("data");
  const activeProjects = projectCategories[activeCategory];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 },
        }}
      >
        <h2>Some Things I have Built</h2>
      </motion.div>
      <div className="projects-tabs">
        <button
          className={`projects-tab ${activeCategory === "data" ? "active" : ""}`}
          onClick={() => setActiveCategory("data")}
          type="button"
        >
          Data Projects
        </button>
        <button
          className={`projects-tab ${activeCategory === "tech" ? "active" : ""}`}
          onClick={() => setActiveCategory("tech")}
          type="button"
        >
          Tech Projects
        </button>
      </div>
      <div className="projects-container">
        {activeProjects.map(
          ({
            image,
            projectDescription,
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
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 40 },
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
                    {projectExternalLinks.externalLink ? (
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
                    ) : null}
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