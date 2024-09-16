import { NavLink } from 'react-router-dom';
import './Navber.css'
import { useEffect, useState } from 'react';
const Navber = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const getTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', getTheme)
    
    }, [theme])

    const handleTheme = (e) => {
        if(e.target.checked){
            console.log(e.target.checked);
            
            setTheme('synthwave')
        }else{
            setTheme('ligth')
        }
        
    }

    const menu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listedBook'>Listed Book</NavLink></li>
        <li><NavLink to='/pagesToRead'>Pages To Read</NavLink></li>
    </>
    return (
        <div className="container ">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book <span className='text-green-500'>Bucket</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-green-500 text-white font-bold px-3 py-2 rounded-lg">Sign In</a>
                    <a className="bg-green-500 text-white font-bold px-3 py-2 rounded-lg ml-3">Sign Up</a>
                    <label className="grid cursor-pointer place-items-center ml-4">
                        <input
                            onChange={handleTheme}
                            type="checkbox"
                            // value="synthwave"
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navber;