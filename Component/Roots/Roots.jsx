import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../Footer';
import Navber from '../Navber';


export const Roots = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;