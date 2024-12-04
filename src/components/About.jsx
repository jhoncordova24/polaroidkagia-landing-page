import React from "react";
import aboutImage from "../img/about.png";

function About() {
  return (
    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border-gray-200 dark:border-gray-600 px-4 py-10 text-gray-700 sm:border-8 sm:px-10 lg:max-w-screen-lg lg:flex-row lg:items-center">
      <div className="flex-1 mr-6">
        <h2 className="mb-4  text-5xl md:text-5xl text-center md:text-left font-medium dark:text-white">
          Acerca de <span className="text-customPink">nosotros</span>
        </h2>
        <p className="mb-6 dark:text-white text-center md:text-left">
          Transformamos tus recuerdos en obras únicas y personalizadas,
          combinando creatividad, diseño y calidad. Ofrecemos productos como
          fotografías estilo Polaroid, cuadros decorativos y llaveros, diseñados
          con pasión y atención al detalle.
        </p>
        <div className="text-gray-400 text-center md:text-left">
          Eso y más...
        </div>
      </div>
      <div className="flex-1 h-96">
        <img
          src={aboutImage}
          alt="Hero Section"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default About;
