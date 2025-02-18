
import { useState } from "react";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const banners = [
        { id: 1, text: "Gear Up for Victory!", image: "../assets/sports-tools.jpg" },
        { id: 2, text: "Top-Quality Sports Equipment", image: "/images/banner2.jpg" },
        { id: 3, text: "Stay Ahead in the Game", image: "/images/banner3.jpg" }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

    return (
        <div>


            {/* Banner Slider */}
            <div className="relative w-full h-64 overflow-hidden">
                {banners.map((banner, index) => (
                    <div key={banner.id} className={`absolute w-full h-full transition-opacity ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={banner.image} alt={banner.text} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold">
                            {banner.text}
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className="absolute left-4 top-1/2 bg-gray-800 text-white px-2 py-1">◀</button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 bg-gray-800 text-white px-2 py-1">▶</button>
            </div>

            {/* Product Section */}
            {/* <section className="container mx-auto py-8">
                <h2 className="text-3xl font-bold text-center">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {products.slice(0, 6).map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                            <button className="mt-2 bg-[#84cc16] text-white px-4 py-2 rounded">View Details</button>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Sports Categories */}
            {/* <section className="container mx-auto py-8">
                <h2 className="text-3xl font-bold text-center">Sports Categories</h2>
                <div className="flex justify-center gap-6 mt-6">
                    {categories.map((category) => (
                        <div key={category.id} className="p-4 border rounded-lg shadow-lg">
                            <img src={category.image} alt={category.name} className="w-32 h-32 object-cover" />
                            <p className="text-center mt-2 font-semibold">{category.name}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Additional Sections */}
            {/* {extraSections.map((section, index) => (
                <section key={index} className="container mx-auto py-8">
                    <h2 className="text-3xl font-bold text-center">{section.title}</h2>
                    <p className="text-center text-gray-600 mt-2">{section.description}</p>
                </section>
            ))} */}


        </div>
    );
}
