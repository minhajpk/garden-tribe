import React from 'react';

const contact = () => {
    return (
        <div className=' lg:flex  justify-center lg:gap-5 items-center max-h-screen mt-20 lg:p-50'>
            <h2 className=" font-bold text-2xl p-2 text-center text-green-700">Contact Information</h2>
            <div className="card lg:w-1/2 mx-auto mb-5 w-fit text-center  bg-base-100 lg:card-xl border-1 border-green-500  shadow-sm ">
                <div className="card-body ">
                    
                    <p><span className='font-bold text-green-700'>Company Name:</span> Gardentribe</p>
                    <p><span className='font-bold text-green-700'>Address:</span> 45 Greenway Lane, Dhaka, Bangladesh</p>
                    <p><span className='font-bold text-green-700'>Phone</span> +880 9876 543 210</p>
                    <p><span className='font-bold text-green-700'>Email: </span> contact@gardentribe.com</p>
                    <p><span className='font-bold text-green-700'>Customer Support:</span> support@gardentribe.com</p>
                </div>

            </div>
        </div>
    );
};

export default contact;