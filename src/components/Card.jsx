import React from "react";

function Card({ title, description, image, buttonText }) {
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-customPink text-gray-700 border-none">
            Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
