export default function Servicios() {
  return (
    <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-10 text-center">Servicios</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Desarrollo móvil",
            desc: "Aplicaciones móviles modernas, rápidas y multiplataforma usando Flutter.",
          },
          {
            title: "Sitios web",
            desc: "Sitios responsivos, optimizados y con buen posicionamiento SEO usando Next.js.",
          },
          {
            title: "Dashboards",
            desc: "Paneles de administración personalizados para el control de tu negocio.",
          },
          {
            title: "Presupuestos a medida",
            desc: "Soluciones escalables adaptadas a las necesidades y presupuesto de cada cliente.",
          },
          {
            title: "Indexación en Google",
            desc: "Configuración para que tu sitio aparezca en los resultados de búsqueda de Google.",
          },
          {
            title: "Asesoramiento técnico",
            desc: "Te asesoro en la compra de tu dominio, hosting y configuración inicial del proyecto.",
          },
        ].map(({ title, desc }, i) => (
          <div
            key={i}
            className="relative p-[5px] rounded-xl bg-gradient-to-tr from-gray-500 via-cyan-500 to-blue-500"
          >
            {/* Contenedor interno que no será afectado por la animación */}
            <div className="dark:bg-black rounded-xl p-6 h-full">
              <h4 className="font-bold mb-2">{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
