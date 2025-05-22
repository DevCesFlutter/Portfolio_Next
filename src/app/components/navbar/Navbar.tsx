"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Asegúrate de tener lucide-react instalado

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-6 shadow-md dark:bg-black flex justify-between items-center transition-colors duration-300">
      <h1 className="text-xl font-bold dark:text-white">CesDevs</h1>

      {/* Menú en pantallas grandes */}
      <div className="hidden md:flex space-x-6">
        <Link
          href="#projects"
          className="dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Proyectos
        </Link>
        <Link
          href="#services"
          className="dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Servicios
        </Link>
        <Link
          href="#about"
          className="dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Sobre mí
        </Link>
        <Link
          href="#contact"
          className="dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Contacto
        </Link>
      </div>

      {/* Botón de cambio de tema */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="btn px-4 py-2 rounded-lg transition-colors "
        >
          {currentTheme === "dark" ? "🔆" : "🌚"}
        </button>

        {/* Botón hamburguesa visible solo en móviles */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 dark:text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black flex flex-col items-center py-4 shadow-md md:hidden">
          <Link
            href="#services"
            className="py-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="#projects"
            className="py-2  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Proyectos
          </Link>
          <Link
            href="#about"
            className="py-2  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Sobre mí
          </Link>
          <Link
            href="#contact"
            className="py-2  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
