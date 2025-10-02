"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón que abre el sidebar */}
      <button
        aria-label="Open sidebar"
        className="text-xl text-gray-700 cursor-pointer ml-4 xl:hidden block hover:text-blue-500 transition"
        onClick={() => setOpen(true)}
      >
        <i className="fas fa-bars" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 transition-all duration-500 xl:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 ${
            open ? "left-0" : "-left-80"
          }`}
        >
          {/* Buscador */}
          <div className="mx-3 mt-3 shadow-sm">
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-gray-500">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="block w-full shadow-sm border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Menú */}
          <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">
            Menu
          </h3>
          <nav>
            <Link href="/" className="flex px-4 py-1 uppercase items-center font-semibold text-sm hover:text-blue-500">
  <span className="w-6"><i className="fas fa-home" aria-hidden="true" /></span>
  Inicio
</Link>

            <a
              href="/about"
              className="flex px-4 py-1 uppercase items-center font-semibold text-sm transition hover:text-blue-500"
            >
              <span className="w-6">
                <i className="far fa-file-alt" />
              </span>
              Sobre mí
            </a>
            <a
              href="/contact"
              className="flex px-4 py-1 uppercase items-center font-semibold text-sm transition hover:text-blue-500"
            >
              <span className="w-6">
                <i className="fas fa-phone" />
              </span>
              Contacto
            </a>
          </nav>

          {/* Categorías */}
          <div className="w-full mt-3 px-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
              Categories
            </h3>
            <div className="space-y-2">
              {[
                "Beauti",
                "Business",
                "Fashion",
                "Food",
                "Learn",
                "Music",
                "Nature",
                "People",
                "Sports",
                "Technology",
              ].map((c, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                >
                  <span className="mr-2">
                    <i className="far fa-folder-open" />
                  </span>
                  <span>{c}</span>
                  <p className="ml-auto font-normal">(12)</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
