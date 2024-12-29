import React from 'react';
import SectionTitle from '../../assets/Shared/SectionTitle';
import featureimg from "../../assets/home/featured.jpg"
import "./Features.css"

const Features = () => {
    return (
        <div className='my-10 background lg:my-20 p-5 lg:p-20 text-white'>
            <SectionTitle heading={"check it out"} subHeading={"from our menu"}>

            </SectionTitle>
            <div className='lg:flex lg:w-[60%] mx-auto justify-center items-center gap-10 '>
                <div><img className='mb-5' src={featureimg} alt="" /></div>
                <div className='space-y-5'>
                    <h2 className=''>December 30, 2024</h2>
                    <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus in ex! Ullam deserunt minus culpa animi distinctio consectetur, id dolore dolor aperiam sapiente ipsa deleniti error numquam suscipit nam debitis! Veniam placeat eum, autem quibusdam eos facilis eius distinctio.</p>
                    <button className="btn btn-outline border-0 border-b-2 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Features;