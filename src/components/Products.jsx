import React from "react";
import Card from "./Card";

function Products() {
  const products = [
    {
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Shoes Again!",
      description: "Which shoes does he choose this time?",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "More Shoes!",
      description: "Does he choose the same shoes again?",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl p-6 mt-16">
      <h2 className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
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
