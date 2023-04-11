import React from 'react';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';

const AppliedJob = () => {
    // Retrieve the applied jobs array from local storage
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    return (
        <div>
            <div className='md:my-16 my-4'>
                <h1 className='text-center md:text-3xl text-2xl font-semibold'>Applied Job</h1>
            </div>
            <div>
                {appliedJobs.length === 0 && <p className='text-center font-bold text-red-700'>You have not applied to any jobs yet.</p>}
                {appliedJobs.map((job) => ( <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
                     
                ))}
            </div>

        </div>
    );
};

export default AppliedJob;