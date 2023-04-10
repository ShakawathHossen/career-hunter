import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const SingleJob = ({ job }) => {
    const { id, Company_Logo, Job_title, Company_Name, Job_Type, Location, Salary, Job_Description } = job
    console.log(id)
    return (
        <div className='bg-slate-200 border-2 rounded-md  md:p-6 p-2'>
            <   div className="p-4">
                <img className=' mb-6' src={Company_Logo} alt="" />
                <h1 className='text-2xl font-semibold my-1'>{Job_title}</h1>
                <p>{Company_Name}</p>
                <button className='border-2 border-sky-400 text-sky-500 px-4 py-1 my-2 rounded-md'>{Job_Type}</button>
                <div className='flex md:gap-6'>
                    <div className='flex'>
                        <MapPinIcon className="h-6 w-6 fill-slate-400 " /><p>{Location}</p>
                    </div>
                    <div className='flex'>
                        <CurrencyDollarIcon className="h-6 w-6 fill-slate-400" />
                        <p>{Salary}</p>
                    </div>
                </div>
                <button className='bg-sky-600 hover:bg-sky-700 text-white px-3 py-1 rounded-sm my-4'>View Details</button>


            </div>


        </div>

    );
};

export default SingleJob;