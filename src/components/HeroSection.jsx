import React from "react";

function HeroSection() {
  return (
    <div className=" max-w-6xl mx-auto p-1 md:p-6 flex justify-center">
      <div className="text-center md:text-center p-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white">
          Imprime tus mejores{" "}
          <span className="text-customPink">recuerdos.</span>
        </h1>
        <p className="text-lg mt-8 text-gray-600 dark:text-white">
          En{" "}
          <span className="font-semibold text-gray-800 dark:text-white">
            PolaroidKagia
          </span>
          , damos vida a tus momentos favoritos. Desde fotos estilo Polaroid
          hasta cuadros y llaveros personalizados, hacemos tus recuerdos únicos.
        </p>
        <button class=" mt-6 cursor-pointer font-semibold overflow-hidden relative z-0 border border-customPink group px-8 py-2">
          <span class="relative z-10 text-customPink group-hover:text-white text-xl duration-500">
            Explora!
          </span>
          <span class="absolute w-full h-full bg-customPink -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span class="absolute w-full h-full bg-customPink -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>
    </div>
  );
}
export default HeroSection;
