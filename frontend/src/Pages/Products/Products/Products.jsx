import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Shirt, ShoppingBag, Watch, } from "lucide-react";
import { GiSleevelessJacket } from "react-icons/gi";
import { FaShoePrints } from "react-icons/fa";

const Products = () => {
    return (
        <div className="w-full">
            {/* Hero Banner */}
            <section className="w-full bg-gray-100 rounded-xl overflow-hidden mb-10 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Limited Time Offer!{" "}
                            <span className="text-primary">Up to 50% OFF!</span>
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Redefine your everyday style with exclusive deals.
                        </p>
                        <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition">
                            Shop Now
                        </button>
                    </div>
                    <img
                        src="/images/banner-fashion.png"
                        alt="Hero Banner"
                        className="w-full md:w-1/2 object-contain"
                    />
                </div>
            </section>

            {/* Categories Row */}
            <section className="flex overflow-x-auto gap-6 px-6 py-4 border-b mb-10">
                {[
                    { name: "T-Shirt", icon: <Shirt className="w-6 h-6" /> },
                    { name: "Jacket", icon: <GiSleevelessJacket className="w-6 h-6" /> },
                    { name: "Shoes", icon: <FaShoePrints className="w-6 h-6" /> },
                    { name: "Bag", icon: <ShoppingBag className="w-6 h-6" /> },
                    { name: "Watch", icon: <Watch className="w-6 h-6" /> },
                ].map((cat, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center text-sm font-medium cursor-pointer hover:text-primary transition"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary/10 transition">
                            {cat.icon}
                        </div>
                        <span className="mt-2">{cat.name}</span>
                    </div>
                ))}
            </section>

            {/* Flash Sale */}
            <section className="px-6 mb-12">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                        ⚡ Flash Sale
                        <span className="text-red-500 font-bold text-lg">08:17:56</span>
                    </h3>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-100">{"<"}</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-100">{">"}</button>
                    </div>
                </div>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    navigation={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    modules={[Navigation]}
                >
                    {[1, 2, 3, 4].map((item) => (
                        <SwiperSlide key={item}>
                            <div className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition">
                                <img
                                    src={`/images/product-${item}.png`}
                                    alt="Product"
                                    className="w-full h-40 object-contain mb-4"
                                />
                                <h4 className="font-medium mb-1">
                                    EliteShield Performance Jacket
                                </h4>
                                <div className="flex gap-2 items-center mb-2">
                                    <span className="text-primary font-semibold">Rp255.000</span>
                                    <span className="line-through text-gray-400 text-sm">
                                        Rp525.000
                                    </span>
                                </div>
                                <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
                                    <div className="h-full w-3/4 bg-primary"></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">9/10 Sold</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Today’s Picks */}
            <section className="px-6">
                <h3 className="text-xl font-semibold mb-6">Today’s Picks for You</h3>
                <div className="flex gap-4 mb-6">
                    {["Best Seller", "Keep Stylish", "Special Discount", "Official Store"].map(
                        (tab, i) => (
                            <button
                                key={i}
                                className="px-4 py-2 rounded-lg border hover:bg-primary/10 text-sm font-medium"
                            >
                                {tab}
                            </button>
                        )
                    )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                            key={item}
                            className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition"
                        >
                            <img
                                src={`/images/product-${item}.png`}
                                alt="Product"
                                className="w-full h-40 object-contain mb-4"
                            />
                            <h4 className="font-medium mb-1">Stylish Product {item}</h4>
                            <span className="text-primary font-semibold">Rp250.000</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;
