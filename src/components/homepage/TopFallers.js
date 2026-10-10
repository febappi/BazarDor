import { apiFetch } from '@/lib/api';
import React from 'react';
import ProductCard from '../shared/ProductCard';

const TopFallers = async () => {
    const data = await apiFetch('/products')
    if (!data) {
        return <p>Failed to load data from API.</p>;
    }
    const topSixFaller = [...data].filter(data => data.change.pct < 0).sort((a, b) => a.change.pct - b.change.pct).slice(0, 6);
    return (
        <div className='max-w-6xl mx-auto mt-8'>
            <p className='font-extrabold text-xl'>
                <span className='text-green-500 text-sm'>▼ </span>
                আজ দাম কমেছে
            </p>
            <div className='grid grid-cols-3 max-w-6xl mx-auto m-5 gap-6'>
                {topSixFaller.map((tsf) => (
                    <div key={tsf.id}>
                        <ProductCard product={tsf}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopFallers;