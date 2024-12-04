import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="fixed top-0 w-full z-10 bg-white dark:bg-gray-900 shadow-sm">
      <div className="relative flex max-w-7xl flex-col overflow-hidden px-10 p-4 md:mx-auto md:flex-row md:items-center">
        <a
          href="#"
          className="flex items-center space-x-2 text-2xl font-black text-gray-800 dark:text-white hover:text-customPink "
        >
          <span className="mr-1 text-9xl text-customPink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </span>
          <span className="text-gray-800 dark:text-gray-100">
            PolaroidKagia
          </span>
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 py-2">
            <li className="text-gray-700 md:mr-12 hover:text-customPink dark:text-gray-300 dark:hover:text-customPink">
              <a href="#">Nosotros</a>
            </li>
            <li className="text-gray-700 md:mr-12 hover:text-customPink dark:text-gray-300 dark:hover:text-customPink">
              <a href="#">Productos</a>
            </li>
            <li className="text-gray-700 md:mr-12 hover:text-customPink dark:text-gray-300 dark:hover:text-customPink">
              <a href="#">Testimonios</a>
            </li>
            <li className="text-gray-700 md:mr-12 hover:text-customPink dark:text-gray-300 dark:hover:text-customPink">
              <a href="#">Contacto</a>
            </li>
            <li className="md:mr-12">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-md hover:shadow-lg transition mb-1"
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
