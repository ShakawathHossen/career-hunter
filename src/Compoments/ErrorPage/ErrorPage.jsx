import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    return (
<div>
    <section className='flex flex-col items-center justify-center h-screen p-16  text-gray-900'>
        {/* <img className='w-4/12' src="/src/assets/404 error lost in space-cuate.png" alt="" /> */}
        <img className='pb-3' src="https://i.ibb.co/hmb8jTJ/404.gif" alt="" />
        <button className='btn bg-green-700 border-none hover:bg-red-700'><Link to="/">Back To Home</Link></button>
    </section>
</div>
    );
};

export default ErrorPage;