import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
  <div className='header'>
      <div className='md:w-9/12 mx-auto header '>
        <div className="navbar md:py-5 py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <Link to="/"><li>Home</li></Link>
                <Link to="/statistics"><li>Statistics</li></Link>
                <Link to="/appliedjobs"><li>Applied Jobs</li></Link>
                <Link to="/blog"><li>Blog</li></Link>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case md:text-3xl text-xl">Career Hunter</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold md:text-xl">
              <Link to="/"><li>Home</li></Link>
              <Link to="/statistics"><li>Statistics</li></Link>
              <Link to="/appliedjobs"><li>Applied Jobs</li></Link>
              <Link to="/blog"><li>Blog</li></Link>

            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Start Applying</a>
          </div>
        </div>
   </div>
  </div>
  );
};

export default Header;