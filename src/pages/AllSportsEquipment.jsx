import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { Star } from "lucide-react";

const AllSportsEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [originalEquipment, setOriginalEquipment] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ass-10-server2.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setEquipment(data);
        setOriginalEquipment(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedEquipment = [...originalEquipment];

    switch (option) {
      case "price-high-low":
        sortedEquipment.sort((a, b) => b.price - a.price);
        break;
      case "price-low-high":
        sortedEquipment.sort((a, b) => a.price - b.price);
        break;
      case "rating":
        sortedEquipment.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        sortedEquipment.sort((a, b) => a.itemName.localeCompare(b.itemName));
        break;
      default:
        // Reset to original order
        sortedEquipment = [...originalEquipment];
    }

    setEquipment(sortedEquipment);
  };

  if (equipment.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Premium Sports Equipment
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover high-performance gear for every sport, curated for
          professionals and enthusiasts alike
        </p>
      </div>

      {/* Sorting Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-sm text-gray-500 ">
          Showing {equipment.length} products
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm shadow-sm"
          >
            <option value="default">Featured</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="rating">Top Rated</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {equipment.map((item) => (
          <div
            key={item._id}
            className="bg-white dark:bg-gray-800  rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group "
          >
            <div className="relative pb-[75%] overflow-hidden">
              <img
                src={item.image}
                alt={item.itemName}
                className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
              />
              {item.stockStatus < 10 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Low Stock
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                  {item.itemName}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {item.categoryName}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xl font-bold text-blue-800 dark:text-gray-200">
                    ${item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="text-yellow-500 ">
                    <Star></Star>
                  </div>

                  <span className="text-gray-700 dark:text-gray-200 ml-1">
                    {item.rating}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/details/${item._id}`)}
                className="w-full  bg-lime-600 hover:bg-lime-700 dark:bg-gray-600 dark:hover:bg-gray-700   text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Details
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSportsEquipment;
