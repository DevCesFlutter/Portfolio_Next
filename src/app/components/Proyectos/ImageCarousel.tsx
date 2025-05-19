"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect, useRef, useCallback } from "react";

export default function ImageCarousel({
  images,
  alt,
  currentIndex,
  setCurrentIndex,
  onImageClick,
}: {
  images: string[];
  alt: string;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  onImageClick: () => void;
}) {
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Función para calcular la altura responsiva
  const updateHeight = useCallback(() => {
    if (carouselRef.current && carouselRef.current.parentElement) {
      const aspectRatio = window.innerWidth < 768 ? 1.5 : 1.77;
      const width = carouselRef.current.parentElement.clientWidth;
      carouselRef.current.style.height = `${width / aspectRatio}px`;
    }
  }, []);

  // Efecto para altura responsiva
  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight]);

  // Manejo de gestos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX - touchEndX;

    if (difference > 50) nextImage();
    if (difference < -50) prevImage();
  };

  const nextImage = useCallback(() => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [images.length, currentIndex, setCurrentIndex]);

  const prevImage = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [images.length, currentIndex, setCurrentIndex]);
  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              onImageClick();
            }}
            aria-label={`Ver ${alt} en grande`}
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
              decoding="async"
              draggable="false"
            />
          </button>
        ))}

        {/* Controles de navegación para desktop */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
              }}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 backdrop-blur-sm transition-all"
              aria-label="Imagen anterior"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
              }}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 backdrop-blur-sm transition-all"
              aria-label="Siguiente imagen"
            >
              <FiChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Indicadores de posición */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(idx);
              }}
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
  );
}
