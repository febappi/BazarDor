'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SignOutButton = () => {
    const router = useRouter()
    const handleSignOut = async () => {
        const { error } = await authClient.signOut()
        if(error){
            toast.error(error.message)
            return;
        }
        toast.success("SignOut Successfull")
        router.push("/")
    }
    return (
        <button type="button" onClick={handleSignOut} className="btn bg-white border border-red-500 text-red-500 hover:bg-red-50 rounded-lg font-normal">
            ↩ সাইন আউট
        </button>
    );
};

export default SignOutButton;
