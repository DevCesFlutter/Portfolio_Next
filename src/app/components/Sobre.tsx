export default function Sobre() {
  return (
    <section id="about" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-6">Sobre mí</h3>
      <p className="text-lg mb-8">
        Soy <strong>Cesar Negrete</strong>, Ingeniero en Informática
        especializado en desarrollo full stack, con enfoque en React, Next.js y
        tecnologías web modernas. Me apasiona ayudar a pequeños negocios a
        digitalizarse con soluciones a medida, funcionales y escalables.
      </p>

      <div className="relative w-50 h-50 mx-auto rounded-full p-1">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white via-blue-500 to-purple-500 blur-sm animate-spin-border"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-black  ">
          <img
            src="images/PerfilAI.png"
            alt="Foto de perfil"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
