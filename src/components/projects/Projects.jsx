import React from "react";
import Styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className={Styles.section} id="projects">
      <div className={Styles.content}>
        <div>
          <span className={Styles.badge}>Projects</span>
          <h2>Building Ideas into Experiences</h2>
          <p>
            Every project I’ve worked on is a reflection of my journey. Whether
            it’s a small experiment or a full-featured product, each piece
            represents my passion for learning, creating, and making an impact.
          </p>
        </div>
        <div className={Styles.cardContainer}>
          <div className={Styles.card}>
            <Image
              src="/images/projects1.png"
              alt="Projects 1"
              width={1920}
              height={1080}
            />
            <div>
              <span className={Styles.badge}>Comming Soon</span>
              <h3>Landing Page</h3>
              <p>Figma + Wordpress + Elementor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
