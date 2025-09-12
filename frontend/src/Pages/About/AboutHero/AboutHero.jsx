import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const AboutHero = () => {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80",
        },
        {
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
        },
        {
            image:
                "https://images.unsplash.com/photo-1556742400-b5b7c5121f9a?auto=format&fit=crop&w=1600&q=80",
        },
    ];

    return (
        <div className="py-20">
            <section className="relative w-full h-[90vh]">
                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    className="w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full h-full bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-purple-600/70"></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                                    <motion.h1
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                                    >
                                        About ShopSphere
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
                                    >
                                        Connecting you with the best products, anywhere, anytime.
                                    </motion.p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-accent text-white rounded-xl font-semibold shadow-lg hover:bg-accent/80 transition-all"
                                    >
                                        Start Shopping
                                    </motion.button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default AboutHero;
