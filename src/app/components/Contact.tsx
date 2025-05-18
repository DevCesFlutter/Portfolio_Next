export default function Contacto() {
  const handleDownloadCV = async () => {
    try {
      // 1. Reemplaza esta URL con la ruta correcta a tu CV
      const cvUrl = "/Curriculum_Cesar_Negrete.pdf"; // Asegúrate que el archivo exista en la carpeta public

      // 2. Verificación de existencia del archivo
      const response = await fetch(cvUrl);
      if (!response.ok) {
        throw new Error("El archivo no está disponible");
      }

      // 3. Descarga del archivo
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV-Cesar-Negrete.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al descargar el CV:", error);
      alert(
        "Lo siento, el CV no está disponible en este momento. Por favor contáctame directamente."
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
          Contacto
        </h3>

        {/* ... (botones de WhatsApp y Correo igual que antes) ... */}

        <button
          onClick={handleDownloadCV}
          className="flex-1 min-w-[200px] bg-gray-700 text-white py-3 px-6 rounded-xl text-lg hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Descargar CV
        </button>
      </div>
    </section>
  );
}
