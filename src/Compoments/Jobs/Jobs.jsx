import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const Jobs = () => {
    const jobs=useLoaderData();
    const [showAllJobs, setShowAllJobs] = useState(false);
    const handleSeeAllJobsClick = () => {
        setShowAllJobs(true);
    };
    const displayedJobs = showAllJobs ? jobs : jobs.slice(0, 4);
    return ( 
        <div className='mb-10 md:w-full w-11/12 mx-auto'>
            <div className='md:my-24'>
                <h1 className='md:text-5xl text-4xl text-center font-bold mb-2 md:leading-tight leading-tight md:mb-5'>Featured Jobs</h1>
                <p className='mb-4 md:me-20 text-center text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
               <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-10 gap-8 mx-auto mb-10'>
               {
                    displayedJobs.map(job => <SingleJob 
                        key={job.id}
                        job={job}
                    ></SingleJob>)
                }
               </div>
               <div className='text-center'>
               {!showAllJobs && <button className="bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 rounded-md my-4 text-center" onClick={handleSeeAllJobsClick}>See All Jobs</button>}
               </div>
        </div>
    );
};

export default Jobs;