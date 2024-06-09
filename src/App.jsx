import { useState, useEffect } from "react";
import "./App.css";
import "./components/Navbar/navbar"
import "./components/carusel/carusel"
import "./components/Filter/filter"
import  "./components/catalog/catalog"

function App() {
  const [showFilter, setShowFilter] = useState(false);

  const handleMouseEnter = () => {
    setShowFilter(true);
  };

  const handleMouseLeave = () => {
    setShowFilter(false);
  };

  return (
    <>
      <Navbar />
      <Carusel />
      <div 
        style={{ display: 'flex', flexDirection: 'row', position: 'relative' }} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ width: '5rem' }}> {/* Área de hover */}
          {showFilter && <Filter />}
        </div>
        <Catalogue />
      </div>
    </>
  );
}

export default App;