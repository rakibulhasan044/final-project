
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./category/Category";
import Featured from "./featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonials from "./testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss
                </title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;