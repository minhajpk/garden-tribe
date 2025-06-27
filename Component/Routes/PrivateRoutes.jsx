import React, { Children, use } from 'react';
import { AuthContext } from '../../Firebase/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation();
      if(loading){
        return <div className=' w-full flex justify-center items-center mt-80'><span className="loading loading-bars loading-lg"></span></div>
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }
    else{
        <Navigate to='/home'></Navigate>
    }


    return (
        children
    );
};

export default PrivateRoutes;