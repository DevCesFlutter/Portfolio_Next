"use client";

export default function CardServicios() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Aplicaciones con Next.js",
          desc: "Desarrollo de apps full-stack con enrutamiento, SSR y API Routes.",
          highlight: "Rendimiento y SEO integrado",
        },
        {
          title: "Frontend Avanzado",
          desc: "Interfaces dinámicas con React Hooks y Context API.",
          highlight: "Estado global sin librerías externas",
        },
        {
          title: "Prototipado Rápido",
          desc: "MVPs funcionales con Next.js + Vercel Instant Deploy.",
          highlight: "Deploy en minutos",
        },
        {
          title: "Optimización Web",
          desc: "Auditorías de performance y mejora de Core Web Vitals.",
          highlight: "Puntuación Lighthouse ≥90",
        },
        {
          title: "Integraciones API",
          desc: "Conexión con bases de datos y servicios externos.",
          highlight: "Fetching con SWR/SSR",
        },
        {
          title: "Migración a Modern Stack",
          desc: "Actualización de proyectos legacy a Next.js.",
          highlight: "Incremental Adoption",
        },
      ].map(({ title, desc, highlight }, i) => (
        <div
          key={i}
          className="relative p-6 rounded-xl border-2 border-[var(--border)] 
          bg-[var(--card-bg)] hover:bg-[var(--card-hover)] transition-all 
          duration-300 group overflow-hidden"
        >
          {/* Gradiente animado (igual que en Hero) */}
          <div
            className="absolute inset-0 animate-gradient opacity-0 
            group-hover:opacity-10 transition-opacity duration-500"
            style={{
              backgroundImage: `linear-gradient(-45deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end))`,
            }}
          />

          {/* Contenido */}
          <div className="relative z-10">
            <h4 className="font-bold text-lg mb-3 text-[var(--card-title)]">
              {title}
            </h4>
            <p className="mb-4 text-[var(--card-text)]">{desc}</p>
            <p className="text-sm font-medium text-[var(--accent)]">
              {highlight}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
