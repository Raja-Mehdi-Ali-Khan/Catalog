import React, { useState } from 'react';
import './AddItemForm.css';

function AddItemForm({ addItem }) {
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [image, setImage] = useState('');
   const [isOpen, setIsOpen] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      const newItem = {
         id: Date.now(), // Use timestamp as ID
         name,
         price,
         image: image || 'https://via.placeholder.com/150',
      };
      addItem(newItem);
      setName('');
      setPrice('');
      setImage('');
      setIsOpen(false);
   };

   return (
      <>
         {/* Card for Add Item */}
         <div className="flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-4 h-40 w-40 flex items-center justify-center relative">
               <button
                  onClick={() => setIsOpen(true)}
                  className="bg-transparent rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
               >
                  {/* SVG Icon */}
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="40" // Adjust the size as needed
                     height="40"
                     fill="blue" // Set the fill color to blue
                     className="bi bi-plus-circle-fill"
                     viewBox="0 0 16 16"
                  >
                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                  </svg>
               </button>
            </div>
         </div>

         {/* Modal for Form */}
         {isOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
               <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Add New Item</h2>
                  <input
                     type="text"
                     placeholder="Item Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:border-blue-500"
                     required
                  />
                  <input
                     type="text"
                     placeholder="Price"
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:border-blue-500"
                     required
                  />
                  <input
                     type="text"
                     placeholder="Image URL"
                     value={image}
                     onChange={(e) => setImage(e.target.value)}
                     className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:border-blue-500"
                  />
                  <div className="flex justify-between">
                     <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
                     >
                        Cancel
                     </button>
                     <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                     >
                        Add Item
                     </button>
                  </div>
               </form>
            </div>
         )}
      </>
   );
}

export default AddItemForm;
