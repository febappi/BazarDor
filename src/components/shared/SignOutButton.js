'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const SignOutButton = () => {
    const handleSignOut = async () => {
        const { error } = await authClient.signOut()
        if(error){
            toast.error(error.message)
            return;
        }
        window.location.href = "/?logout=success"
    }
    return (
        <button type="button" onClick={handleSignOut} className="btn bg-white border border-red-500 text-red-500 hover:bg-red-50 rounded-lg font-normal">
            ↩ সাইন আউট
        </button>
    );
};

export default SignOutButton;
