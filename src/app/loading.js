import React from 'react';

const Loading = () => {
    return (
        <div className='max-w-6xl w-full mx-auto mt-8 mb-12'>
            <div className="skeleton h-8 w-48 mb-3"></div>
            <div className="skeleton h-5 w-72"></div>
            <div className='grid grid-cols-3 max-w-6xl mx-auto m-5 gap-6'>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="skeleton h-44 w-full rounded-3xl"></div>
                ))}
            </div>
        </div>
    );
};

export default Loading;
