import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NaveBar = () => {

    return (
    <div>
        <div className="navbar bg-blue-100">
            <div className="navbar-start">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Knowledge Test</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="md:hidden btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu md:block menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/home' >Home</NavLink></li>
                        <li><NavLink to='/topics'>Topics</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <ul className="md:flex hidden ">
                    <li>
                        <NavLink className={({isActive}) => isActive? `mr-3 px-3 py-2 text-orange-700`:`mr-3 px-3 py-2 hover:text-orange-700` } to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive? `mr-3 px-3 py-2 text-orange-700`:`mr-3 px-3 py-2 hover:text-orange-700` } to='/topics'>Topics</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive? `mr-3 px-3 py-2 text-orange-700`:`mr-3 px-3 py-2 hover:text-orange-700` } to='/statistics'>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive? `mr-3 px-3 py-2 text-orange-700`:`mr-3 px-3 py-2 hover:text-orange-700` } to='/blog'>Blog</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default NaveBar;