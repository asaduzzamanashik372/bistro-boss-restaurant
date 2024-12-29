import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from '../PopularMenu';
import Features from './Features';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <div><Banner></Banner></div>
            <div className='lg:w-[70%] mx-auto  w-[65%] lg:my-24 my-10'><Category></Category></div>
            <div className='lg:w-[70%] mx-auto  w-[90%] lg:my-24 my-10'><PopularMenu></PopularMenu></div>
            <div><Features></Features></div>
            <div className='lg:w-[70%] mx-auto'><Testimonial></Testimonial></div>
        </div>
    );
};

export default Home;