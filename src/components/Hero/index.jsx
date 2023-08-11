
const Hero = () => {
    return (
      <div className="hero min-h-screen flex items-center justify-center bg-cover bg-center bg-hero-image">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Bienvenido al Sitio Web</h1>
          <p className="text-lg mb-8">Descubre nuestras increíbles ofertas y servicios.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Ver más
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;