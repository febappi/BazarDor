import { apiFetch } from '@/lib/api';
import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeList = async () => {
    const data = await apiFetch('/products');
    if(!data){
        return <p>Failed to load data from API.</p>;
    }
    const priceUpdate = data.filter(n => n.change.pct !== 0);
    const unitTranslations = {
        'kg': 'কেজি',
        'litre': 'লিটার',
        'piece': 'পিস',
        'dozen': 'ডজন'
    };
    return (
        <Marquee>
            <div className='flex gap-2'>
                {priceUpdate.map(n =>
                    <div key={n.id} className='flex items-centern border-r border-gray-300 py-2'>
                        <span className='ml-2'>{n.image}</span>
                        <span className='ml-1 font-bold'>{n.nameBn}</span>
                        <span className='ml-1'>{n.today.toLocaleString('bn-BD')}</span>
                        <span className='ml-1'>টাকা/{unitTranslations[n.unit]}</span>
                        <span className='ml-1 mr-3'>
                            {n.change.pct < 0 ?
                                <span className='text-green-500'>▼ {Math.abs(n.change.pct).toLocaleString('bn-BD')}%</span> :
                                <span className='text-red-500'>▲ {Math.abs(n.change.pct).toLocaleString('bn-BD')}%</span>
                            }
                        </span>
                    </div>
                )}
            </div>
        </Marquee>
    );
};

export default MarqueeList;