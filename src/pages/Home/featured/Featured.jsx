import SectionTitle from "../../../components/SectionTitle";
import fimg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed mt-10 pt-1">
            <SectionTitle
            subHeading={'Check it out'}
            heading={"Featured items"}></SectionTitle>
            <div className="md:flex justify-center items-cente pb-20 pt-5 px-10 lg:px-24 bg-black bg-opacity-50">
                <div>
                    <img src={fimg} />
                </div>
                <div className="md:ml-10">
                    <p className="text-white">Aug 25, 2029</p>
                    <p className="uppercase text-white">Where can i get some?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, id! Sapiente, in tenetur quam provident magnam suscipit dolores non? Nesciunt alias saepe voluptas quaerat repellat, odio fugiat numquam veritatis. Maiores explicabo doloremque sunt sed, illo nam rerum vitae quidem labore dolore eos quasi esse autem. Nostrum nam accusamus possimus.</p>
                    <button className="btn btn-outline btn-warning mt-2 border-b-4 border-0">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;