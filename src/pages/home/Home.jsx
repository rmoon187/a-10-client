import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import b1 from "../../assets/banner1.jpg";
import b2 from "../../assets/banner2.jpg";
import b3 from "../../assets/banner3.jpg";
import lamin from "../../assets/Lamine Yamal 19.jpg";
import bgp from "../../assets/pexels-mohamed-ishaq-villan-1400163-8994432.jpg";
import "./home.css";
import { useEffect, useState } from "react";
import { FaBaseballBall, FaBasketballBall, FaDumbbell, FaFutbol, FaSwimmer, FaTableTennis } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const navigate = useNavigate()


    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };


    useEffect(() => {
        fetch("http://localhost:5000/products?limit=6")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error("Error fetching products:", error));

        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setAllProducts(data))
            .catch(error => console.error("Error fetching products:", error));

        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    const handleCategoryClick = (categoryName) => {
        const filtered = allProducts.filter(product => product.categoryName === categoryName)
        setProducts(filtered)
        setSelectedCategory(categoryName)
    };


    // Category Icons
    const categoryIcons = {
        Soccer: <FaFutbol className="text-3xl" />,
        Basketball: <FaBasketballBall className="text-3xl" />,
        Cricket: <FaBaseballBall className="text-3xl" />,
        Tennis: <FaTableTennis className="text-3xl" />,
        Swimming: <FaSwimmer className="text-3xl" />,
        Fitness: <FaDumbbell className="text-3xl" />
    };
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            review: "The quality of the products is outstanding. I highly recommend this store!",
            image: "https://i.ibb.co/WWRsmbrd/jhon.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "Great customer service and fast shipping. Will definitely buy again.",
            image: "https://i.ibb.co/hFb7mPQB/jane.jpg"
        },
        {
            id: 3,
            name: "Mike Johnson",
            review: "Best sports equipment I've ever used. Worth every penny!",
            image: "https://i.ibb.co/C3JRvg43/mike.jpg"
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const testimonial = testimonials[index];


    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">

            <button
                onClick={toggleTheme}
                className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
            >
                {theme === "light" ? <FaMoon className="text-xl" /> : <FaSun className="text-xl text-yellow-400" />}
            </button>

            {/* Slider */}
            <div className="w-full h-[600px] relative">
                <div className="swiper-button-prev custom-nav-btn left-4"></div>
                <div className="swiper-button-next custom-nav-btn right-4"></div>

                <Swiper
                    loop={true}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="w-full h-full"
                >
                    <SwiperSlide className="relative w-full h-full">
                        <img src={b1} alt="Sports Banner 1" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-5xl font-bold">
                            Gear Up for Victory!
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={b2} alt="Sports Banner 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-5xl font-bold">
                            Top-Quality Sports Equipment
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={b3} alt="Sports Banner 3" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-5xl font-bold">
                            Stay Ahead in the Game
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Sports Categories Section */}
            <div className="mt-12 px-4 mb-10">
                <h2 className="text-3xl font-bold text-center mb-6">Sports Categories</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(category => (
                        <button
                            key={category._id}
                            onClick={() => handleCategoryClick(category.categoryName)}
                            className={`p-4 border rounded-lg shadow-md flex flex-col items-center hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer ${selectedCategory === category.categoryName ? "bg-blue-500 text-white" : ""
                                }`}
                        >
                            {categoryIcons[category.categoryName] || "🏅"}
                            <h3 className="text-lg font-semibold">{category.categoryName}</h3>
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Section */}
            <div className="mt-8 px-4">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {selectedCategory ? `${selectedCategory} Products` : "Featured Products"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map(product => (
                            <div key={product._id} className="border p-4 shadow-lg rounded-lg">
                                <img src={product.image} alt={product.itemName} className="w-full h-60 object-contain" style={{ transform: 'scale(1.1)', objectPosition: 'center' }} />
                                <h2 className="text-xl font-bold mt-2">{product.itemName}</h2>
                                <p className="text-sm text-gray-600">{product.categoryName}</p>
                                <p className="text-gray-700">{product.description}</p>
                                <p className="text-lg font-bold text-green-600">${product.price}</p>
                                <button onClick={() => navigate(`/details/${product._id}`)} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">View Details</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Ambassador section */}
            <div className="grid grid-cols-1 md:grid-cols-10 mt-10">
                {/* left side */}
                <div className="relative bg-[#EAE88D] flex items-center justify-center col-span-6 p-10 md:p-20 lg:p-32 h-auto min-h-[400px] md:min-h-[600px] lg:min-h-[800px]">
                    <img src={lamin} alt="Pablo Tellez" className="w-full object-cover h-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-6">
                        <h3 className="text-lg md:text-lg lg:text-2xl font-semibold lg:tracking-widest text-center">Brand Ambassador</h3>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center">Lamine Yamal</h1>
                    </div>
                    <button className="absolute bottom-6 md:bottom-16 lg:bottom-28 bg-white text-black px-4 py-2 md:px-6 md:py-3 font-semibold">
                        DISCOVER
                    </button>
                </div>

                {/* right side */}
                <div className="relative flex items-center justify-center col-span-4 h-auto min-h-[400px] md:min-h-[600px] lg:min-h-[800px]">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <img src={bgp} alt="Pickleball Paddles" className="w-full object-cover h-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-6">
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold absolute top-48 md:top-80 lg:top-[700px] text-center">SOCCER</h1>
                        <p className="absolute md:bottom-20 lg:bottom-28 text-lg lg:text-2xl lg:tracking-widest font-semibold text-center">
                            Most Exciting Striker in the world
                        </p>
                    </div>
                </div>
            </div>


            {/* testimonial sec */}
            <section
                className="py-16 px-4"
                style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    minHeight: "600px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">
                        What Our Customers Say
                    </h2>
                    <div className="flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonial.id}
                                className="border p-8 shadow-2xl rounded-lg text-center bg-white w-full max-w-md"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="relative w-24 h-24 mx-auto mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover rounded-full border-4 border-purple-300 shadow-md"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold mt-4 text-gray-800">
                                    {testimonial.name}
                                </h2>
                                <p className="text-gray-600 italic mt-4">"{testimonial.review}"</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
