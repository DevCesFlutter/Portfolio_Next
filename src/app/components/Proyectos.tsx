export default function Proyectos() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-10 text-center">
        Proyectos Destacados
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Proyecto ejemplo */}
        <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
          <img
            src="/proyecto1.jpg"
            alt="Proyecto 1"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h4 className="font-bold mb-1">App de Inventario</h4>
            <p className="text-sm text-gray-700">
              Desarrollada con Flutter + Supabase, permite gestionar productos y
              pedidos en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
