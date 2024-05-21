import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
            subHeading={"From 11:00 am to 10:00 pm"}
            heading={"Order Online"}/>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salads</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;