export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Fondo animado con gradiente dinámico */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          backgroundImage: `linear-gradient(-45deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end))`,
          zIndex: 0,
        }}
      />

      {/* Capa de superposición para mejorar contraste */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 text-[var(--foreground)] animate-fade-in delay-200">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Cesar Negrete</h1>
        <h3 className="text-3xl sm:text-4xl font-light mb-4">
          Desarrollador FullStack
        </h3>
        <p className="text-xs sm:text-2xl font-sans mb-6">
          Webs modernas y apps móviles para negocios reales
        </p>
        <a
          href="#contact"
          className="relative inline-block px-8 py-3 text-lg font-semibold rounded-xl group overflow-hidden transition-all duration-300 hover:bg-blue-700"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm opacity-25 group-hover:opacity-75 transition-opacity duration-500"></span>
          <span className="relative z-10">Trabajemos juntos</span>
        </a>
      </div>
    </section>
  );
}
