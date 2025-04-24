import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
