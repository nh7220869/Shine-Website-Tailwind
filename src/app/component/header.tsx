

"use client";

import Link from 'next/link';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="bg-slate-900 p-4 w-full">
                <div className="flex items-center justify-between h-20 max-w-screen-xl mx-auto">
                    {/* Logo on the left side */}
                    <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-4 ml-20 rounded-full" />

                    {/* Centered title on larger screens, left-aligned on small screens */}
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 flex-1 text-center md:text-left animate-textShadow">
                        SHINE SHINE
                    </h1>

                    {/* Hamburger or Cross icon based on isOpen state for small screens */}
                    <button onClick={toggleMenu} className="text-gray-100 focus:outline-none md:hidden">
                        {isOpen ? (
                            // Cross icon when menu is open
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon when menu is closed
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    {/* Navigation links for medium and large screens */}
                    <nav className="hidden md:flex space-x-10 text-lg text-gray-100 mr-40">
                        <Link href="/" className="hover:text-sky-400">Home</Link>
                        <Link href="/services" className="hover:text-sky-400">Services</Link>
                        <Link href="/about" className="hover:text-sky-400">About Us</Link>
                        <Link href="/costomer" className="hover:text-sky-400">Reviews</Link>
                        <Link href="/contact" className="hover:text-sky-400">Contact Us</Link>
                    </nav>
                </div>

                {/* Mobile menu for small screens */}
                {isOpen && (
                    <nav className="flex flex-col items-center bg-slate-800 md:hidden space-y-4 py-4">
                        <Link href="/" className="text-gray-100 hover:text-sky-400">Home</Link>
                        <Link href="/services" className="text-gray-100 hover:text-sky-400">Services</Link>
                        <Link href="/about" className="text-gray-100 hover:text-sky-400">About Us</Link>
                        <Link href="/costomer" className="text-gray-100 hover:text-sky-400">Reviews</Link>
                        <Link href="/contact" className="text-gray-100 hover:text-sky-400">Contact Us</Link>
                    </nav>
                )}
            </header>
        </>
    );
}

export default Header;
