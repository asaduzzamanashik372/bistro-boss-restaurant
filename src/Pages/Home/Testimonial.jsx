import React, { useEffect, useState } from 'react';
import SectionTitle from '../../assets/Shared/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => [
                setReviews(data)
            ])
    }, [])

    return (
        <section className='my-10 lg:my-20'>
            <SectionTitle subHeading={"testimonial"} heading={"----- what our clients say -----"}>

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='py-5 px-12 lg:py-16 lg:px-28 flex flex-col justify-center items-center text-center gap-3 lg:gap-7'>
                            <Rating 
                                style={{ maxWidth: 300 }}
                                value={review.rating}
                                readOnly
                            />
                            <img src="https://img.icons8.com/?size=50&id=38968&format=png" alt="" />
                            <p>{review.details}</p>
                            <h2 className='text-3xl text-orange-600'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;