"use client"
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
    const session = useSession();
    return (
        <div className="relative top-0 left-0 mt-2 w-screen">
            <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-white shadow-md rounded-md lg:px-8 lg:py-3">
                <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                    <Link href="/" className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
                        bmb.
                    </Link>
                    <div className="hidden md:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <a href="#" className="flex items-center">
                                    Feed
                                </a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <a href="#" className="flex items-center">
                                    Travelers
                                </a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <a href="#" className="flex items-center">
                                    Support
                                </a>
                            </li>
                            {session.data == null ? "" :
                                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                    <a href="#" className="flex items-center">
                                        {session.data.user.name}
                                    </a>
                                </li>
                            }
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                {session.data == null ?
                                    <button onClick={() => signIn()} type="button" className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5">Sign In</button>
                                    : 
                                    <button onClick={() => signOut()} type="button" className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5">Logout</button>
                                }
                            </li>
                        </ul>
                    </div>
                    <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden" type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}