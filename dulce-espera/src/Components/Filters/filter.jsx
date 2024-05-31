import "./Styles.css"
const FilterPhotos = ({ photos, filterByCategory }) => {
    const [categoryFilter, setCategoryFilter] = useState('');
  
    const handleChange = (event) => {
      setCategoryFilter(event.target.value);
      filterByCategory(event.target.value);
    };
  
    return (
        <div style={{ width: '10%', marginRight: 'auto', marginLeft: 'auto' }}>
          <label htmlFor="filter-category">Filtrar por Categoría:</label>
          <select id="filter-category" value={categoryFilter} onChange={handleChange}>
            <option value="">Todos</option>
            <option value="nature">Naturaleza</option>
            <option value="city">Ciudad</option>
          </select>
        </div>
      );
    };