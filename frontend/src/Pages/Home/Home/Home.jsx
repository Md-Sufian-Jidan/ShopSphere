import BestSellers from '../BestSellers/BestSellers';
import BrandLogos from '../BrandLogos/BrandLogos';
import Featured from '../Featured/Featured';
import FlashSales from '../FlashSales/FlashSales';
import Hero from '../Hero/Hero';
import NewArrivals from '../NewArrivals/NewArrivals';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <BestSellers />
            <FlashSales />
            <NewArrivals />
            <Testimonials />
            <BrandLogos />
            <NewsLetter />
        </div>
    );
};

export default Home;