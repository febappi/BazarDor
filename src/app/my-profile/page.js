import SignOutButton from '@/components/shared/SignOutButton';
import UpdateProfile from '@/components/shared/UpdateProfile';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const MyProfile = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) {
        redirect('/sign-in?redirect=/my-profile');
    }
    const user = session.user;
    return (
        <div className='max-w-3xl w-full mx-auto mt-8 mb-12 px-4'>
            <div className='mb-6'>
                <p className='font-extrabold text-3xl'>আমার প্রোফাইল</p>
                <p className='font-light mt-1'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 flex justify-between items-center'>
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
            <UpdateProfile/>
        </div>
    );
};

export default MyProfile;
