import HeroSection from "./HeroSection";
import OfferBanner from "./OfferBanner";
import CategoryCards from "./CategoryCards";
import AllProducts from "./AllProducts";
// import Testimonials from "./Testimonials";
import AllBlogs from "./AllBlogs";

const MainBody = () => {
    return (
        <>
            <HeroSection />
            <OfferBanner />
            <CategoryCards />
            <AllProducts />
            {/* <Testimonials /> */}
            <AllBlogs />
        </>
    );
};

export default MainBody;
