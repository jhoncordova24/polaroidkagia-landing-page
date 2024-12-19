import React from "react";

function Footer() {
  return (
    <footer class="bg-gray-50 mt-4 dark:bg-gray-900">
      <div class="mx-auto grid max-w-screen-xl gap-y-8 px-4 py-10 text-center md:grid-cols-2 xl:grid-cols-3 xl:px-10">
        <div class="max-w-sm mx-auto">
          <div class="mb-6 flex justify-center h-12 items-center space-x-2">
            <span class="text-2xl font-bold text-gray-700">
              Polaroid<span class="text-customPink">Kagia</span>.
            </span>
          </div>
          <div class="text-gray-500 text-leftm md:text-center text-sm">
            Capturamos tus momentos más especiales y los convertimos en
            recuerdos únicos. Desde fotos estilo Polaroid hasta cuadros y
            llaveros personalizados.
          </div>
        </div>

        <div class="mx-auto">
          <div class="mt-4 mb-2 font-medium xl:mb-4 text-gray-700">Enlaces Rápidos</div>
          <nav aria-label="Footer Navigation" class="text-gray-500 text-sm">
            <ul class="space-y-3">
              <li>
                <a class="hover:text-customPink hover:underline" href="#">
                  Nosotros
                </a>
              </li>
              <li>
                <a class="hover:text-customPink hover:underline" href="#">
                  Productos
                </a>
              </li>
              <li>
                <a class="hover:text-customPink hover:underline" href="#">
                  Testimonios
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="mx-auto">
          <div class="mt-4 mb-2 font-medium xl:mb-4 text-gray-700">
            Contáctanos en nuestras redes sociales
          </div>
          <div class="flex justify-center space-x-4">
            <a href="#" class="text-customPink hover:text-gray-500">
              <i class="lni lni-whatsapp text-3xl"></i>
            </a>
            <a href="#" class="text-customPink hover:text-gray-500">
              <i class="lni lni-instagram text-3xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 dark:bg-gray-900">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 text-xs">
          <div>© 2024 PolaroidKagia | Todos los derechos reservados</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
