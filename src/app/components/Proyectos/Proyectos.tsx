import ProyectoCard, { Proyecto } from "./ProyectoCard";

const proyectos: Proyecto[] = [
  {
    titulo: "App NPS Parque Turistik",
    descripcion:
      "Desarrollada con Flutter, Node.js, Express y SQL Server. Permite evaluar servicios mediante opciones múltiples y en múltiples idiomas, almacenar datos en una base de datos sql server, gestionar información de forma offline y procesar pedidos en tiempo real.",
    imagen: [
      "/images/turis1.png",
      "/images/turis2.png",
      "/images/turis3.png",
      "/images/turis4.png",
      "/images/turis6.png",
      "/images/turis7.png",
    ],
    alt: "App NPS Parque Turistik",
    repositorio: null,
    url: "",
  },
  {
    titulo: "App Gestion de inventarios y envios",
    descripcion:
      "Desarrollada con Flutter,dart,SupaBase,permite gestionar el stock y crear envios gestionar su estado de enviado el estado pendientes de enviar.",
    imagen: [
      "/images/inven.png",
      "/images/inven1.1.png",
      "/images/inven1.2.png",
      "/images/inven1.3.png",
      "/images/inven1.4.png",
      "/images/inven1.5.png",
      "/images/inven1.6.png",
    ],
    alt: "AppInventarius",
    repositorio: null,
    url: "",
  },
  {
    titulo: "LandingPagePara Pagina Servicio de bordado",
    descripcion:
      "Desarrollada con Next,js/taildwindcss, Pagina web reponsive enfocada en la promocion y el llamado a la accion De los Posibles Clientes de FastBordados Permite La busqueda Indexada Con la clave fastbordados.app",
    imagen: [
      "/images/fast1.PNG",
      "/images/fast2.png",
      "/images/fast3.PNG",
      "/images/fast4.PNG",
    ],
    alt: "LandingPageBordados",
    repositorio: "https://github.com/DevCesFlutter/Lading_Fast_Bordados",
    url: "https://fastbordados.vercel.app/",
  },
  // Puedes agregar más proyectos aquí
];

export default function Proyectos() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-10 text-center">Proyectos</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {proyectos.map((proyecto, index) => (
          <ProyectoCard key={index} {...proyecto} />
        ))}
      </div>
    </section>
  );
}
