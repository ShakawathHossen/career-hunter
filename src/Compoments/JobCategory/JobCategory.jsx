import React, { useEffect, useState } from 'react';
import JobCategorySingle from '../JobCategorySingle/JobCategorySingle';

const JobCategory = () => {
    const[jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch("jobcategory.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))

    },[])

    return (
        <div className='d-flex flex-row md:w-full w-11/12 mx-auto'>
            <div className='md:my-24'>
                <h1 className='md:text-7xl text-4xl text-center font-bold mb-2 md:leading-tight leading-tight md:mb-5'>Job Category List</h1>
                <p className='mb-4 md:me-20 text-center md:text-2xl text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-4 md:gap-10 gap-5 mb-40'>
                {
                    jobs.map((job) => <JobCategorySingle 
                    key={job.id}
                    job={job}
                    /> )
                }
            </div>
        </div>
    );
};

export default JobCategory;