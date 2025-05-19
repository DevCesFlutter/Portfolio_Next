"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Sobre from "./components/Sobre";
import Contacto from "./components/Contact";
import ContactForm from "./components/formulario";
import CustomFooter from "./components/CustomFooter";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <main className="font-sans ">
      {/* Navbar */}
      <Navbar />
      {/*Hero Seccion */}
      <Hero />
      {/* Proyectos */}
      <Proyectos />
      {/* Servicios */}
      <Servicios />

      {/* Sobre mí */}
      <Sobre />

      {/* Contacto */}
      <Contacto />
      <ContactForm />
      <CustomFooter />
    </main>
  );
}
