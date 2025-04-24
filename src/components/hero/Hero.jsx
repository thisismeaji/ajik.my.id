import React from "react";
import Styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={Styles.section}>
      <div className={Styles.content}>
        <span className={Styles.badge}>Available for Work</span>
        <h1>
          {" "}
          <span>Life</span> becomes <span>easier</span> when we{" "}
          <span>start</span> to <span>understand technology</span>
        </h1>
        <p>Not to replace humans, but to help us embrace our humanity.</p>
        <button>About Me</button>
      </div>
    </section>
  );
}
