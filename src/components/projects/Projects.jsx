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
                src="/images/vurply.com.png"
                alt="vurply.com"
                width={1920}
                height={1080}
              />
              <div>
                <span className={Styles.badge}>On Progress</span>
                <h3>Vurply</h3>
                <p>Wordpress + Generate Press + Generate Block + Custom CSS</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://blog-chi-rosy-58.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Styles.card}>
              <Image
                src="/images/blog-nextjs.png"
                alt="blog-nextjs"
                width={1920}
                height={1080}
              />
              <div>
                <span className={Styles.badge}>On Progress</span>
                <h3>Blog</h3>
                <p>Next JS + Markdown</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.glorylaundrypwr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Styles.card}>
              <Image
                src="/images/glorylaundry.png"
                alt="glorylaundry"
                width={1920}
                height={1080}
              />
              <div>
                <span className={Styles.badge}>Done</span>
                <h3>Company Profile</h3>
                <p>HTML + CSS + Javascript</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
