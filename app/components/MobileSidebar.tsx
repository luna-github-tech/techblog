"use client";
import { useState } from "react";
import Link from "next/link";
import { slugify } from "../lib/slug";
import SearchBox from "./SearchBox";



type Props = {
  categoriesCount: Array<[string, number]>;
};

export default function MobileSidebar({ categoriesCount }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir el sidebar */}
      <button
        aria-label="Open sidebar"
        className="text-xl text-gray-700 cursor-pointer ml-4 xl:hidden block hover:text-blue-500 transition"
        onClick={() => setOpen(true)}
      >
        <i className="fas fa-bars" />
      </button>

      {/* Overlay oscuro */}
      <div
        className={`fixed inset-0 bg-black/40 z-20 xl:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-30 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Encabezado con botón de cierre */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-700">Menú</h2>
            <button
              aria-label="Close sidebar"
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-red-500 text-xl transition"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Buscador */}
         {/* <div className="mx-3 mt-3 shadow-sm">
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-gray-500">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="block w-full shadow-sm border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                placeholder="Buscar"
              />
            </div>
          </div>*/}


             <div className="mx-3 mt-3 shadow-sm">

  <SearchBox placeholder="Buscar artículos..." />
</div>


          {/* Menú principal */}
          <nav className="mt-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex px-4 py-2 uppercase items-center font-semibold text-sm hover:text-blue-500"
            >
              <span className="w-6"><i className="fas fa-home" /></span>Inicio
            </Link>
            
             <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="flex px-4 py-2 uppercase items-center font-semibold text-sm hover:text-blue-500"
            >
              <span className="w-6"><i className="far fa-user" /></span>Blog
            </Link>
            

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="flex px-4 py-2 uppercase items-center font-semibold text-sm hover:text-blue-500"
            >
              <span className="w-6"><i className="far fa-user" /></span>Sobre mí
            </Link>
            
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex px-4 py-2 uppercase items-center font-semibold text-sm hover:text-blue-500"
            >
              <span className="w-6"><i className="fas fa-phone" /></span>Contacto
            </Link>
          
</nav>

          {/* Categorías dinámicas */}
          <div className="w-full mt-5 px-4 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Categorías
            </h3>
            <div className="space-y-2">
              {categoriesCount.map(([name, count]) => (
                <Link
                  key={name}
                  href={`/category/${slugify(name)}`}
                  onClick={() => setOpen(false)}
                  className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                >
                  <span className="mr-2">
                    <i className="far fa-folder-open" />
                  </span>
                  <span>{name}</span>
                  <span className="ml-auto text-xs text-gray-500">
                    ({count})
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
