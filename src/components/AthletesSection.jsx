import { motion, stagger, useAnimate } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { FEATURED_ATHLETES } from "../constants";
import { useEffect } from "react";

const AthletesSection = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              ".athlete-card",
              { opacity: 1, y: 0 },
              {
                delay: stagger(0.15, { startDelay: 0.25 }),
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scope.current) {
      observer.observe(scope.current);
    }

    return () => {
      if (scope.current) {
        observer.unobserve(scope.current);
      }
    };
  }, [animate, scope]);

  return (
    <section 
      ref={scope}
      className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Trusted by Champions</h2>
          <p className="text-xl text-center mb-12 text-gray-300">Professional athletes who use our equipment</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_ATHLETES.map((athlete, index) => (
            <motion.div 
              key={athlete.id}
              className="athlete-card relative overflow-hidden rounded-xl shadow-2xl aspect-[3/4] opacity-0"
              initial={{ opacity: 0, y: 40 }}
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                willChange: "transform"
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
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