export const metadata = {
  title: "Contacto — TechBlog",
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white shadow-sm rounded-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-700 mb-6">
          Si tienes dudas, comentarios o propuestas de colaboración, puedes
          escribirme directamente mediante este formulario:
        </p>

        <ContactForm /> {/* 👈 Aquí se renderiza el cliente */}
      </section>
    </main>
  );
}
