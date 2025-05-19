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
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Navegación por gestos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) nextImage(); // Deslizar izquierda
    if (touchStartX - touchEndX < -50) prevImage(); // Deslizar derecha
  };

  // Ajustar altura del carrusel en móviles
  useEffect(() => {
    const updateHeight = () => {
      if (carouselRef.current) {
        const aspectRatio = window.innerWidth < 768 ? 1.5 : 1.77; // 3:2 en móvil, 16:9 en desktop
        carouselRef.current.style.height = `${
          carouselRef.current.offsetWidth / aspectRatio
        }px`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Cerrar modal al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedImg(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === imagen.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagen.length - 1 : prev - 1));
  };

  return (
    <article className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl">
      {/* Carrusel de imágenes */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900"
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
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`${alt} ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
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
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition backdrop-blur-sm"
                aria-label="Imagen anterior"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition backdrop-blur-sm"
                aria-label="Siguiente imagen"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Indicadores */}
        {imagen.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {imagen.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-white dark:bg-blue-400 scale-125"
                    : "bg-white/50 dark:bg-gray-600/50 hover:bg-white/70"
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contenido */}
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

      {/* Modal para imagen */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="relative w-full max-w-6xl max-h-[90vh]"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
              aria-label="Cerrar modal"
            >
              <FiX size={28} />
            </button>
            <div className="w-full h-full overflow-auto touch-pan-y">
              <img
                src={selectedImg}
                alt={alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Controles en modal para móviles */}
            {imagen.length > 1 && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Imagen anterior"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Siguiente imagen"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
