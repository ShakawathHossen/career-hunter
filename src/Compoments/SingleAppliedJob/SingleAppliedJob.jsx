import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const SingleAppliedJob = ({ job }) => {
    const { id, Company_Logo, Job_title, Company_Name, Job_Type, Location, Salary, Job_Description } = job
    return (

        <div className='bg-white'>
            <div>
                <div>
                    <div className='md:w-9/12 w-11/12 mx-auto py-4' >
                        <div className="grid grid-cols-5 gap-4 py-6 border items-center  rounded-md shadow-sm hover:shadow-md hover:shadow-sky-200 duration-300">
                            <div className="md:col-span-1 col-span-5 bg-slate-200 my-auto p-20 mx-5  rounded-md">
                                <div className=''>
                                    <img className='w-full' src={Company_Logo} alt="" />
                                </div>
                            </div>
                            <div className="md:col-span-3 col-span-5">
                                <div>
                                    <h1 className='text-2xl font-semibold mb-2'>{Job_title}</h1>
                                    <p>{Company_Name}</p>
                                    <button className='border-2 border-sky-400 text-sky-500 px-4 py-1 my-4 rounded-md'>{Job_Type}</button>
                                    <div className='flex md:gap-6'>
                    <div className='flex'>
                        <MapPinIcon className="h-6 w-6 fill-slate-400 " /><p>{Location}</p>
                    </div>
                    <div className='flex'>
                        <CurrencyDollarIcon className="h-6 w-6 fill-slate-400" />
                        <p>{Salary}</p>
                    </div>
                </div>           
                                </div>
                            </div>
                            <div className="md:col-span-1 col-span-5 mx-auto">
                                <div>
                               <button className='bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 font-semibold rounded-md my-4'>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAppliedJob;