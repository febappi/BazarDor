import React from 'react';
import ProductCard from '../shared/ProductCard';
import { apiFetch } from '@/lib/api';

const AllProduct = async () => {
    const data = await apiFetch('/products')
    if(!data){
        return <p>Failed to load data from API.</p>;
    }
    return (
        <div id="product-section" className='max-w-6xl mx-auto mt-8'>
            <p className='font-extrabold text-xl mb-3'>
                সব পণ্য
            </p>
            <p className='font-light text-lg'>
                মোট {data.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
            </p>
            <div className='grid grid-cols-3 max-w-6xl mx-auto m-5 gap-6'>
                    {data.map((data) => (
                        <div key={data.id}>
                            <ProductCard product={data} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AllProduct;