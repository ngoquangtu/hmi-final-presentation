import React from "react";

import styles from "./Projects.module.css";

import needfinding from "../../data/needfinding.json";
import { ProjectCard } from "./ProjectCard";

export const NeedFindDing = () => {
  return (
    <section className={styles.container} id="needfinding">
      <h2 className={styles.title}>Need Finding</h2>
      <div className={styles.projects}>
        {needfinding.map((needfinding, id) => {
          return <ProjectCard key={id} project={needfinding} />;
        })}
      </div>
    </section>
  );
};
