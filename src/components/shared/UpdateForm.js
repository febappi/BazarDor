'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const UpdateForm = ({ name }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newName = formData.get('name').trim()
        if(!newName){
            toast.error("Name is required");
            return;
        }
        setLoading(true)
        const { data, error } = await authClient.updateUser({
            name: newName
        });
        setLoading(false)
        if(data){
            toast.success("Information Updated Successfully")
            router.push('/my-profile')
        }
        if(error){
            toast.error(error.message)
        }
    }
    return (
        <form onSubmit={onSubmit} noValidate className='bg-white border border-gray-200 rounded-2xl p-6'>
            <p className='font-bold text-lg'>তথ্য</p>
            <div className='px-6 mt-6 mb-4'>
                <label className="label text-[#363f38] font-bold mb-2">নাম</label>
                <input type="text" name="name" defaultValue={name} className="input w-full rounded-lg" placeholder="যেমন: রহিম উদ্দিন" />
                <button type="submit" disabled={loading} className="btn w-full mt-4 bg-green-700 hover:bg-green-800 text-white rounded-lg">
                    {loading ? <span className="loading loading-spinner"></span> : 'তথ্য আপডেট করুন'}
                </button>
            </div>
        </form>
    );
};

export default UpdateForm;
