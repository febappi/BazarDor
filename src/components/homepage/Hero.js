import Image from 'next/image';
import React from 'react';

const HeroBanner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
    });
    return (
        <div className='max-w-6xl mx-4 xl:mx-auto my-8 flex flex-col-reverse md:flex-row justify-between items-center bg-white rounded-3xl border-2 border-gray-200 shadow-md'>
            <div className='m-4'>
                <p className='inline-block rounded-full bg-[#E2F1E7] px-3 py-1 text-s text-[#05893e] font-bold'>
                    {date}
                </p>
                <p className='text-[#1D271F] text-2xl sm:text-4xl font-extrabold mt-4 mb-6'>
                    আজকের বাজারের দাম এক নজরে
                </p>
                <p className='font-light text-base sm:text-lg'>
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-<br></br>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>
                <a href='#product-section'>
                    <button className='btn btn-sm sm:btn-md inline-block bg-green-600 rounded-xl text-white shadow-md hover:bg-green-800 mt-6 mb-10'>সব পণ্য দেখুন</button>
                </a>
            </div>
            <div>
                <Image src="/bazar-hero.png" alt="Hero Image" width={350} height={280} className='w-48 sm:w-64 md:w-auto'>
                </Image>
            </div>
        </div>
    );
};

export default HeroBanner;