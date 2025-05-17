export default function Contacto() {
  return (
    <section id="contact" className="py-20 px-6  text-center">
      <h3 className="text-3xl font-semibold mb-6">Contacto</h3>
      <p className="mb-4 text-lg">¿Tienes un proyecto en mente?</p>
      <a
        href="https://wa.me/+56953373116"
        target="_blank"
        className="inline-block bg-green-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-green-700 transition"
      >
        Escríbeme por WhatsApp
      </a>
    </section>
  );
}
