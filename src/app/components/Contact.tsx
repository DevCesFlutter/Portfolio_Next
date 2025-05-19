import React from "react";
import EmailWithCopy from "./EmailWithCopy";

export default function Contacto() {
  const handleDownloadCV = async () => {
    try {
      const cvUrl = "/Curriculum_Cesar_Negrete.pdf";
      const response = await fetch(cvUrl);
      if (!response.ok) {
        throw new Error("El archivo no está disponible");
      }

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
    <section id="contact" className="py-20 px-6 text-center">
      <div className="px-120"></div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6  ">Contacto</h3>
        <p className="mb-8 text-lg ">
          ¿Tienes un proyecto en mente o quieres conocer más sobre mi trabajo?
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/+56953373116"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] bg-green-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.43c.173.099.495.148.87-.075.372-.223.594-.521.713-.694.118-.173.297-.248.446-.124.149.125.964.892 1.14 1.067.173.174.347.198.52.05.173-.15.735-.68.94-.892.203-.212.406-.174.57-.099.173.075 1.092.52 1.28.694.188.174.248.26.347.397.099.136.099.772-.174 1.589-.272.818-1.603 1.561-2.197 1.633-.594.074-.446.26-1.638-.434-1.188-.694-2.086-2.176-2.152-2.322-.066-.148-.008-.273.05-.36.052-.084.149-.136.223-.198.074-.062.149-.111.223-.161.074-.05.124-.085.198-.01zM12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 1.5a8.5 8.5 0 0 0-8.5 8.5 8.5 8.5 0 0 0 8.5 8.5 8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 12 3.5z" />
            </svg>
            WhatsApp
          </a>

          {/* Botón de Correo */}
          <a
            href="mailto:cesarnegretes100@gmail.com"
            className="flex-1 min-w-[200px] bg-blue-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Correo
          </a>

          {/* Botón de Descarga CV */}
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
        <br />
        <br />
        <EmailWithCopy />
      </div>
    </section>
  );
}
