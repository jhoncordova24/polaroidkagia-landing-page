import React from "react";
import heroImage from "../img/hero.png";
function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 p-6 justify-center">
      <div className="text-center md:text-left p-8">
        <h1 className="text-6xl font-bold text-gray-800">
          Imprime tus mejores <span className="text-customPink">recuerdos.</span>
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          En <span className="font-semibold text-gray-800">PolaroidKagia</span>
          , damos vida a tus momentos favoritos. Desde fotos estilo Polaroid
          hasta cuadros y llaveros personalizados, hacemos tus recuerdos únicos.
        </p>
        <button className="mt-6 px-6 py-3 bg-customPink text-white rounded-lg shadow hover:bg-gray-500">
          Descubre nuestros productos
        </button>
      </div>
      <div className="flex justify-center">
        <img src={heroImage} alt="Hero Section" className="rounded-lg w-full max-w-max" />
      </div>
    </div>
  );
}
export default HeroSection;
