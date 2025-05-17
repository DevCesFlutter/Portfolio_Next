"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita render server/client mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determina el tema actual efectivo
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      className="fixed top-0 w-full z-50 py-4 px-6 shadow-md flex justify-between items-center 
                    bg-white dark:bg-black transition-colors duration-300"
    >
      <h1 className="text-xl font-bold text-black dark:text-white">CesDevs</h1>
      <div className="flex space-x-6">
        <Link
          href="#services"
          className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Servicios
        </Link>
        <Link
          href="#projects"
          className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Proyectos
        </Link>
        <Link
          href="#about"
          className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Sobre mí
        </Link>
        <Link
          href="#contact"
          className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Contacto
        </Link>
      </div>
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="ml-6 px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-colors"
      >
        {currentTheme === "dark" ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </nav>
  );
}
