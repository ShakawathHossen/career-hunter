import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const data = [
        { subject: 'Ass 1', mark: 50, rank: 100 },
        { subject: 'Ass 2', mark: 55, rank: 133 },
        { subject: 'Ass 3', mark: 45, rank: 522 },
        { subject: 'Ass 4', mark: 57, rank: 221 },
        { subject: 'Ass 5', mark: 60, rank: 322 },
        { subject: 'Ass 6', mark: 30, rank: 32 },
        { subject: 'Ass 7', mark: 55, rank: 321 },
      ];
    return (
        <div>
            <div className='md:my-16 my-4'>
                <h1 className='text-center md:text-3xl text-2xl font-semibold'>Statistics</h1>
            </div>
            <div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 bg-white">
  <div className="p-4"></div>
  <div className="hidden md:block p-4 chart-container">
  <ComposedChart
    width={600}
    height={400}
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
  >
    <CartesianGrid stroke="#ff1f1" />
    <XAxis dataKey="subject" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
  </ComposedChart>
</div>

<div className="md:hidden p-4 chart-container">
  <ComposedChart
    width={320}
    height={300}
    data={data}
    margin={{ top: 20, right:0, bottom: 20, left: 0 }}
  >
    <CartesianGrid stroke="#f1f1f1" />
    <XAxis dataKey="subject" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="mark" barSize={15} fill="#413ea0" />
    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
  </ComposedChart>
</div>

  {/* on mobile  */}
  <div className=" p-4"></div>
</div>

            </div>    

        </div>
      
        
    );
};

export default Statistics;