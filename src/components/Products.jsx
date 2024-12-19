import React from "react";
import Card from "./Card";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";

function Products() {
  const products = [
    {
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: p1,
    },
    {
      title: "Shoes Again!",
      description: "Which shoes does he choose this time?",
      image: p2,
    },
    {
      title: "More Shoes!",
      description: "Does he choose the same shoes again?",
      image: p3,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl p-6 mt-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-11 text-gray-800 dark:text-white">
        Productos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            buttonText={product.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
