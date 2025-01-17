import React, { useEffect, useState } from 'react';
import SectionTitle from '../assets/Shared/SectionTitle';
import MenuItem from '../assets/Shared/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems)
        })
}, [])

    return (
        <section>
            <SectionTitle subHeading={"from our menu"} heading={"--- Check it Out ---"}>

            </SectionTitle>

        <div className='grid md:grid-cols-2 gap-10'>
            {
                menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>

        </section>
    );
};

export default PopularMenu;