"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar"; 
import { getCategoriesCount } from "../lib/posts"; // ✅ importa el helper
import SearchBox from "./SearchBox";


const links = [
  { href: "/", label: "Inicio", icon: "fas fa-home" },
   { href: "/blog", label: "Blog", icon: "far fa-file-alt" }, // 👈 Nuevo enlace
  { href: "/about", label: "Sobre mí", icon: "far fa-user" },
  { href: "/contact", label: "Contacto", icon: "fas fa-phone" },
];

export default function Navbar() {
  const pathname = usePathname();
  const categoriesCount = getCategoriesCount(); // ✅ obtenemos categorías

  return (
    <nav className="shadow-sm bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Tech Blog"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Links (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center text-sm font-semibold transition ${
                  active
                    ? "text-blue-600 underline underline-offset-4"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                <i className={`${l.icon} mr-2`} aria-hidden="true" />
                {l.label}
              </Link>
            );
          })}
        </div>

       
        {/* Buscador (desktop) */}

         <div className="hidden md:block">
  <SearchBox placeholder="Buscar artículos..." />
</div>

        {/* <div className="relative hidden md:block">
          <span className="absolute left-3 top-2 text-sm text-gray-500">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
          <input
            type="text"
            placeholder="Buscar"
            className="pl-10 pr-3 py-2 text-sm rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500"
          />
        </div>*/}

        {/* Menú móvil */}
        <div className="md:hidden">
          <MobileSidebar categoriesCount={categoriesCount} /> {/* ✅ Prop */}
        </div>
      </div>
    </nav>
  );
}
