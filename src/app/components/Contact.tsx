"use client";
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import EmailWithCopy from "./EmailWithCopy";

export default function Contacto() {
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
            className="flex-1 min-w-[200px] bg-green-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-white transition flex items-center justify-center gap-2 "
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>

          {/* Botón de Correo */}
          <a
            href="mailto:cesarnegretes100@gmail.com"
            className="flex-1 min-w-[200px] bg-blue-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-white transition flex items-center justify-center gap-2"
          >
            <FaEnvelope className="text-xl" />
            Correo
          </a>
        </div>

        <div className="mt-12">
          <EmailWithCopy />
        </div>
      </div>
    </section>
  );
}
