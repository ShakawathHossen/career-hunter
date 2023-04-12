import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
const Banner = () => {
    return (
        <div>
            <div className='md:w-9/12 mx-auto'>
            <div className="grid grid-cols-1 items-center md:grid-cols-5 gap-4">
                <div className="col-span-3 md:col-span-3 p-4">
                    <h1 className="md:text-7xl text-4xl text-center md:text-start font-bold mb-2 md:leading-tight leading-tight md:mb-5">One Step Closer To Your Dream Job</h1>
                    <p className="mb-4 md:me-20 text-center md:text-start md:text-2xl text-xl">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
                </div>
                <div className="col-span-2 md:col-span-2">
                    <img src="https://i.ibb.co/6nQxJsZ/banner-image.png" alt="Image" className="" />
                </div>
            </div>
            <JobCategory/>
            <Jobs/>
        </div>
   
        </div>
    );
};

export default Banner;