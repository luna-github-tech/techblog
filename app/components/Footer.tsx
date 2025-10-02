// app/components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna 1: Marca */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Tech Blog
          </h3>
          <p className="text-sm leading-relaxed">
            Recursos prácticos sobre <strong>tecnología</strong>, <strong>automatización</strong>, <strong>AWS</strong>, <strong>machine learning</strong> y <strong>puntos de venta</strong>.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-3">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Inicio</Link></li>
            
            <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Acerca de</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contacto</Link></li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-4">
        <div className="container mx-auto px-6 text-center text-xs text-gray-500 dark:text-gray-500">
          © {year} <span className="font-medium text-gray-700 dark:text-gray-300">Tech Blog</span>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
