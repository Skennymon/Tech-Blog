"use client";
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

function Navbar() {

    const[dropDown, setDropDown] = useState(false);
    
    return (
        <div className="justify-evenly items-center flex p-8 bg-linear-to-b from-background from-95% to-stone-600">
            <div className="justify-center items-center flex gap-7">
                <h2>Kenny Nguyen</h2>
                <Link href="/" className="hover:text-amber-700">Home</Link>
                <Link href="/about" className="hover:text-amber-700">About</Link>
                <a className="flex items-center justify-center" href="https://github.com/Skennymon" target="_blank">
                    <Image src="/github-logo.png" width={50} height={50} alt="Picture of github logo"/>
                    <h2 className="hover:text-amber-700">My Github</h2>
                </a>
            </div>

            <div className="flex flex-col items-end justify-center relative hover:bg-neutral-800">
                <button className="flex hover:cursor-pointer" onClick={() => setDropDown(!dropDown)}>
                    <Image src="/hamburger.svg" width={25} height={25} alt="Hamburger Icon"></Image>
                </button>
            
                <ul className={`flex flex-col border gap-4 w-56 absolute top-7 rounded-2xl items-start justify-center p-5 bg-gray-950 border-gray-600 shadow-gray-600 shadow transition-all duration-75 ease-in-out z-1 ${dropDown ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <h2 className="font-extrabold">Categories</h2>
                    <Link href="/">TBD</Link>
                    <Link href="/">TBD</Link>
                </ul>
            

            </div>
        </div>

    )
    
}

export default Navbar;

// flex flex-col border gap-2 w-56 absolute top-7 rounded-2xl items-center justify-center bg-gray-950 border-gray-600 shadow-gray-600 shadow transition-all delay-100