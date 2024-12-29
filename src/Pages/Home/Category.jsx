// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg';
import slider2 from '../../assets/home/slide2.jpg';
import slider3 from '../../assets/home/slide3.jpg';
import slider4 from '../../assets/home/slide4.jpg';
import slider5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../assets/Shared/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={"From 11:00am to 10:pm "}
                subHeading={"ORDER ONLINE"}

            >

            </SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h2 className='text-3xl text-gray-50 -mt-20 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h2 className='text-3xl text-gray-50 -mt-20 text-center'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h2 className='text-3xl text-gray-50 -mt-20 text-center'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h2 className='text-3xl text-gray-50 -mt-20 text-center'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h2 className='text-3xl text-gray-50 -mt-16 text-center'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;












