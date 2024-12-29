import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../assets/Shared/Navbar';
import Footer from '../assets/Shared/Footer';

const Main = () => {
    return (
        <div>
            <div className=''><Navbar></Navbar></div>
            <div><Outlet></Outlet></div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Main;