'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const SortSelect = ({ sort }) => {
    const router = useRouter();
    const pathname = usePathname();
    const handleSort = (e) => {
        const value = e.target.value;
        if(value === 'default'){
            router.push(pathname);
        } else {
            router.push(`${pathname}?sort=${value}`);
        }
    };
    return (
        <select defaultValue={sort || 'default'} onChange={handleSort} className="select w-38 cursor-pointer">
            <option value="default">ডিফল্ট</option>
            <option value="asc">দাম: কম থেকে বেশি</option>
            <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
    );
};

export default SortSelect;
