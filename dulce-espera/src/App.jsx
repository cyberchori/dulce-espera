import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Components/BarraDeBusqueda(navbar)/BarraDeBusqueda"
import "./Components/Carusel/Carusel"
import "./Components/Catalog/Catalog"
import "./Components/Filters/filter"

function MiApp() {
  return (
    <div>
      {}
      <BarraDeBusqueda />
      {}
    </div>
  );
}






function MiApp() {
  const paisajes = [
    { nombre: "Paisaje 1", url: "url_del_paisaje_1.jpg" },
    { nombre: "Paisaje 2", url: "url_del_paisaje_2.jpg" },
    // Agrega más objetos aquí...
  ];

  return (
    <div>
      {/* Otros componentes */}
      <Galeria paisajes={paisajes} />
      {/* Más componentes */}
    </div>
  );
}



function App() {
  

const App = () => {
  const [photos] = useState([
    // Tus fotos aquí, cada objeto con propiedades como src, alt y category
  ]);

  const [categoryFilter, setCategoryFilter] = useState('');

  const handleFilterChange = (newCategory) => {
    setCategoryFilter(newCategory);
  };

  return (
    <div>
      <PhotoGallery photos={photos} onFilterChange={handleFilterChange} />
    </div>
  );
};



return (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <FilterPhotos photos={photos} filterByCategory={onFilterChange} />
    <PhotoGallery photos={photos} onFilterChange={onFilterChange} />
  </div>
);
}








function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}



export default App
