'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const NavbarClient = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user)
    const handleSignOut = async () =>{
        await authClient.signOut()
    }
    return (
        <div className='flex item-center gap-2'>
            {
                user ?
                    <div>
                        <div className="avatar h-10 w-10 mr-5">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                <img alt="Tailwind-CSS-Avatar-component" src="https://github.com/febappi/portfolio_generated/blob/main/assets/bappi-illustration.png?raw=true" />
                            </div>
                        </div>
                        <details className="dropdown dropdown-end">
                            <summary className="btn border-0 text-xl list-none">
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
                                        href="/"
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
                    <div>
                        <Link href="/sign-in">
                            <button className="btn border-0 rounded-xl w-25">সাইন ইন</button>
                        </Link>
                        <Link href="/sign-up">
                            <button className="btn bg-green-600 rounded-xl w-25 text-white hover:bg-green-800">সাইন আপ</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default NavbarClient;