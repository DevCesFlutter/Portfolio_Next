"use client";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ImageModal({
  images,
  alt,
  initialIndex,
  onClose,
}: {
  images: string[];
  alt: string;
  initialIndex: number;
  onClose: () => void;
  imageClassName?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="relative w-full max-w-6xl max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 transition-colors"
          aria-label="Cerrar modal"
        >
          <FiX size={28} />
        </button>

        <div className="w-full h-full overflow-auto touch-pan-y">
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Imagen ${currentIndex + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain"
            draggable={false}
          />
        </div>

        {images.length > 1 && (
          <div className="flex justify-between items-center mt-4 px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all"
              aria-label="Imagen anterior"
            >
              <FiChevronLeft size={24} />
            </button>

            <span className="text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all"
              aria-label="Siguiente imagen"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
