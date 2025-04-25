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
          <Link
            href="https://vurply.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Styles.card}>
              <Image
                src="/images/projects1.png"
                alt="Projects 1"
                width={1920}
                height={1080}
              />
              <div>
                <h3>Landing Page</h3>
                <p>Wordpress + Elementor</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
