"use client";

export default function CardServicios() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Desarrollo de Apps Móviles",
          desc: "Creación de aplicaciones móviles multiplataforma utilizando Flutter y Dart.",
          highlight: "Experiencia con soporte offline y multilenguaje",
        },
        {
          title: "Aplicaciones Web Full-Stack",
          desc: "Desarrollo de aplicaciones web modernas con Next.js, Node.js y Express.js.",
          highlight: "Integración de APIs y bases de datos relacionales",
        },
        {
          title: "Optimización SEO y Contenido",
          desc: "Mejora de posicionamiento web mediante técnicas de SEO y generación de contenido con IA.",
          highlight: "Incremento comprobado en alcance y engagement",
        },
        {
          title: "Diseño UI/UX",
          desc: "Prototipado y diseño de interfaces de usuario atractivas y funcionales con Figma.",
          highlight: "Enfoque en experiencia de usuario y accesibilidad",
        },
        {
          title: "Integración de APIs y Servicios",
          desc: "Conexión e integración de servicios externos y APIs RESTful.",
          highlight: "Uso eficiente de SWR y manejo de datos en tiempo real",
        },
        {
          title: "Metodologías Ágiles",
          desc: "Gestión de proyectos y desarrollo ágil utilizando Scrum y Kanban.",
          highlight: "Certificación en Scrum Fundamentals",
        },
      ].map(({ title, desc, highlight }, i) => (
        <div
          key={i}
          className="relative p-6 rounded-xl border-2 border-[var(--border)] 
          bg-[var(--card-bg)] hover:bg-[var(--card-hover)] transition-all 
          duration-300 group overflow-hidden"
        >
          {/* Gradiente animado */}
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
