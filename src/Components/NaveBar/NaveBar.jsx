import React from 'react';
import { Link } from 'react-router-dom';

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
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <ul className="md:flex hidden ">
                    <li><Link className='mr-3 px-3 py-2 hover:text-orange-700' to='/home'>Home</Link></li>
                    <li><Link className='mr-3 px-3 py-2 hover:text-orange-700' to='/topics'>Topics</Link></li>
                    <li><Link className='mr-3 px-3 py-2 hover:text-orange-700' to='/statistics'>Statistics</Link></li>
                    <li><Link className='mr-3 px-3 py-2 hover:text-orange-700' to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default NaveBar;