import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import { Star, Heart, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductHero = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [
        "/images/product-1.jpg",
        "/images/product-2.jpg",
        "/images/product-3.jpg",
        "/images/product-4.jpg",
    ];

    return (
        <section className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Thumbs]}
                    navigation
                    pagination={{ clickable: true }}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="rounded-2xl shadow-lg"
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <motion.img
                                src={img}
                                alt="Product"
                                className="w-full h-[500px] object-cover rounded-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbnails */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Thumbs]}
                    watchSlidesProgress
                    className="mt-4"
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt="Thumbnail"
                                className="w-full h-20 object-cover rounded-lg border border-primary/30 cursor-pointer"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center space-y-6">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
                        Premium Wireless Headphones
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-yellow-400"
                            />
                        ))}
                        <span className="text-gray-500 text-sm">(120 reviews)</span>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 leading-relaxed"
                >
                    Experience crystal-clear sound, all-day comfort, and noise cancellation with our top-rated wireless headphones. Perfect for work, travel, or daily listening.
                </motion.p>

                {/* Price + Stock */}
                <div>
                    <p className="text-3xl font-bold text-primary">$249.99</p>
                    <p className="text-sm text-green-600 font-medium mt-1">In Stock</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-accent text-white py-4 px-6 rounded-xl font-semibold hover:bg-accent/90 transition">
                        Add to Cart
                    </button>
                    <button className="flex-1 bg-dark text-white py-4 px-6 rounded-xl font-semibold hover:bg-dark/90 transition">
                        Buy Now
                    </button>
                    <button className="p-4 border border-gray-300 rounded-xl hover:text-primary transition">
                        <Heart className="w-6 h-6" />
                    </button>
                </div>

                {/* Trust Icons */}
                <div className="grid grid-cols-3 gap-4 pt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" /> Secure Checkout
                    </div>
                    <div className="flex items-center gap-2">
                        <Truck className="w-5 h-5 text-primary" /> Free Shipping
                    </div>
                    <div className="flex items-center gap-2">
                        <RotateCcw className="w-5 h-5 text-primary" /> Easy Returns
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
