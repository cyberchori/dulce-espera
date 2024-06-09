import react from 'react'
const Navbar = () => {
    return (
      <div style={{ backgroundColor: 'red', padding: '0.5rem', borderRadius: '1rem', display: 'flex', height: '2.5rem', alignItems: 'center', justifyContent: 'space-between', fontSize: '24px', fontWeight: 'bold', color: '#ccc', marginRight: 'auto', fontFamily: 'Arial, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', letterSpacing: '0.02em', transition: 'all 0.3s ease' }}>
        DULCE ESPERA
        <input
          style={{ backgroundColor: 'white', border: 'none', borderRadius: '2rem', padding: '0.5rem 1rem' }}
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
  export default Navbar