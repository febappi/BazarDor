'use client'
import SocialLogin from '@/components/shared/SocialLogin';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SignIn = () => {
    const router = useRouter()
    const onSubmit = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            toast.error("Please enter a valid email");
            return;
        }
        if (!user.password) {
            toast.error("Password is required");
            return;
        }
        const redirectTo = new URLSearchParams(window.location.search).get('redirect')
        const { data, error } = await authClient.signIn.email({
                email: user.email,
                password: user.password
        });
        if(data){
            toast.success("Sign In Successfull")
            router.push(redirectTo && redirectTo.startsWith('/') && !redirectTo.startsWith('//') ? redirectTo : "/")
        }
        if(error){
            toast.error(error.message)
        }

    }
    return (
        <div className='max-w-6xl mx-auto mb-12'>
            <div className='flex flex-col justify-center items-center mt-8 gap-2 mb-5'>
                <p className='font-extrabold text-3xl'>সাইন ইন</p>
                <p className='text-lg font-light'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>
            <div className='flex flex-col items-center'>
                <form onSubmit={onSubmit} noValidate>
                <fieldset className="fieldset bg-white border-base-300 rounded-2xl w-full max-w-md border p-6 font-extrabold text-base">
                    <label className="label text-[#363f38] mt-2">ইমেইল</label>
                    <input type="email" name="email" className="input w-full rounded-lg" placeholder="you@example.com" />
                    <label className="label text-[#363f38] mt-2">পাসওয়ার্ড</label>
                    <input type="password" name="password" className="input w-full rounded-lg" placeholder="কমপক্ষে ৮ অক্ষর" />
                    <button type="submit" className="btn w-full mt-4 bg-green-700 hover:bg-green-800 text-white rounded-xl">সাইন ইন</button>
                    <div className="divider font-light text-sm">অথবা</div>
                    <SocialLogin/>
                    <p className='text-center font-light mt-3'>
                        অ্যাকাউন্ট নেই? <Link href="/sign-up" className='text-green-700 hover:underline'>সাইন আপ করুন</Link>
                    </p>
                </fieldset>
                </form>
                <Link href="/" className='mt-6 text-gray-500 font-light hover:text-green-700'>
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default SignIn;