import react from 'react'
const Carusel = () => {
    const [images] = useState([
     'https://i.pinimg.com/736x/55/8a/0c/558a0c53631a4c8722671634fe6e60fd.jpg',
     'https://littleparadise.com.ar/wp-content/uploads/2022/05/jardinero_tejido_carpenter_algodon_para_bebes_regalos_de_nacimientos_little_paradise-5-400x480.jpg',
     ''
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageLength = images.length;

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageLength);
      }, 10000);

      return () => clearInterval(timer);
    }, [imageLength]);

    return (
      <div style={{ backgroundColor: 'yellow', padding: '1rem', borderRadius: '4px', display: 'flex', height: '15rem' }}>
        <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} style={{ margin: '10px' }} />
      </div>
    );
  };
export default Carusel