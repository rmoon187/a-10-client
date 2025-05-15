import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants";

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          What Our Customers Say
        </h2>
        <div className="flex justify-center relative">
          <button 
            onClick={handlePrevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft className="text-white" />
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              className="border p-8 shadow-2xl rounded-lg text-center bg-white w-full max-w-2xl mx-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full border-4 border-purple-300 shadow-md"
                />
              </div>
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                {testimonial.name}
              </h2>
              <p className="text-gray-600 italic mt-2">{testimonial.role}</p>
              <p className="text-gray-600 italic mt-4 px-4">"{testimonial.review}"</p>
              <div className="flex justify-center mt-6 space-x-1">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={handleNextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;