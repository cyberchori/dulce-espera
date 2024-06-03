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
  return (
<div>
<div style={{ backgroundColor: 'red', padding: 'flex', borderRadius: '4px' ,display:'flex', height: '40px', gap: '20px' }}>navbar</div> 
<div style={{ backgroundColor: 'yellow', padding: 'flex', borderRadius: '4px' ,display:'flex',height: '200px' }}>carusel</div> 
<div style={{ display: 'flex', flexDirection: 'row'}}>
        <div style={{ width:'15%', height: '700px', backgroundColor: 'lightblue', marginRight: '10px',borderRadius: '4px' }}>filter</div>
        <div style={{ width: '85%', height: '700px', backgroundColor: 'lightgreen', padding: 'flex', marginRight: '10px',borderRadius: '4px' }}>catalogue</div>
      </div>
      
    
</div>

  )
}

export default App;
