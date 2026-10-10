import { apiFetch } from '@/lib/api';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {
    const data = await apiFetch('/categories');
    if(!data){
        return <p>Failed to load data from API.</p>;
    }
    return (
        <div className='flex gap-10'>
            {data.map(n =>
                <Link key={n.id} href={`/category/${n.slug}`}>
                    <span>{n.icon}</span>
                    <span className='ml-1 font-bold'>{n.nameBn}</span>
                </Link>)}
        </div>
    );
};

export default CategoryList;