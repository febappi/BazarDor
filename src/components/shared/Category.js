import { apiFetch } from '@/lib/api';
import React from 'react';
import CategoryLink from './CategoryLink';

const CategoryList = async () => {
    const data = await apiFetch('/categories');
    if(!data){
        return <p>Failed to load data from API.</p>;
    }
    return (
        <div className='flex gap-4 overflow-x-auto whitespace-nowrap'>
            {data.map(n =>
                <CategoryLink key={n.id} href={`/category/${n.slug}`}>
                    <span>{n.icon}</span>
                    <span className='ml-1 font-bold'>{n.nameBn}</span>
                </CategoryLink>)}
        </div>
    );
};

export default CategoryList;