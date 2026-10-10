import { apiFetch } from '@/lib/api';
import Link from 'next/link';
import React from 'react';

const ProductPageByID = async ({ params }) => {
    const unitTranslations = {
        'kg': 'কেজি',
        'litre': 'লিটার',
        'piece': 'পিস',
        'dozen': 'ডজন'
    };
    const { slug } = await params;
    const data = await apiFetch(`/products/${slug}`);
    const lowest = Math.min(...data.markets.map(m => m.min));
    const highest = Math.max(...data.markets.map(m => m.max));
    const allPrices = data.markets.flatMap(m => [m.min, m.max]);
    const avg = Math.round(allPrices.reduce((a, b) => a + b, 0) / allPrices.length);
    return (
        <div className='max-w-6xl w-full mx-auto flex flex-col justify-center items-center gap-0 mt-6'>
            <div className='w-full'>
                <div className='flex flex-row'>
                    <Link href='/'>
                        <p>হোম</p>
                    </Link>
                    <span className='px-4'>
                        {`>`}
                    </span>
                    <Link href={`/category/${data.category}`}>
                        <p>{data.categoryNameBn}</p>
                    </Link>
                    <span className='px-4'>
                        {`>`}
                    </span>
                    <p>{data.nameBn}</p>
                </div>
            </div>
            <div className='w-full max-w-6xl mx-auto bg-white m-4 p-4 rounded-3xl flex justify-between items-center'>
                <div className="flex items-center gap-3 mt-2">
                    <div className="bg-[#F0F5F0] w-18 h-18 p-2 rounded-xl flex items-center justify-center text-3xl">
                        {data.image}
                    </div>
                    <div className='items-center'>
                        <p className='text-3xl font-bold'>
                            {data.nameBn}
                        </p>
                        <p className='font-light text-lg'>
                            প্রতি {unitTranslations[data.unit]} · {data.categoryNameBn}
                        </p>
                        <p>
                            গতকালের তুলনায় আজ দাম <span className='font-bold'>{data.today >= data.yesterday ? `বেড়েছে` : `কমেছে`}</span> · {Math.abs(data.yesterday - data.today).toLocaleString('bn-BD')} টাকা।
                        </p>
                    </div>
                </div>
                <div className="bg-[#F0F5F0] w-25 h-30 p-2 rounded-xl flex flex-col items-center justify-center text-sm">
                    <p>
                        আজকের দাম
                    </p>
                    <p className='font-bold text-2xl'>
                        {data.today.toLocaleString('bn-BD')}
                    </p>
                    <p>
                        টাকা / {unitTranslations[data.unit]}
                    </p>
                    <p>
                        {data.change.pct === 0 ? (
                            <span className="text-black">— ০.০%</span>
                        ) : data.change.pct < 0 ? (
                            <span className="text-green-500">
                                ▼ {Math.abs(data.change.pct).toLocaleString('bn-BD')}%
                            </span>
                        ) : (
                            <span className="text-red-500">
                                ▲ {Math.abs(data.change.pct).toLocaleString('bn-BD')}%
                            </span>
                        )}
                    </p>
                </div>
            </div>
            <div className='w-full max-w-6xl mx-auto bg-white m-4 p-4 rounded-3xl flex flex-col'>
                <div>
                    <p className='font-bold text-xl my-2'>
                        দামের সারসংক্ষেপ
                    </p>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='border border-gray-300 rounded-2xl p-5'>
                        <p>সর্বনিম্ন দাম</p>
                        <p className='text-4xl font-bold text-[#1A9951]'>{(lowest).toLocaleString('bn-BD')} <span className='text-xl'>টাকা</span></p>
                        <p>সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className='border border-gray-300 rounded-2xl p-5'>
                        <p>সর্বাধিক দাম</p>
                        <p className='text-4xl font-bold text-red-500'>{(highest).toLocaleString('bn-BD')} <span className='text-xl'>টাকা</span></p>
                        <p>সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className='border border-gray-300 rounded-2xl p-5'>
                        <p>গড় দাম</p>
                        <p className='text-4xl font-bold text-[#1A9951]'>{(avg).toLocaleString('bn-BD')} <span className='text-xl'>টাকা</span></p>
                        <p>প্রতি কেজি-এর হিসাবে</p>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <p className='font-bold text-xl my-2'>
                        বাজারভিত্তিক আজকের দাম
                    </p>

                    <div className="overflow-hidden rounded-2xl border border-[#E1E9E1] bg-[#F0F5F0]">
                        <table className="w-full border-collapse text-left text-sm">
                            <thead>
                                <tr className="border-b border-[#DCE5DC] text-[#2c2e2c] bg-white">
                                    <th className="px-3 py-3 font-extrabold">
                                        বাজার
                                    </th>
                                    <th className="px-3 py-3 font-extrabold">
                                        বিভাগ
                                    </th>
                                    <th className="px-3 py-3 text-right font-extrabold">
                                        সর্বনিম্ন
                                    </th>
                                    <th className="px-3 py-3 text-right font-extrabold">
                                        সর্বাধিক
                                    </th>
                                    <th className="px-3 py-3 text-right font-extrabold">
                                        গড়
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.markets.map((market, index) => {
                                    const average = (market.min + market.max) / 2;

                                    return (
                                        <tr
                                            key={`${market.market}-${market.division}-${index}`}
                                            className={`border-b border-[#59665D] last:border-b-0 ${index % 2 === 0
                                                    ? "bg-[#F8FBF8]"
                                                    : "bg-[#F0F5F0]"
                                                }`}
                                        >
                                            <td className="px-3 py-3 font-medium text-[#29352D]">
                                                {market.market}
                                            </td>

                                            <td className="px-3 py-3 text-[#29352D]">
                                                {market.division}
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-right text-[#29352D]">
                                                {market.min.toLocaleString("bn-BD")} টাকা
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-right text-[#29352D]">
                                                {market.max.toLocaleString("bn-BD")} টাকা
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-[#29352D]">
                                                {average.toLocaleString("bn-BD", {
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 2,
                                                })} টাকা
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPageByID;