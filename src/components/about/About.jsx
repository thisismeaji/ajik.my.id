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
              <Link href="/">
                <Linkedin strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Instagram strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AtSign strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Facebook strokeWidth={1.5} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
