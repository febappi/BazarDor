import { apiFetch } from '@/lib/api';
import React from 'react';

const ProductPageByID = async ({params}) => {
    const {slug} = await params;
    const data = await apiFetch(`/products/${slug}`);
    console.log(data);
    return (
        <div className='max-w-6xl mx-auto flex justify-center items-center gap-6 mt-6'>
            <p>Product ID= {data.id}</p>
            <p>Product Name= {data.nameBn}</p>
        </div>
    );
};

export default ProductPageByID;