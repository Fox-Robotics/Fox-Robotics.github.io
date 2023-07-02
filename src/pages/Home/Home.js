import React from "react";
import { Banner } from "../../components/Banner";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Donate } from "../../components/Donate";
import { NavBar } from "../../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
}
