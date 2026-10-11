'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const NavbarClient = () => {
    const router = useRouter()
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if(params.get('login') === 'success'){
            toast.success("Sign In Successfull", { id: 'login-success' })
            router.replace(window.location.pathname)
        }
        if(params.get('logout') === 'success'){
            toast.success("SignOut Successfull", { id: 'logout-success' })
            router.replace(window.location.pathname)
        }
    }, [])
    const handleSignOut = async () =>{
        const { error } = await authClient.signOut()
        if(error){
            toast.error(error.message)
            return;
        }
        window.location.href = "/?logout=success"
    }
    return (
        <div className='flex item-center gap-2'>
            {
                isPending ?
                    <div className="skeleton h-10 w-40"></div> :
                user ?
                    <div>
                        <div className="avatar h-10 w-10 mr-2 sm:mr-5">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                <img alt="Tailwind-CSS-Avatar-component" src="https://github.com/febappi/portfolio_generated/blob/main/assets/bappi-illustration.png?raw=true" />
                            </div>
                        </div>
                        <details className="dropdown dropdown-end">
                            <summary className="btn btn-sm sm:btn-md border-0 text-base sm:text-xl list-none bg-white">
                                {user?.name}
                            </summary>

                            <div
                                tabIndex={-1}
                                className="dropdown-content z-50 mt-3 w-80 rounded-2xl border-2 border-[#dfe8df] bg-[#fbfdfb] p-8"
                            >
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xl font-bold tracking-tight text-[#202a23]">
                                        {user?.name}
                                    </h2>
                                    <p className="text-xl text-gray-500 break-all">
                                        {user?.email}
                                    </p>
                                </div>

                                <div className="mt-7 flex flex-col gap-3">
                                    <Link
                                        href="/my-profile"
                                        onClick={(e) => e.currentTarget.closest('details').open = false}
                                        className="flex items-center gap-3 rounded-xl px-2 py-2 text-xl text-[#202a23]"
                                    >
                                        <span className="text-xl">👤</span>
                                        <span>আমার প্রোফাইল</span>
                                    </Link>

                                    <button
                                        onClick={handleSignOut}
                                        className="flex items-center gap-3 rounded-xl px-2 py-2 text-xl text-red-500 cursor-pointer"
                                    >
                                        <span className="text-xl">↩</span>
                                        <span>সাইন আউট</span>
                                    </button>
                                </div>
                            </div>
                        </details>
                    </div> :
                    <div className='flex flex-row gap-2'>
                        <Link href="/sign-in">
                            <button className="btn btn-sm sm:btn-md border-0 rounded-xl sm:w-25">সাইন ইন</button>
                        </Link>
                        <Link href="/sign-up">
                            <button className="btn btn-sm sm:btn-md bg-green-600 rounded-xl sm:w-25 text-white hover:bg-green-800">সাইন আপ</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default NavbarClient;