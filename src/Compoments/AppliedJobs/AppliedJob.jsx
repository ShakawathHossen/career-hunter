import React, { useState } from 'react';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';

const AppliedJob = () => {
    // Retrieve the applied jobs array from local storage
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    // Define state to keep track of the currently selected job type filter
    const [jobTypeFilter, setJobTypeFilter] = useState("all");

    // Filter the applied jobs array based on the selected job type filter
    const filteredJobs = jobTypeFilter === "all" ? appliedJobs : appliedJobs.filter(job => job.Job_Type === jobTypeFilter);

    

    return (
        <div>
            <div className='md:my-16 my-4'>
                <h1 className='text-center md:text-3xl text-2xl font-semibold'>Applied Job</h1>
            </div>
            <div className='shortByButtons text-center py-4'>
                <button className=' btn-primary p-2 m-2  font-semibold rounded-md hover:bg-sky-600' onClick={() => setJobTypeFilter("all")}>All Jobs</button>
                <button className='btn-success text-white font-semibold  p-2 m-2 rounded-md hover:bg-sky-600' onClick={() => setJobTypeFilter("Full-time")}>Full Time</button>
                <button className='btn-accent text-white font-semibold  p-2 m-2 rounded-md hover:bg-sky-600' onClick={() => setJobTypeFilter("Part-time")}>Part Time</button>
            </div>
            <div>
                {filteredJobs.length === 0 && <p className='text-center font-bold text-red-700'>You have not applied to any jobs yet.</p>}
            
                {filteredJobs.map((job) => ( 
                    <SingleAppliedJob
                        key={job.id} 
                        job={job}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppliedJob;
