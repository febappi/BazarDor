import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    const pr = product
    const unitTranslations = {
        'kg': 'কেজি',
        'litre': 'লিটার',
        'piece': 'পিস',
        'dozen': 'ডজন'
    };
    return (
        <div>
            <Link href={`/product/${pr.id}`}>
                <div className="card w-full bg-base-100 card-md shadow-sm hover:translate-y-1 rounded-3xl">
                    <div className="p-4">
                        <div className="flex items-center gap-3 mt-2">
                            <div className="flex justify-center items-center bg-[#F0F5F0] w-14 h-14 p-2 rounded-xl">
                                {pr.image}
                            </div>
                            <div className='items-center'>
                                <p className='text-2xl font-bold'>
                                    {pr.nameBn}
                                </p>
                                <p className='text-m'>প্রতি {unitTranslations[pr.unit]}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <div>
                                <p className='text-m'>আজকের দাম</p>
                                <p className='text-lg'><span className='font-bold text-2xl'>{pr.today.toLocaleString('bn-BD')}</span> টাকা</p>
                            </div>
                            <div>
                                <p className='inline-block rounded-full bg-[#E2F1E7] px-3 py-1 text-s text-[#05893e] font-bold mt-6'>
                                    {pr.change.pct === 0 ? (
                                        <span className="text-black">— ০.০%</span>
                                    ):pr.change.pct < 0 ? (
                                        <span className="text-green-500">
                                            ▼ {Math.abs(pr.change.pct).toLocaleString('bn-BD')}%
                                        </span>
                                    ):(
                                        <span className="text-red-500">
                                            ▲ {Math.abs(pr.change.pct).toLocaleString('bn-BD')}%
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;