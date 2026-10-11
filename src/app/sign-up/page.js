'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import SocialLogin from '@/components/shared/SocialLogin';
const SignUp = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        if (!user.name.trim()) {
            toast.error("Name is required");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            toast.error("Please enter a valid email");
            return;
        }
        if (user.password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }
        if (user.password !== user.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        setLoading(true)
        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password
        });
        setLoading(false)
        if(data){
            toast.success("SignUp Successfull")
            router.push("/")
        }
        if (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='max-w-6xl mx-auto mb-12 px-4'>
            <div className='flex flex-col justify-center items-center mt-8 gap-2 mb-5'>
                <p className='font-extrabold text-3xl'>অ্যাকাউন্ট তৈরি করুন</p>
                <p className='text-lg font-light'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </div>
            <div className='flex flex-col items-center'>
                <form onSubmit={onSubmit} noValidate className='w-full max-w-md'>
                    <fieldset className="fieldset bg-white border-base-300 rounded-2xl w-full max-w-md border p-6 font-extrabold text-base">
                        <label className="label text-[#363f38]">নাম</label>
                        <input type="name" name="name" className="input w-full rounded-lg" placeholder="যেমন: রহিম উদ্দিন" />
                        <label className="label text-[#363f38] mt-2">ইমেইল</label>
                        <input type="email" name="email" className="input w-full rounded-lg" placeholder="you@example.com" />
                        <label className="label text-[#363f38] mt-2">পাসওয়ার্ড</label>
                        <input type="password" name="password" className="input w-full rounded-lg" placeholder="কমপক্ষে ৮ অক্ষর" />
                        <label className="label text-[#363f38] mt-2">পাসওয়ার্ড নিশ্চিত করুন</label>
                        <input type="password" name="confirmPassword" className="input w-full rounded-lg" placeholder="আবার লিখুন" />
                        <button className="btn w-full mt-4 bg-green-700 hover:bg-green-800 text-white rounded-xl" type="submit" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : 'অ্যাকাউন্ট তৈরি করুন'}
                        </button>
                        <div className="divider font-light text-sm">অথবা</div>
                        <SocialLogin/>
                        <p className='text-center font-light mt-3'>
                            অ্যাকাউন্ট আছে? <Link href="/sign-in" className='text-green-700 hover:underline'>সাইন ইন করুন</Link>
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

export default SignUp;