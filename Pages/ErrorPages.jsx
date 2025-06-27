import React from 'react';
import ErrorPage from '../assets/404 page.png'
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';

const ErrorPages = () => {
    return (
        
        <div>
            <Navber></Navber>
           <div className='w-full flex justify-center items-center'><img className='w-7xl' src={ErrorPage} alt="" /> </div>
           <Footer></Footer>
        </div>
    );
};

export default ErrorPages;