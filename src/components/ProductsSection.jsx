import { motion, AnimatePresence, stagger } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ProductsSection = ({
  products,
  selectedCategory,
  handleShowAll,
  loading,
}) => {
  const navigate = useNavigate();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const imageHover = {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  };

  const titleVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            {selectedCategory
              ? `${selectedCategory} Products`
              : "Featured Products"}
          </motion.h2>
          {selectedCategory && (
            <motion.button
              onClick={() => navigate(`/all-sports`)}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View All Products <FaArrowRight className="ml-2" />
            </motion.button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {products.map((product) => (
              <motion.div
                key={product._id}
                className="flex flex-col p-5 shadow-lg rounded-lg bg-white dark:bg-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
                variants={item}
                whileHover="hover"
                layout
              >
                <motion.div
                  className="aspect-square overflow-hidden rounded-lg flex items-center justify-center relative"
                  whileHover={imageHover}
                >
                  <img
                    src={product.image}
                    alt={product.itemName}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
                <div className="mt-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h2
                      className="text-xl font-bold line-clamp-1"
                      whileHover={{ color: "#3b82f6" }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.itemName}
                    </motion.h2>
                    <motion.span
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      {product.categoryName}
                    </motion.span>
                  </div>
                  <motion.p
                    className="text-gray-700 dark:text-gray-200 mt-2 line-clamp-2 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {product.description}
                  </motion.p>
                  <div className="flex justify-between items-center mt-4">
                    <motion.p
                      className="text-xl font-bold text-blue-800 dark:text-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      ${product.price}
                    </motion.p>
                    <motion.button
                      onClick={() => navigate(`/details/${product._id}`)}
                      className="px-4 py-2 bg-lime-600 hover:bg-lime-700 dark:bg-gray-600 dark:hover:bg-gray-700 text-white rounded-lg transition-colors whitespace-nowrap"
                      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;