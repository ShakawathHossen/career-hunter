import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;