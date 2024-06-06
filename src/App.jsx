import { useState ,  } from "react";
import "./App.css";

/**
 * No se pueden repetir nombres (de lo que sea) dentro del mismo scope
 * (y no deberias repetir JAMAS un nombre de componente)
 *
 * Scope: Refiere al entorno de ejecucion actual, o a un bloque de codigo especifico, demarcado por los siguientes limites:
 * - Global (toda tu aplicacion, por ejemplo, variables de entorno)
 * - Archivo (todo lo que contenga un archivo especifico)
 * - Local
 *    - Dentro de un componente
 *    - Dentro de una funcion
 *
 */

/**
 * 1) Dibujar la pagina EN UN UNICO COMPONENTE (App.jsx) cajitas de colores representando cada parte de la pagina
 *   - rojo: navbar
 *   - amarillo: carousel
 *   - celeste: filtro
 *   - verde: catalogo
 * 2) Extrae cada componente en su propio componente, creando su archivo en la carpeta components, exportandolos e importandolos aqui
 */
function App() {
  const Navbar = () => {
    return (
      <div style={{ backgroundColor: 'red', padding: 'flex', borderRadius: '1rem', display: 'flex', height: '2.5rem',alignItems: 'center', justifyContent: 'space-between',  fontSize: '24px', fontWeight: 'bold', color: '#ccc', marginRight: 'auto', fontFamily: 'Arial, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', letterSpacing: '0.02em', transition: 'all 0.3s ease,'}}>DULCE ESPERA
      <input
          style={{ backgroundColor: 'white', border: 'none', borderRadius: '2rem', padding: '0.5rem 1rem',display:'flex' }}
          type="text"
          placeholder="Buscar"
        />
       <div style={{ display: 'flex', gap: '1rem' }}>
        <button style={{ backgroundColor: 'white', border: 'none', borderRadius: '2rem', padding: '0.3rem 0.2rem' }}>button 1</button>
        <button style={{ backgroundColor: 'white', border: 'none', borderRadius: '2rem', padding: '0.3rem 0.2rem' }}>button 2</button>
        <button style={{ backgroundColor: 'white', border: 'none', borderRadius: '2rem', padding: '0.3rem 0.2rem' }}>USUARIO</button>
        <button style={{ backgroundColor: 'white', border: 'none', borderRadius: '2rem', padding: '0.1rem 0.1rem' }}>Compras</button>
      </div>
      </div>
      
    );
  };

  const Carusel = () => {
    const [images] = useState([
      'https://ibb.co/BGj0hDB',
      'https://ibb.co/XZVyzdF',
      'https://ibb.co/VNMBwHH',
      'https://ibb.co/w7t8mqS',
      'https://ibb.co/PGDCHYB',
      'https://ibb.co/mJtb6C3',
      'https://ibb.co/TLsDKm0',
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageLength = images.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageLength);
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ backgroundColor: 'yellow', padding: 'flex', borderRadius: '4px', display: 'flex', height: '15rem' }}>
            <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} style={{ margin: '10px' }} />
        </div>
    );
  };

  const Filter = () => {
    return (
      <div style={{ minWidth: '5rem', width: '10rem', height: '40rem', backgroundColor: 'lightblue', marginRight: '10px', borderRadius: '4px', padding: 'flex' }}>filter</div>
    );
  };

  const Catalogue = () => {
    return (
      <div style={{ width: '85%', height: '40rem', backgroundColor: 'lightgreen', padding: 'flex', marginRight: '10px', borderRadius: '4px' }}>catalogue</div>
    );
  };

  return (
    <>
      <Navbar />
      <Carusel />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Filter />
        <Catalogue />
      </div>
    </>
  );
}

export default App;