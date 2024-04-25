import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-sky-600">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-white">
                            <img className='h-14 w-auto' src="/logo.webp" alt="how to abroad"/>
                        </div>
                        <div className="hidden md:block">
                            {/* Desktop Menu */}
                            <div className="ml-10 flex items-baseline space-x-4 text-lg">
                                <a href="/" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Home</a>
                                <a href="/search" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Search Course</a>
                                <a href="/login" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Login</a>
                                <a href="/portal" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Portal</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile Menu Button */}
                        <button onClick={toggleMobileMenu} className="text-white hover:bg-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-500`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className="text-white block hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="/search" className="text-white block hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium">Search Course</a>
                    <a href="/login" className="text-white block hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium">Login</a>
                    <a href="/portal" className="text-white block hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium">Portal</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
