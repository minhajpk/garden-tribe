import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/GardenTribe logo2.png';
import Icon from '../assets/user.png';
import { AuthContext } from '../Firebase/AuthContext';

const Navber = () => {
    const { logOut, user } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const handleLogOut = () => {
        logOut();
    };

    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? " text-[#006023] font-bold underline" : "text-[#006023]"}><li className='m-3 text-xl hover:bg-blue-300'>Home</li></NavLink>
            <NavLink to="/explore-gardeners" className={({ isActive }) => isActive ? "text-[#006023] font-bold underline" : "text-[#006023]"}><li className='m-3 text-xl hover:bg-blue-300'>Explore Gardeners</li></NavLink>
            <NavLink to="/browes-tips" className={({ isActive }) => isActive ? "text-[#006023] font-bold underline" : "text-[#006023]"}><li className='m-3 text-xl hover:bg-blue-300'>Browes Tips</li></NavLink>
            <NavLink to="/share-garden-tips" className={({ isActive }) => isActive ? "text-[#006023] font-bold underline" : "text-[#006023]"}><li className='m-3 text-xl hover:bg-blue-300'>Share Garden Tips</li></NavLink>
            <NavLink to="/my-tips" className={({ isActive }) => isActive ? "text-[#006023] font-bold underline" : "text-[#006023]"}><li className='m-3 text-xl hover:bg-blue-300'>My Tips</li></NavLink>
        </>
    );

    return (
        <div className="navbar lg:pl-60 lg:pr-60 bg-green-50 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden sm:pl-5 sm:pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box space-y-2 z-1 mt-2 w-52 p-2 shadow text-xl">
                        {links}
                        <NavLink to="/login" className={({ isActive }) => isActive ? "text-[#006023] font-bold underline" : "text-[#006023]"}><li className='m-3 text-xl hover:bg-blue-300'>Login</li></NavLink>
                        <NavLink to="/sign-up" className={({ isActive }) => isActive ? "text-[#006023] font-bold underline" : "text-[#006023]"}><li className='m-3 text-xl hover:bg-blue-300'>SignUp</li></NavLink>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-25' src={Logo} alt="logo" />
                    <a className="hidden lg:block text-xl font-bold text-[#006838]">GardenTribe</a>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-4 text-xl">
                    {links}
                </ul>
            </div>

            <div className="navbar-end pr-8 flex items-center gap-4">
                {/* Theme Toggle Button */}
                <button onClick={toggleTheme} className=" text-green-800 hover:bg-green-200">
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>

                {/* Auth Section */}
                {
                    user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL || Icon} alt="User" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box w-20">
                                <li><button onClick={handleLogOut} className="text-green-800 font-bold p-2">Signout</button></li>
                                <li><p>{user.name}</p></li>
                            </ul>
                        </div>
                    ) : (
                        <div className='space-x-3 hidden lg:block'>
                            <Link to="/login" className="btn bg-white text-[#006023] hover:bg-[#006023] hover:text-white">Login</Link>
                            <Link to="/sign-up" className="btn bg-white text-[#006023] hover:bg-[#006023] hover:text-white">Sign Up</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navber;
