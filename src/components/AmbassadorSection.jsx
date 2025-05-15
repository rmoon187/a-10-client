import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const AmbassadorSection = ({ ambassador, sportSection }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10">
      {/* left side */}
      <div className="relative bg-[#EAE88D] col-span-6 aspect-square md:aspect-auto min-h-[400px] md:min-h-[600px] overflow-hidden">
        <img 
          src={ambassador.image} 
          alt={ambassador.name} 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-6 bg-black bg-opacity-40">
          <motion.h3 
            className="text-lg md:text-xl lg:text-2xl font-semibold lg:tracking-widest text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {ambassador.title}
          </motion.h3>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {ambassador.name}
          </motion.h1>
          <motion.button 
            className="bg-white text-black px-6 py-3 md:px-8 md:py-4 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            {ambassador.buttonText} <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>

      {/* right side */}
      <div className="relative col-span-4 aspect-square md:aspect-auto min-h-[400px] md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src={sportSection.image} 
          alt={sportSection.title} 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-6">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {sportSection.title}
          </motion.h1>
          <motion.p 
            className="text-lg lg:text-2xl lg:tracking-widest font-semibold text-center mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sportSection.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorSection;