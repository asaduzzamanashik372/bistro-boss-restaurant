import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto md:w-4/12 my-8 text-center'>
            <h2 className='text-yellow-600 mb-4 '>{heading}</h2>
            <p className='text-3xl border-y-4 py-4 uppercase'>{subHeading}</p>
            
        </div>
    );
};

export default SectionTitle;