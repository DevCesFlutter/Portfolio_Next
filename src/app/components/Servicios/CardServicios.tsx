"use client";

export default function CardServicios() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Infraestructura Cloud en Azure",
          desc: "Creación, configuración y administración de máquinas virtuales, redes virtuales y reglas de acceso en Microsoft Azure.",
          highlight: "VMs, NSG, apertura segura de puertos y hardening básico",
        },
        {
          title: "Soporte Cloud y Operación",
          desc: "Soporte técnico en entornos cloud, resolución de incidencias y monitoreo de recursos críticos.",
          highlight: "Diagnóstico de fallas y continuidad operativa",
        },
        {
          title: "Almacenamiento en la Nube",
          desc: "Integración y administración de servicios de almacenamiento como Azure Blob Storage y S3.",
          highlight: "Gestión de permisos, acceso privado y optimización",
        },
        {
          title: "Seguridad Cloud",
          desc: "Revisión de alertas de seguridad, configuraciones básicas de protección y buenas prácticas.",
          highlight: "Análisis de alertas y reducción de riesgos",
        },
        {
          title: "Simulación y Concientización en Seguridad",
          desc: "Apoyo en simulaciones de phishing y revisión de reportes para mejorar la postura de seguridad.",
          highlight: "Concientización y detección temprana",
        },
        {
          title: "Experiencia en AWS",
          desc: "Experiencia complementaria en entornos AWS para administración básica de infraestructura.",
          highlight: "EC2, Security Groups y S3",
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
