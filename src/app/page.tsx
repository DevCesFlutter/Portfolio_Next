"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import Servicios from "./components/Servicios/Servicios";
import Sobre from "./components/Sobre";
import Contacto from "./components/Contact";
import ContactForm from "./components/formulario";
import CustomFooter from "./components/CustomFooter";
import Proyectos from "./components/Proyectos/Proyectos";

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
