import Image from "next/image";

export default function AboutCard() {
  return (
    <div className="w-full mt-8 bg-white dark:bg-gray-900 shadow-sm rounded-sm p-5 text-sm border border-gray-100 dark:border-gray-800">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 font-roboto">
        Acerca de mí
      </h3>

      <div className="flex items-start gap-4">
        <Image
          src="/images/profile.jpg" // reemplaza con tu foto real
          alt="Juan Luna"
          width={70}
          height={70}
          className="rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
        />

        <div className="flex-1">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Profesional con amplia experiencia en el <strong>soporte, configuración y mejora de sistemas de punto de venta</strong>, especialmente en entornos operativos como cafeterías y negocios físicos.
          </p>

          <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            Me especializo en la <strong>gestión integral de sistemas</strong>, desde la instalación técnica hasta la adaptación personalizada mediante desarrollo y <strong>automatización de tareas repetitivas</strong>, utilizando tecnologías como <strong>VB.NET</strong>, <strong>SQL Server</strong>, <strong>PHP</strong> y <strong>MySQL</strong>.
          </p>

          <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            Actualmente curso la <strong>Ingeniería en Datos e Inteligencia Artificial</strong> y complemento mi formación con el <strong>Bootcamp 2025 de Cursor AI</strong>, enfocado en la aplicación práctica de <strong>modelos de IA</strong>, <strong>técnica RAG</strong>, <strong>LangChain</strong> y despliegues modernos con <strong>GitHub</strong> y <strong>Vercel</strong>.
          </p>

          <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            También estoy aprendiendo sobre <strong>Amazon Web Services (AWS)</strong> para integrar soluciones <strong>escalables y seguras</strong> en entornos reales.
          </p>

          <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            Mi enfoque combina <strong>experiencia técnica</strong>, <strong>aprendizaje continuo</strong> y <strong>visión práctica</strong>, orientado a crear <strong>herramientas sostenibles</strong> que aporten <strong>valor tangible</strong> a las operaciones del negocio.
          </p>

          {/* Frase de acción / CTA */}
          <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium">
            ¿Quieres conocer más de mi trabajo? Visita mi perfil profesional en{" "}
            <a
              href="https://perfil.webia.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              perfil.webia.mx
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
