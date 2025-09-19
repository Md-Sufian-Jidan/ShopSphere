import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 
const heroSlides = [
    {
        title: "Smart Deals, Everyday",
        subtitle: "Discover trending gadgets and lifestyle picks at unbeatable prices.",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2000&auto=format&fit=crop",
        ctaPrimary: { label: "Shop Now", href: "/products" },
        ctaSecondary: { label: "View Deals", href: "#deals" },
    },
    {
        title: "Fresh Arrivals Weekly",
        subtitle: "Handpicked products from top brands. Limited stocks—don't miss out!",
        image:
            "https://images.unsplash.com/photo-1511385351671-502e3291a0b0?q=80&w=2000&auto=format&fit=crop",
        ctaPrimary: { label: "New In", href: "#new" },
        ctaSecondary: { label: "Best Sellers", href: "#bestsellers" },
    },
    {
        title: "Upgrade Your Setup",
        subtitle: "Build the ultimate workstation—monitors, keyboards, audio, and more.",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
        ctaPrimary: { label: "Build Now", href: "/products?category=workspace" },
        ctaSecondary: { label: "Learn More", href: "/about" },
    },
];
const Hero = () => {
    return (
        <section className="w-full" aria-label="Hero">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                pagination={{ clickable: true }}
                navigation
                className="h-[60vh] md:h-[70vh]"
            >
                {heroSlides.map((s, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="h-full w-full bg-cover bg-center flex items-center"
                            style={{ backgroundImage: `url(${s.image})` }}
                        >
                            <div className="container mx-auto px-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="max-w-xl bg-background/70 backdrop-blur-md p-6 rounded-lg shadow"
                                >
                                    {/* <Badge className="mb-3 inline-flex items-center gap-1"><Sparkles className="h-4 w-4" /> BuySmart</Badge> */}
                                    <h1 className="text-3xl md:text-5xl font-bold mb-3">{s.title}</h1>
                                    <p className="text-muted-foreground mb-6">{s.subtitle}</p>
                                    <div className="flex gap-3">
                                        {/* <Button asChild><Link href={s.ctaPrimary.href}>{s.ctaPrimary.label}</Link></Button> */}
                                        {/* <Button asChild variant="secondary"><Link href={s.ctaSecondary.href}>{s.ctaSecondary.label}</Link></Button> */}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
