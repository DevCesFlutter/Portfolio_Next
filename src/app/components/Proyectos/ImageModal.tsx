"use client";

import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface ImageModalProps {
  images: string[];
  alt: string;
  initialIndex: number;
  onClose: () => void;
  imageClassName?: string;
}

export default function ImageModal({
  images,
  alt,
  initialIndex,
  onClose,
  imageClassName = "",
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef<HTMLDivElement>(null);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="relative w-full max-w-6xl h-[80vh]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
          aria-label="Cerrar modal"
        >
          <FiX size={28} />
        </button>

        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Imagen ${currentIndex + 1}`}
            fill
            className={`object-contain ${imageClassName}`}
            draggable={false}
            priority
          />
        </div>

        {images.length > 1 && (
          <div className="flex justify-between items-center mt-4 px-4">
            <button
              onClick={prevImage}
              className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20"
              aria-label="Imagen anterior"
            >
              <FiChevronLeft size={24} />
            </button>

            <span className="text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </span>

            <button
              onClick={nextImage}
              className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20"
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
