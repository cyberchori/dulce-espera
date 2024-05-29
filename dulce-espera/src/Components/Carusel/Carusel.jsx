import Carousel from 'react-flex-carousel';
import 'react-flex-carousel/lib/index.css'; 

function Galeria({ paisajes }) {
  const [busqueda, setBusqueda] = useState("");
  const [fotos, setFotos] = useState(paisajes);

  const filtrarPaisajes = () => {
    const paisajesFiltrados = paisajes.filter((paisaje) =>
      paisaje.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFotos(paisajesFiltrados);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={filtrarPaisajes}>Buscar</button>
      <Carousel
        autoPlayInterval={5000}
        indicator={true}
        switcher={true}
        initialSlide={0}
      >
        {fotos.map((paisaje, index) => (
          <div key={index}>
            <img src={paisaje.url} alt={paisaje.nombre} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Galeria;