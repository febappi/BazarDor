'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CategoryLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={isActive ? 'px-3 py-1 rounded-full bg-[#E2F1E7] text-[#05893e]' : 'px-3 py-1 rounded-full hover:bg-gray-100'}>
            {children}
        </Link>
    );
};

export default CategoryLink;
