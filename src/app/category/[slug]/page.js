import ProductCard from '@/components/shared/ProductCard';
import { apiFetch } from '@/lib/api';
import React from 'react';

const CategoryPageSlug = async ({ params }) => {
    const { slug } = await params;
    const data = await apiFetch(`/categories/${slug}`);
    const cat = await apiFetch('/products');
    const currentCategory = cat.filter(c => c.category === data.slug);
    console.log(currentCategory)
    return (
        <div className='mt-6 mb-12'>
            <div className='w-full max-w-6xl mx-auto bg-white m-4 p-4 rounded-3xl'>
                <div className="flex items-center gap-3 mt-2">
                    <div className='text-4xl'>
                        {data.icon}
                    </div>
                    <div className='items-center'>
                        <p className='text-2xl font-bold'>
                            {data.nameBn}
                        </p>
                        <p className='font-light text-lg'>
                            {currentCategory.length.toLocaleString('bn-BD')}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-6xl mx-auto bg-white m-4 p-4 rounded-3xl'>
                <div className='flex justify-end items-center'>
                    <p className='px-4 font-light'>সাজান</p>
                    <select defaultValue="ডিফল্ট" className="select w-38 cursor-pointer">
                        <option>ডিফল্ট</option>
                        <option>দাম: কম থেকে বেশি</option>
                        <option>দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
            <div className='max-w-6xl w-full mx-auto'>
                <p className='font-light text-lg ml-2'>
                    মোট {currentCategory.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
                </p>
                <div className='grid grid-cols-3 max-w-6xl mx-auto m-5 gap-6'>
                    {currentCategory.map((cc) => (
                        <div key={cc.id}>
                            <ProductCard product={cc} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPageSlug;