import React from "react";
import styles from "./Contact.module.css";
export const Contact = () => {


  const textStyle = {
    marginBottom: "33px", // Dùng giá trị cuối cùng
    fontSize: "72px", // Đổi sang camelCase
    fontWeight: 2000, // Đổi sang camelCase
    fontFamily: "var(--font-roboto)", // Đúng cú pháp
  };
  

  const videoStyle = {
    width: "80%",
    maxWidth: "800px",
    height: "800px",
    borderRadius: "8px",
    margin: "0 auto",
  };

  return (
    <section id="contact"  className={styles.container}>
      <div className={textStyle}>
        <h2>Video Concept</h2>
      </div>
      <iframe
        style={videoStyle}
        src="https://www.youtube.com/embed/OM8bLJCjzYc"
        title="Concept Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};
