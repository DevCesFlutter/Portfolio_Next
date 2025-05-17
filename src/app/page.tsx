"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Sobre from "./components/Sobre";
import Contacto from "./components/Contact";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <main className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />
      {/*Hero Seccion */}
      <Hero />
      {/* Servicios */}
      <Servicios />

      {/* Proyectos */}
      <Proyectos />

      {/* Sobre mí */}
      <Sobre />

      {/* Contacto */}
      <Contacto />
    </main>
  );
}
