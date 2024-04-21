import { useState } from 'react';

export const AppBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div className="border-b bg-white-200 border-gray-200">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            <span className="text-orange-400">Cyber</span> <span className="text-stone-900">Saarthi</span>
                        </span>
                    </a>
                    <div className="md:hidden">
                        <button onClick={toggleNav} className="p-2 rounded-md text-gray-600 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all delay-80">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isNavOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/Home" className="block py-2 px-3 text-white bg-orange-400 rounded md:bg-transparent md:text-orange-400 md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/Questionnaire" className="block py-2 px-3 text-gray-900 rounded hover:text-orange-400 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 ">Questionnaire</a>
                            </li>
                            <li>
                                <a href="/Guide" className="block py-2 px-3 text-gray-900 rounded hover:text-orange-400 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 ">Guide for Online Safety</a>
                            </li>
                            <li>
                                <a href="/Helper" className="block py-2 px-3 text-gray-900 rounded hover:text-orange-400 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 ">1-1 Guide</a>
                            </li>
                            <li>
                                <a href="/Testimonials" className="block py-2 px-3 text-gray-900 rounded hover:text-orange-400 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 ">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
