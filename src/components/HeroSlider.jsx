import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = ({ slides }) => {
  return (
    <div className="w-full aspect-video max-h-[600px] relative">
      <div className="swiper-button-prev custom-nav-btn left-4"></div>
      <div className="swiper-button-next custom-nav-btn right-4"></div>

      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover" 
              style={{ aspectRatio: "16/9" }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {slide.title}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;