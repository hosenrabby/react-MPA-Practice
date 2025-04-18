import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';


const Navbar = () => {
    const links = <>
        <NavLink to='/' ><li className='px-3 py-1 text-[#22be0ade] rounded-sm cursor-pointer'>Home</li></NavLink>
        <NavLink to='/listedbooks' ><li className='px-3 py-1 text-[#22be0ade] rounded-sm cursor-pointer'>Listed Books</li></NavLink>
        <NavLink to='/pagetoread' ><li className='px-3 py-1 text-[#22be0ade] rounded-sm cursor-pointer'>Pages to Read</li></NavLink>
    </>
    return (
        <div>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl Work-sans font-bold cursor-pointer">Book VIBE</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end lg:space-x-1.5">
                    <button className='btn bg-[#22be0ade] hover:bg-[#22be0a] text-white border border-[#23BE0A] rounded-md'>Sign In</button>
                    <button className='btn btn-accent text-white rounded-md'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;