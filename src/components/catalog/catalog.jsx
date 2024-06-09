import React from 'react';
import './Catalogue.css'; 

const Catalogue = () => {
  
  const items = [
    { id: 1, name: "Camiseta", description: "Camiseta de algodón 100%", price: 19.99 },
    { id: 2, name: "Pantalones", description: "Pantalones vaqueros ajustados", price: 49.99 },
    { id: 3, name: "Chaqueta", description: "Chaqueta impermeable", price: 99.99 },
    { id: 4, name: "Zapatos", description: "Zapatos de cuero", price: 69.99 },
    { id: 5, name: "Gorra", description: "Gorra de béisbol", price: 14.99 },
    { id: 6, name: "Bufanda", description: "Bufanda de lana", price: 24.99 },
    { id: 7, name: "Guantes", description: "Guantes de cuero", price: 34.99 },
    { id: 8, name: "Reloj", description: "Reloj de pulsera", price: 199.99 },
    { id: 9, name: "Bolso", description: "Bolso de mano", price: 79.99 },
    { id: 10, name: "Cinturón", description: "Cinturón de cuero", price: 29.99 },
    { id: 11, name: "Sombrero", description: "Sombrero de paja", price: 19.99 },
    { id: 12, name: "Calcetines", description: "Calcetines de algodón", price: 9.99 },
    { id: 13, name: "Jersey", description: "Jersey de lana", price: 59.99 },
    { id: 14, name: "Vestido", description: "Vestido de verano", price: 49.99 },
    { id: 15, name: "Falda", description: "Falda plisada", price: 39.99 },
    { id: 16, name: "Camisa", description: "Camisa de lino", price: 29.99 },
    { id: 17, name: "Abrigo", description: "Abrigo de invierno", price: 149.99 },
    { id: 18, name: "Botas", description: "Botas de montaña", price: 89.99 },
    { id: 19, name: "Mochila", description: "Mochila de viaje", price: 59.99 },
    { id: 20, name: "Cartera", description: "Cartera de cuero", price: 39.99 },
    { id: 21, name: "Gafas de sol", description: "Gafas de sol polarizadas", price: 49.99 },
    { id: 22, name: "Bañador", description: "Bañador de hombre", price: 24.99 },
    { id: 23, name: "Bikini", description: "Bikini de mujer", price: 29.99 },
    { id: 24, name: "Sandalias", description: "Sandalias de cuero", price: 44.99 },
    { id: 25, name: "Chanclas", description: "Chanclas de goma", price: 14.99 },
    { id: 26, name: "Corbata", description: "Corbata de seda", price: 24.99 },
    { id: 27, name: "Pijama", description: "Pijama de algodón", price: 34.99 },
    { id: 28, name: "Bata", description: "Bata de baño", price: 49.99 },
    { id: 29, name: "Guantes de esquí", description: "Guantes térmicos", price: 54.99 },
    { id: 30, name: "Bufanda de seda", description: "Bufanda elegante", price: 44.99 },
    { id: 31, name: "Mono", description: "Mono de trabajo", price: 59.99 },
    { id: 32, name: "Polo", description: "Polo de algodón", price: 24.99 },
    { id: 33, name: "Sudadera", description: "Sudadera con capucha", price: 34.99 },
    { id: 34, name: "Chaleco", description: "Chaleco acolchado", price: 49.99 },
    { id: 35, name: "Pantalones cortos", description: "Pantalones cortos de deporte", price: 19.99 },
    { id: 36, name: "Zapatillas", description: "Zapatillas de deporte", price: 59.99 },
    { id: 37, name: "Chándal", description: "Chándal completo", price: 79.99 },
    { id: 38, name: "Falda larga", description: "Falda larga de verano", price: 39.99 },
    { id: 39, name: "Sombrero de ala ancha", description: "Sombrero elegante", price: 29.99 },
    { id: 40, name: "Pañuelo", description: "Pañuelo de seda", price: 14.99 },
    { id: 41, name: "Zapatillas de casa", description: "Zapatillas cómodas", price: 24.99 },
    { id: 42, name: "Leggings", description: "Leggings deportivos", price: 34.99 },
    { id: 43, name: "Gorro", description: "Gorro de lana", price: 19.99 },
    { id: 44, name: "Camiseta sin mangas", description: "Camiseta deportiva", price: 14.99 },
    { id: 45, name: "Jersey de punto", description: "Jersey de punto grueso", price: 54.99 },
    { id: 46, name: "Pantalones de vestir", description: "Pantalones formales", price: 49.99 },
    { id: 47, name: "Correa", description: "Correa de cuero", price: 24.99 },
    { id: 48, name: "Blusa", description: "Blusa de seda", price: 39.99 },
    { id: 49, name: "Traje", description: "Traje de dos piezas", price: 199.99 },
    { id: 50, name: "Ropa interior", description: "Ropa interior cómoda", price: 14.99 }
  ];

  return (
    <div className="catalogue-container">
      {items.map(item => (
        <div key={item.id} className="article">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p><strong>Precio:</strong> ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;