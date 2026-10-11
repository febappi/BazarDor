import { apiFetch } from '@/lib/api';
import React from 'react';
import ProductCard from '../shared/ProductCard';

const TopRisers = async () => {
    const data = await apiFetch('/products')
    if (!data) {
        return <p>Failed to load data from API.</p>;
    }
    const topSixRiser = [...data].filter(data => data.change.pct > 0).sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);
    return (
        <div className='max-w-6xl mx-auto mt-8 px-4'>
            <p className='font-extrabold text-xl'>
                <span className='text-red-500 text-sm'>▲ </span>
                আজ দাম বেড়েছে
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto my-5 gap-6'>
                {topSixRiser.map((tsr) => (
                    <div key={tsr.id}>
                        <ProductCard product={tsr}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRisers;