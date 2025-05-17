export default function Servicios() {
  return (
    <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-10 text-center">Servicios</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h4 className="font-bold mb-2">Desarrollo móvil</h4>
          <p>Aplicaciones móviles con Flutter, rápidas y modernas.</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h4 className="font-bold mb-2">Sitios web</h4>
          <p>Webs responsivas, optimizadas y con buen SEO en Next.js.</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h4 className="font-bold mb-2">Dashboards</h4>
          <p>Paneles de control para administrar tu negocio fácilmente.</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h4 className="font-bold mb-2">Presupuestos</h4>
          <p>Presupuestos ajustados a cada cliente soluciones escalables.</p>
        </div>
      </div>
    </section>
  );
}
