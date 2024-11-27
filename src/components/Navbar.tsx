import React from "react";

function Navbar() {
  return (
    <header className="top-0 w-full z-10">
      <div className=" mx-auto flex justify-between items-center py-6 px-11">
        {/* Logo */}
        <div className="logo">
          <a href="#" className="text-2xl font-semibold  text-gray-800">
            PolaroidKagia
          </a>
        </div>
        {/* Navegación */}
        <nav className="nav-links hidden md:flex space-x-6">
          <a
            href="#portfolio"
            className="text-base text-gray-700 hover:text-customPink"
          >
            Nosotros
          </a>
          <a
            href="#services"
            className="text-base text-gray-700 hover:text-customPink"
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="text-base text-gray-700 hover:text-customPínk"
          >
            Contacto
          </a>
        </nav>
        {/* Botón de menú móvil */}
        <button className="menu-button md:hidden px-4 py-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
