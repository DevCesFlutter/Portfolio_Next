"use client";
import { useState, useRef, useEffect } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string[];
  alt: string;
  repositorio: string | null;
  url: string | null;
}

export default function ProyectoCard({
  titulo,
  descripcion,
  imagen,
  alt,
  repositorio,
  url,
}: Proyecto) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Navegación por gestos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Deslizar izquierda
      nextImage();
    }

    if (touchStart - touchEnd < -50) {
      // Deslizar derecha
      prevImage();
    }
  };

  // Auto-ajuste de altura en móviles
  useEffect(() => {
    const adjustHeight = () => {
      if (carouselRef.current && window.innerWidth < 768) {
        const width = carouselRef.current.offsetWidth;
        carouselRef.current.style.height = `${width * 0.75}px`;
      }
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === imagen.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagen.length - 1 : prev - 1));
  };

  return (
    <article className="rounded-2xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 space-y-4 p-4">
      {/* Carrusel de imágenes */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="relative w-full overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700"
          style={{
            height: "300px", // Altura por defecto para desktop
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {imagen.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImg(img)}
              aria-label={`Ver imagen ${idx + 1} en grande`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                idx === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={img}
                alt={`${alt} ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}

          {/* Controles de navegación - Solo en desktop */}
          {imagen.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                aria-label="Imagen anterior"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                aria-label="Siguiente imagen"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Indicadores - Versión móvil más grande */}
        {imagen.length > 1 && (
          <div className="flex justify-center mt-2 space-x-2">
            {imagen.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 md:w-2 md:h-2 rounded-full ${
                  idx === currentIndex
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="text-gray-800 dark:text-gray-100 space-y-3">
        <h3 className="text-xl font-bold">{titulo}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {descripcion}
        </p>

        <div className="flex gap-3 flex-wrap">
          {repositorio ? (
            <a
              href={repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-600 dark:bg-gray-600 dark:hover:bg-blue-500 transition-colors"
              aria-label="Ver repositorio en GitHub"
            >
              <FiGithub className="text-sm" />
              Repositorio
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 italic text-xs flex items-center">
              <FiGithub className="mr-1" />
              Repositorio privado
            </span>
          )}

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-green-600 dark:bg-gray-600 dark:hover:bg-green-500 transition-colors"
              aria-label="Visitar sitio web"
            >
              <FiExternalLink className="text-sm" />
              Ver sitio
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 italic text-xs flex items-center">
              <FiExternalLink className="mr-1" />
              Sitio no disponible
            </span>
          )}
        </div>
      </div>

      {/* Modal de imagen - Mejorado para móviles */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 touch-none"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10 p-2 bg-black/50 rounded-full"
              aria-label="Cerrar modal"
            >
              <FiX className="text-2xl" />
            </button>
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt={alt}
                className="max-w-full max-h-full object-contain"
                style={{
                  touchAction: "none", // Evita zoom no deseado en móviles
                }}
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
