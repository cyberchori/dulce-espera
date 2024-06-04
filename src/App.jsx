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
      <div style={{ backgroundColor: 'red', padding: 'flex', borderRadius: '2px', display: 'flex', height: '2.5rem' }}>navbar</div>
    );
  };

  const Carusel = () => {
    return (
      <div style={{ backgroundColor: 'yellow', padding: 'flex', borderRadius: '4px', display: 'flex', height: '15rem' }}>carusel</div>
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