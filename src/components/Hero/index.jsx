import Carousel from "../Carousel";

const Hero = () => {
    return (
      <div className="hero min-h-screen flex items-center justify-center bg-cover bg-center bg-hero-image">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Popular MyTinerary</h1>
          <p className="text-lg mb-8"></p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            See More
          </button>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    );
  };
  
  export default Hero;