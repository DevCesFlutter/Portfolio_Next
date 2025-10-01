"use client";
import React from "react";
import { FaWhatsapp, FaEnvelope, FaFileDownload } from "react-icons/fa";
import EmailWithCopy from "./EmailWithCopy";

export default function Contacto() {
  const handleDownloadCV = async () => {
    try {
      const cvUrl = "/CV_Cesar_Negrete.pdf";
      const response = await fetch(cvUrl);
      if (!response.ok) throw new Error("Archivo no disponible");

      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV-Cesar-Negrete-Infomatico.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al descargar:", error);
      alert("CV no disponible. Por favor contáctame directamente.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Contacto</h3>
        <p className="mb-8 text-lg">
          ¿Tienes un proyecto en mente o quieres conocer más sobre mi trabajo?
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/+56953373116"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] bg-green-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 "
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>

          {/* Botón de Correo */}
          <a
            href="mailto:cesarnegretes100@gmail.com"
            className="flex-1 min-w-[200px] bg-blue-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <FaEnvelope className="text-xl" />
            Correo
          </a>

          {/* Botón de Descarga CV */}
          <button
            onClick={handleDownloadCV}
            className="flex-1 min-w-[200px] bg-gray-700 text-white py-3 px-6 rounded-xl text-lg hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            <FaFileDownload className="text-xl" />
            Descargar CV
          </button>
        </div>

        <div className="mt-12">
          <EmailWithCopy />
        </div>
      </div>
    </section>
  );
}
