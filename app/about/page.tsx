export const metadata = {
  title: "Sobre mí — Luna Tech Blog",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6 max-w-3xl mx-auto border border-gray-100 dark:border-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Sobre mí
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Soy <strong>Juan Luna</strong>, profesional con amplia experiencia en el{" "}
          <strong>soporte, configuración y mejora de sistemas de punto de venta</strong>, 
          especialmente en entornos operativos como cafeterías y negocios físicos.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Me especializo en la <strong>gestión integral de sistemas</strong>, desde la instalación 
          técnica hasta la adaptación personalizada mediante desarrollo y{" "}
          <strong>automatización de tareas repetitivas</strong>, utilizando tecnologías como{" "}
          <strong>VB.NET</strong>, <strong>SQL Server</strong>, <strong>PHP</strong> y{" "}
          <strong>MySQL</strong>.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Actualmente curso la <strong>Ingeniería en Datos e Inteligencia Artificial</strong> 
          y complemento mi formación con el <strong>Bootcamp 2025 de Cursor AI</strong>, enfocado 
          en la aplicación práctica de <strong>modelos de IA</strong>,{" "}
          <strong>técnica RAG</strong>, <strong>LangChain</strong> y despliegues modernos con{" "}
          <strong>GitHub</strong> y <strong>Vercel</strong>.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          También estoy aprendiendo sobre <strong>Amazon Web Services (AWS)</strong> para integrar 
          soluciones <strong>escalables y seguras</strong> en entornos reales.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Mi enfoque combina <strong>experiencia técnica</strong>, <strong>aprendizaje continuo</strong> 
          y <strong>visión práctica</strong>, orientado a crear{" "}
          <strong>herramientas sostenibles</strong> que aporten <strong>valor tangible</strong> a las 
          operaciones del negocio.
        </p>

        {/* Frase inspiradora o llamada a la acción */}
        <p className="text-blue-700 dark:text-blue-400 font-medium text-center border-t pt-4">
          🚀 Creo en el poder de la tecnología bien aplicada para simplificar procesos y generar impacto real.  
          Descubre más en{" "}
          <a
            href="https://perfil.webia.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500"
          >
            perfil.webia.mx
          </a>
        </p>
      </section>
    </main>
  );
}
