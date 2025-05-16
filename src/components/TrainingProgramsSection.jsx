import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";
import { TRAINING_PROGRAMS } from "../constants";


const TrainingProgramsSection = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-4">Premium Training Programs</h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Elevate your performance with our expert-designed programs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINING_PROGRAMS.map(program => {
            const Icon = program.icon;
            return (
              <motion.div 
                key={program.id}
                className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800"
                whileHover={{ y: -10 }}
              >
                <div className={`h-48 ${program.color} flex items-center justify-center`}>
                  <Icon className="text-white text-6xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaMedal className="text-yellow-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 ${program.buttonColor} text-white rounded-lg transition-colors`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsSection;