import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>TEAM MEMBERS</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/nqt.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Ngô Quang Tú 20213593</h3>
              <p>
                He's a software  developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

        </ul>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/lknt.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Lã Kiều Ngọc Thăng 20213588</h3>
              <p>
                He's a UI/UX developer with experience in workflow of user experience.
              </p>
            </div>
          </li>

        </ul>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/kimquy.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Nguyễn Kim Quý 20213585</h3>
              <p>
                He's a Figma design for creating assets of website. 
              </p>
            </div>
          </li>

        </ul>
      </div>
      
    </section>
    
  );
};
