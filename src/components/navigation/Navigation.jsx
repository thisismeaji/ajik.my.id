import React from "react";
import Styles from "./navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.logo}>
        <Link href="/">
          <Image src="/images/logo.png" width={512} height={512} alt="Logo" />
        </Link>
      </div>
      <MobileNav navLinks={navLinks} />
    </nav>
  );
}
