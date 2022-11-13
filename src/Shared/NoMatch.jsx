import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className='w-96 mx-auto text-center my-10 md:my-20'>
            <p className='text-xl font-semibold text-error'>Error! sorry page note found</p>
            <h1 className='text-5xl text-error font-bold'>404</h1>
            <Link to={"/"} className="text-blue-500 underline">  Back to Home</Link>

        </div>
    );
};

export default NoMatch;