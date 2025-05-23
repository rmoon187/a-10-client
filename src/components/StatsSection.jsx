import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { STATS } from "../constants";
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={5} /> 
                ) : (
                  <span>0</span>
                )}
                +
              </div>
              <div className="text-lg md:text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;