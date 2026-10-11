import UpdateForm from '@/components/shared/UpdateForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const UpdateProfile = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if(!session){
        redirect('/sign-in?redirect=/my-profile/update');
    }
    return (
        <div className='max-w-3xl w-full mx-auto mt-8 mb-12 px-4'>
            <div className='mb-6'>
                <p className='font-extrabold text-3xl'>তথ্য আপডেট করুন</p>
                <p className='font-light mt-1'>আপনার নাম পরিবর্তন করে সেভ করুন।</p>
            </div>
            <UpdateForm name={session.user.name} />
        </div>
    );
};

export default UpdateProfile;
