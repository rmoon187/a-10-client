import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import b1 from "../../assets/banner1.jpg";
import b2 from "../../assets/banner2.jpg";
import b3 from "../../assets/banner3.jpg";
import lamin from "../../assets/Lamine Yamal 19.jpg";
import bgp from "../../assets/pexels-mohamed-ishaq-villan-1400163-8994432.jpg";
import { COLORS } from "../../constants";
import HeroSlider from "../../components/HeroSlider";
import StatsSection from "../../components/StatsSection";
import ThemeToggle from "../../components/ThemeToggle";
import CategoriesSection from "../../components/CategoriesSection";
import ProductsSection from "../../components/ProductsSection";
import AthletesSection from "../../components/AthletesSection";
import AmbassadorSection from "../../components/AmbassadorSection";
import TrainingProgramsSection from "../../components/TrainingProgramsSection";
import TestimonialsSection from "../../components/TestimonialsSection";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const heroSlides = [
    { image: b1, alt: "Sports Banner 1", title: "Gear Up for Victory!" },
    { image: b2, alt: "Sports Banner 2", title: "Top-Quality Sports Equipment" },
    { image: b3, alt: "Sports Banner 3", title: "Stay Ahead in the Game" }
  ];

  const ambassadorData = {
    image: lamin,
    name: "Lamine Yamal",
    title: "Brand Ambassador",
    buttonText: "DISCOVER"
  };

  const sportSectionData = {
    image: bgp,
    title: "SOCCER",
    description: "Most Exciting Striker in the world"
  };

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", theme === "dark");
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("https://ass-10-server2.vercel.app/products?limit=6").then(res => res.json()),
      fetch("https://ass-10-server2.vercel.app/products").then(res => res.json()),
      fetch("https://ass-10-server2.vercel.app/categories").then(res => res.json())
    ])
      .then(([limitedProducts, allProducts, categories]) => {
        setProducts(limitedProducts);
        setAllProducts(allProducts);
        setCategories(categories);
      })
      .catch(error => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryClick = (categoryName) => {
    setLoading(true);
    setTimeout(() => {
      const filtered = allProducts.filter(product => product.categoryName === categoryName);
      setProducts(filtered);
      setSelectedCategory(categoryName);
      setLoading(false);
    }, 500);
  };

  const handleShowAll = () => {
    setLoading(true);
    setTimeout(() => {
      setProducts(allProducts.slice(0, 6));
      setSelectedCategory(null);
      setLoading(false);
    }, 500);
  };

  return (
    <div className={`bg-${COLORS.background.light} dark:bg-${COLORS.background.dark} text-${COLORS.text.light} dark:text-${COLORS.text.dark} transition-all duration-300 min-h-screen`}>
      {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
      
      <HeroSlider slides={heroSlides} />
      <StatsSection />
      <CategoriesSection 
        categories={categories} 
        selectedCategory={selectedCategory} 
        handleCategoryClick={handleCategoryClick} 
      />
      <ProductsSection 
        products={products} 
        selectedCategory={selectedCategory} 
        handleShowAll={handleShowAll} 
        loading={loading} 
      />
      <AthletesSection />
      <AmbassadorSection 
        ambassador={ambassadorData} 
        sportSection={sportSectionData} 
      />
      <TrainingProgramsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;