import React from 'react';
import './JobCategorySingle.css'

const JobCategorySingle = ({job}) => {
    return (
        <div className='bg-slate-200 p-8 rounded-lg flex flex-col  items-center container hover:bg-slate-300 duration-500'>
            <img className='bg-slate-100 p-3 rounded-lg w-16' src={job.image_url} alt="" />
            <h1 className='font-bold text-2xl my-4'>{job.job_title}</h1>
            <h1 className='text-xl'>{job.total_job}</h1>
            
        </div>
    );
};

export default JobCategorySingle;