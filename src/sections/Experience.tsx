import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "GlobalLogic",
      role: "Data Analyst",
      url: "https://www.globallogic.com/",
      start: "June 2025",
      end: "Present",
      shortDescription: [
        "Built interactive dashboards in Power BI to track KPIs, performance trends, and operational insights for stakeholders.",
        "Prepared and cleaned datasets in Excel and Google Sheets to support reliable reporting and analysis.",
        "Translated business questions into metrics, definitions, and reporting logic (business analysis + product insights).",
        "Designed repeatable data preparation and automation workflows to keep reports consistent and up to date.",
      ],
    },
    {
      name: "Aarvy Technologies",
      role: "Full Stack Developer",
      url: "https://aarvytechnologies.com/",
      start: "November 2024",
      end: "April 2025",
      shortDescription: [
        "Built and optimized SQL queries, views, and stored procedures for reporting and application features.",
        "Integrated SQL-driven APIs with Next.js interfaces to deliver data-backed dashboards and workflows.",
        "Improved data quality and performance by validating schemas, joining large datasets, and tuning query logic.",
      ],
    },
    {
      name: "Adroid Connectz",
      role: "Data Science Intern",
      url: "https://adroidconnectz.com/",
      start: "June 2023",
      end: "July 2023",
      shortDescription: [
        "Engineered and deployed data analysis models using Python, PowerBI, and Pandas",
        "Developed Projects using Python and PowerBI for CLients",
        "Implemented data preprocessing pipelines handling 10,000+ data points for model training.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
