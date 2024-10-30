import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import AddItemForm from './components/AddItemForm';
import './App.css';

function App() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/api/items')
         .then((response) => response.json())
         .then((data) => setItems(data));
   }, []);

   const addItem = (newItem) => {
      fetch('http://localhost:5000/api/items', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(newItem),
      })
         .then((response) => response.json())
         .then((data) => {
            setItems((prevItems) => [...prevItems, data]);
         });
   };

   return (
      <div className="min-h-screen bg-gray-100 p-8">
         <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Product Catalog</h1>
         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
               <Card key={item.id} item={item} />
            ))}
            <AddItemForm addItem={addItem} />
         </div>
      </div>
   );
}

export default App;
