import Link from 'next/link';
import React from 'react';

const NavbarClient = () => {
    return (
        <div className='flex item-center gap-2'>
            <Link href="/sign-in">
            <button className="btn border-0 rounded-xl w-25">সাইন ইন</button>
            </Link>
            <Link href="/sign-up">
            <button className="btn bg-green-600 rounded-xl w-25 text-white hover:bg-green-800">সাইন আপ</button>
            </Link>
        </div>
    );
};

export default NavbarClient;