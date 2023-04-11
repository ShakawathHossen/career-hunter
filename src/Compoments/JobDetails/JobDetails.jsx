import { Link, useLoaderData, useParams } from 'react-router-dom';
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find((j) => j.id === id);

    if (!job) {
        return <div>Loading...</div>;
    }


    const handleApplyNow = (job) => {
        // Get existing applied jobs from local storage or create an empty array if it does not exist
        const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

        // Add the current job to the applied jobs array
        appliedJobs.push(job);

        // Save the updated applied jobs array to local storage
        localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
        alert('Added job')
    };

    return (


        <div className=''>
            <div className='md:my-16 my-4'>
                <h1 className='text-center md:text-3xl text-2xl font-semibold'>Job Details</h1>
            </div>
            <div className='md:py-16 py-4 bg-white'>
                <div className="grid grid-cols-5 gap-x-10 md:w-9/12 w-11/12 mx-auto">
                    <div className="md:col-span-3 col-span-5">
                        <p className='py-3'><span className='font-bold'>Job Description: </span>{job.Job_Description}</p>
                        <p className='py-3'><span className='font-bold'>Job Responsibility: </span>{job.Job_Responsibility}</p>
                        <p className='py-3'><span className='font-bold'>Educational Requirements: </span>{job.Educational_Requirements}</p>
                        <p className='py-3'><span className='font-bold'>Experiences: </span>{job.Experiences}</p>

                    </div>
                    <div className="md:col-span-2 col-span-5">
                        <div className="bg-slate-200 p-4 rounded-lg shadow">
                            <h2 className="text-lg font-bold mb-4">Job Details</h2>
                            <hr className="border-t-2 border-sky-300" />
                            <div className="mb-4">
                                <p className='py-2'><span className='font-bold'>Salary: </span>{job.Salary}</p>
                            </div>
                            <div className="mb-4">
                                <p className=''><span className='font-bold'>Job Title: </span>{job.Job_title}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className=" text-lg font-bold mb-3">Contact Information</h3>
                                <hr className="border-t-2 border-sky-300" />
                                <p className='py-2'>
                                    <span span className='font-bold'>Phone:</span> {job.Phone}
                                </p>
                                <p>
                                    <span span className='font-bold'>Email:</span>{" "}
                                    <a href="mailto:example@example.com"> {job.Email}</a>
                                </p>
                                <p className='py-2'>
                                    <span span className='font-bold'>Address: </span>{job.Address}
                                </p>
                            </div>
                        </div>
                        <button className='bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-md my-4 w-full' onClick={() => handleApplyNow(job)}>Apply Now</button>

                        {/* <Link> <button className='bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-md my-4 w-full'>Apply Now </button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default JobDetails;