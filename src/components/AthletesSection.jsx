import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { FEATURED_ATHLETES } from "../constants";

const AthletesSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-4">Trusted by Champions</h2>
        <p className="text-xl text-center mb-12 text-gray-300">Professional athletes who use our equipment</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_ATHLETES.map(athlete => (
            <motion.div 
              key={athlete.id}
              className="relative overflow-hidden rounded-xl shadow-2xl aspect-[3/4]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={athlete.image} 
                alt={athlete.name} 
                className="w-full h-full object-cover brightness-75 hover:brightness-90 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-bold">{athlete.name}</h3>
                <p className="text-blue-400">{athlete.sport}</p>
                <div className="flex items-center mt-2">
                  <FaTrophy className="text-yellow-400 mr-2" />
                  <span>{athlete.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthletesSection;