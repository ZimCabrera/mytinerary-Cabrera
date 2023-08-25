import { useState, useEffect } from "react";

const data = [
    { name: "Dubái - United Arab Emirates", image: "assets/Dubai.jpg" },
    { name: "Hurghada - Egypt", image: "assets/Hurghada.jpg" },
    { name: "Istanbul - Turkiye", image: "assets/Istanbul.jpg" },
    { name: "Bali - Indonesia", image: "assets/Bali.jpg" },
    { name: "Cabo San Lucas - Mexico", image: "assets/Cabo.jpg" },
    { name: "London - UK", image: "assets/London.jpg" },
    { name: "Cancun - Mexico", image: "assets/Cancun.jpg" },
    { name: "Moscow - Russia", image: "assets/Moscow.jpg" },
    { name: "New York - USA", image: "assets/New-York.jpg" },
    { name: "Rome - Italy", image: "assets/Rome.jpg" },
    { name: "París - France", image: "assets/Paris.jpg" },
    { name: "Sao Paulo - Brazil", image: "assets/.jpeg" },
]

const itemsSlide = 4;

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(data.length / itemsSlide));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col items-center">

            <div className="flex justify-center w-4/6 min-h-[40vh]">
                {Array.from({ length: Math.ceil(data.length / itemsSlide) }).map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`p-2 ${slideIndex === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.slice(slideIndex * itemsSlide, (slideIndex + 1) * itemsSlide).map((city, cityIndex) => (
                                <div key={cityIndex} className="mb-4 flex flex-col items-center">
                                    <img
                                        src={city.image}
                                        alt={city.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <p className="bg-sky-800/30 text-center mt-2">
                                        <span className="text-xl font-bold tracking-wide text-black hover:text-blue-600">{city.name}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="dots flex justify-center mt-4">
                {Array.from({ length: Math.ceil(data.length / itemsSlide) }).map((_, slideIndex) => (
                    <span
                        key={slideIndex}
                        className={`dot inline-block w-2 h-2 rounded-full mx-1 ${slideIndex === currentSlide ? 'bg-white' : 'bg-white'
                            }`}
                        onClick={() => setCurrentSlide(slideIndex)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Carousel
