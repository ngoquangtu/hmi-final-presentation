import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Welcome to HMI COURSE!</h1>
        <p className={styles.description}>
          <p>Assoc Prof.Tran Thi Thanh Hai</p>
          <p>PhD.Nguyen Viet Tung</p>
        </p>
        <a href="https://hmi-course.vercel.app/" className={styles.contactBtn}>
          Join with Us!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
    
  );
};
