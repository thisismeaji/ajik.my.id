import React from "react";
import Styles from "./about.module.css";
import Image from "next/image";
import { AtSign, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className={Styles.section} id="about">
      <div className={Styles.content}>
        <div>
          <Image
            src="/images/profile.png"
            alt="Foto Profile Ajisaka Kamadnanu"
            width={387.33}
            height={484}
          />
        </div>
        <div>
          <span className={Styles.badge}>About Me</span>
          <h2>A Journey Fueled by Curiosity</h2>
          <p>
            Hello! I’m Aji, a curious and creative mind with a strong interest
            in tech and digital innovation. I’m always eager to learn, grow, and
            explore new opportunities.
          </p>
          <ul className={Styles.socialMedia}>
            <li>
              <Link
                href="https://www.linkedin.com/in/ajisaka-kamandanu-0870a6349/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/thisisme_aji/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.threads.com/@thisisme_aji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AtSign strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100090748616081"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook strokeWidth={1.5} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
