import { motion } from "framer-motion";
import { CATEGORY_ICONS } from "../constants";

const CategoriesSection = ({
  categories,
  selectedCategory,
  handleCategoryClick,
}) => {
  return (
    <section className="py-16 px-4 dark:text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sports Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <motion.button
              key={category._id}
              onClick={() => handleCategoryClick(category.categoryName)}
              className={`p-4 border rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300 cursor-pointer h-32 ${
                selectedCategory === category.categoryName
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {(() => {
                const matchedIcon = CATEGORY_ICONS.find(
                  (item) => item.name === category.categoryName
                );
                const Icon = matchedIcon?.icon;
                return Icon ? (
                  <Icon className="text-3xl " />
                ) : null;
              })()}
              <h3 className="text-md font-semibold mt-3 text-center">
                {category.categoryName}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
