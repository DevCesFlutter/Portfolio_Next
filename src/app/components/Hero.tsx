export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Fondo animado */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          backgroundImage: `linear-gradient(-45deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end))`,
          backgroundSize: "400% 400%",
          animation: "gradient 10s ease infinite",
          zIndex: 0,
        }}
      />

      {/* Capa oscura semitransparente para mejorar contraste */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30 z-10" />

      {/* Contenido */}
      <div className="relative z-20 text-white dark:text-gray-100 animate-fade-in delay-200">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">
          Desarrollador Freelance
        </h2>
        <p className="text-xl sm:text-2xl mb-6">
          Webs modernas y apps móviles para negocios reales
        </p>
        <a
          href="#contact"
          className="relative inline-block px-8 py-3 text-lg font-semibold rounded-xl group overflow-hidden transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm opacity-25 group-hover:opacity-75 transition-opacity duration-500"></span>
          <span className="relative z-10">Trabajemos juntos</span>
        </a>
      </div>
    </section>
  );
}
