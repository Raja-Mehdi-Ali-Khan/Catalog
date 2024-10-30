import React from 'react';
import './Card.css';

function Card({ item }) {
   return (
      <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-all duration-300">
         <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
         <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
         <p className="text-gray-600 text-sm">{item.price}</p>
      </div>
   );
}

export default Card;
