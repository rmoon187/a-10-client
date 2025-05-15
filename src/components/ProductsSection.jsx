import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";


const ProductsSection = ({ 
  products, 
  selectedCategory, 
  handleShowAll, 
  loading 
}) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            {selectedCategory ? `${selectedCategory} Products` : "Featured Products"}
          </h2>
          {selectedCategory && (
            <button 
              onClick={handleShowAll}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View All Products <FaArrowRight className="ml-2" />
            </button>
          )}
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <motion.div 
                key={product._id} 
                className="border p-6 shadow-lg rounded-lg bg-white dark:bg-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.itemName} 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold line-clamp-1">{product.itemName}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{product.categoryName}</p>
                  <p className="text-gray-700 dark:text-gray-200 mt-2 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">${product.price}</p>
                    <button 
                      onClick={() => navigate(`/details/${product._id}`)} 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;