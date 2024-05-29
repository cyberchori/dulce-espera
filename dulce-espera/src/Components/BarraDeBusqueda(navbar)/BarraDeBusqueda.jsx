import './BarraDeBusquedaStyles.css'; 

function BarraDeBusqueda() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="barra-de-busqueda-contenedor">
      <input
        type="search"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
        className="barra-de-busqueda-input" 
      />
    </div>
  );
}

export default BarraDeBusqueda;