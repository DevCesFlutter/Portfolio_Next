"use client";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ImageCarousel from "./ImageCarousel";
import ImageModal from "./ImageModal";

export type Proyecto = {
  titulo: string;
  descripcion: string;
  imagen: string[];
  alt: string;
  repositorio: string | null;
  url: string | null;
};

export default function ProyectoCard({
  titulo,
  descripcion,
  imagen,
  alt,
  repositorio,
  url,
}: Proyecto) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl">
      <ImageCarousel
        images={imagen}
        alt={alt}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onImageClick={() => setIsModalOpen(true)}
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {titulo}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {descripcion}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {repositorio ? (
            <a
              href={repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              aria-label="Ver repositorio en GitHub"
            >
              <FiGithub size={16} />
              Código
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm px-4 py-2">
              <FiGithub size={16} />
              Privado
            </span>
          )}

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              aria-label="Visitar sitio web"
            >
              <FiExternalLink size={16} />
              Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm px-4 py-2">
              <FiExternalLink size={16} />
              No disponible
            </span>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          images={imagen}
          alt={alt}
          initialIndex={currentIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </article>
  );
}
