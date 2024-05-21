
import Banner from "./Banner/Banner";
import Category from "./category/Category";
import Featured from "./featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonials from "./testimonials/Testimonials";


const Home = () => {
    return (
        <div className="px-4">
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;