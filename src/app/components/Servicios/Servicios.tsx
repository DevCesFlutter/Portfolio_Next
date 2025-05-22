"use client";

import CardServicios from "./CardServicios";

export default function Servicios() {
  return (
    <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-10 text-center">
        Servicios de Desarrollo
      </h3>
      <CardServicios />

      <div className="mt-16 text-center font-light text-sm opacity-70">
        <p>Especializado en desarrollo</p>
      </div>
    </section>
  );
}
