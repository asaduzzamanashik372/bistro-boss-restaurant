import React from 'react';

const MenuItem = ({item}) => {
    const {price, category, recipe, name, image} = item
    return (
        <div className='flex gap-5'>
            <div><img className='w-[100px] rounded-r-full  rounded-b-full' src={image} alt="" /></div>
            <div className=''>
                <h2 className='uppercase'>{name} -----------------</h2>
                <h2>{recipe}</h2>
                
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;