"use client";
import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import "./projects.css";
import WorkItems from "./WorkItems";

const Works = () => {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState(projectsData);
  useEffect(() => {
    if (active === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === active;
      });
      setProjects(newProjects);
    }
  }, [active]);

  const handleClick = (e) => {
    setActive(e.target.textContent.toLowerCase());
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              className={`work__item ${
                item.name === active ? "active-work" : ""
              }`}
              key={"projectsNav" + index}
              onClick={handleClick}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={"projectsData" + item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
