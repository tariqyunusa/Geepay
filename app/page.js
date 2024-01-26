"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Misc from "@/components/Misc";
import Misc2 from "@/components/misc_II";



export default function Home() {
  return (
    <div>
      <Nav />
  <Header />
    <Misc />
    <Misc2 />
    </div>
  );
}
