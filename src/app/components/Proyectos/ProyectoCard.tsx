"use client";
import { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group relative rounded-2xl overflow-hidden shadow-lg border-4 
      transition-all duration-500 ease-out hover:shadow-2xl
      ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-8"
      }
      before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent 
      before:to-black/10 before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100 hover:-translate-y-2`}
    >
      {/* Contenedor de imagen con efecto de brillo */}
      <div className="p-4 relative overflow-hidden">
        <div className="rounded-xl overflow-hidden shadow-md">
          <div className="hover:scale-105 transition-transform duration-500 ease-out">
            <ImageCarousel
              images={imagen}
              alt={alt}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              onImageClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Contenido con animación escalonada */}
      <div className="p-5 space-y-4">
        <h3
          className="text-2xl font-bold transition-all duration-300 
          group-hover:text-blue-600 transform-gpu"
        >
          <span className="inline-block group-hover:scale-105">{titulo}</span>
        </h3>

        <p
          className="line-clamp-3 transition-opacity duration-500 
          group-hover:opacity-95 leading-relaxed"
        >
          {descripcion}
        </p>

        {/* Botones con efecto de profundidad */}
        <div className="flex flex-wrap gap-3 pt-3">
          {repositorio ? (
            <a
              href={repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
    bg-gradient-to-br from-gray-800 to-gray-900 text-white 
    hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl
    transition-all duration-300 hover:-translate-y-1"
              aria-label="Ver repositorio en GitHub"
            >
              <FiGithub
                size={18}
                className="transition-transform duration-300 
      group-hover:scale-125"
              />
              <span className="font-medium tracking-wide">Código</span>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 
    rounded-xl bg-gray-200 text-gray-500 cursor-not-allowed
    transition-opacity duration-300 opacity-80"
              aria-label="Repositorio privado"
            >
              <FiGithub size={18} />
              <span className="font-medium tracking-wide">Privado</span>
            </button>
          )}

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
    bg-gradient-to-br from-blue-600 to-blue-700 text-white 
    hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl
    transition-all duration-300 hover:-translate-y-1"
              aria-label="Visitar sitio web"
            >
              <FiExternalLink
                size={18}
                className="transition-transform duration-300 
      group-hover:scale-125"
              />
              <span className="font-medium tracking-wide">Web</span>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 
    rounded-xl bg-gray-200 text-gray-500 cursor-not-allowed
    transition-opacity duration-300 opacity-80"
              aria-label="Sitio web no disponible"
            >
              <FiExternalLink size={18} />
              <span className="font-medium tracking-wide">No disponible</span>
            </button>
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
