import SignOutButton from '@/components/shared/SignOutButton';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const MyProfile = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) {
        redirect('/signin?redirect=/my-profile');
    }
    const user = session.user;
    return (
        <div className='max-w-3xl w-full mx-auto mt-8 mb-12 px-4'>
            <div className='mb-6'>
                <p className='font-extrabold text-3xl'>আমার প্রোফাইল</p>
                <p className='font-light mt-1'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div className="avatar">
                        <div className="w-20 rounded-xl">
                            <img alt="Profile Photo" src="https://github.com/febappi/portfolio_generated/blob/main/assets/bappi-illustration.png?raw=true" />
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>{user.name}</p>
                        <p className='text-gray-500 break-all'>{user.email}</p>
                    </div>
                </div>
                <SignOutButton />
            </div>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 mt-6'>
                <p className='font-bold text-lg'>তথ্য</p>
                <div className='sm:px-6 mt-6 mb-4'>
                    <label className="label text-[#363f38] font-bold mb-2">নাম</label>
                    <input type="text" defaultValue={user.name} readOnly className="input w-full rounded-lg" />
                    <Link href='/my-profile/update' className='btn w-full mt-4 bg-green-700 hover:bg-green-800 text-white rounded-lg'>
                        আপডেট
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
