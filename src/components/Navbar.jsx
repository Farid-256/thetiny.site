'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const pathName = usePathname();
    const [manu, setManu] = useState(false);

    const handleManu = () => {
        setManu(!manu);
    }

    const handleManuClose = () =>{
        setManu(false)
    }

    return (
        <>
            <section className="px-6 md:px-20 py-3 flex justify-between items-center border-black border-b relative bg-white">
                {/* Logo */}
                <div>
                    <Image src='/assets/navLogo.jpg' height='100' width='180' alt="logo"></Image>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href='/' className={`font-semibold ${pathName === '/' ? 'text-blue-600 border-blue-600 border-b-2 pb-1' : 'text-gray-500'}`}>
                        Home
                    </Link>
                    <Link href='/about' className={`font-semibold ${pathName === '/about' ? 'text-blue-600 border-blue-600 border-b-2 pb-1' : 'text-gray-500'}`}>
                        About
                    </Link>
                    <Link href='/blog' className={`font-semibold ${pathName === '/blog' ? 'text-blue-600 border-blue-600 border-b-2 pb-1' : 'text-gray-500'}`}>
                        Blog
                    </Link>
                    <Link href='/terms' className={`font-semibold ${pathName === '/terms' ? 'text-blue-600 border-blue-600 border-b-2 pb-1' : 'text-gray-500'}`}>
                        Terms
                    </Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-3 items-center">
                    <Link href='/auth/login' className="bg-white px-5 py-2 font-bold rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Log In
                    </Link>
                    <Link href='/auth/register' className="bg-[#5b21b6] px-5 py-2 text-white font-bold rounded-xl hover:bg-[#4c1d95]">
                        Get Started Free
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="flex md:hidden">
                    {
                        manu === false ? (
                            <IoReorderThreeOutline onClick={handleManu} className="text-3xl cursor-pointer" />
                        ) : (
                            <RxCross1 onClick={handleManu} className="text-3xl cursor-pointer" />
                        )
                    }
                </div>
            </section>

            {/* Mobile Dropdown Menu */}
            {
                manu === true && (
                    <div className="md:hidden flex flex-col gap-5 px-6 py-6 bg-white border-b border-gray-200 shadow-lg absolute w-full z-50">
                        <nav className="flex flex-col gap-4">
                            <Link href='/' onClick={handleManuClose} className={`font-semibold text-lg ${pathName === '/' ? 'text-blue-600' : 'text-gray-600'}`}>
                                Home
                            </Link>
                            <Link href='/about' onClick={handleManuClose} className={`font-semibold text-lg ${pathName === '/about' ? 'text-blue-600' : 'text-gray-600'}`}>
                                About
                            </Link>
                            <Link href='/blog' onClick={handleManuClose} className={`font-semibold text-lg ${pathName === '/blog' ? 'text-blue-600' : 'text-gray-600'}`}>
                                Blog
                            </Link>
                            <Link href='/terms' onClick={handleManuClose} className={`font-semibold text-lg ${pathName === '/terms' ? 'text-blue-600' : 'text-gray-600'}`}>
                                Terms
                            </Link>
                        </nav>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col gap-3 pt-2">
                            <Link href={'/auth/login'} onClick={() => setManu(false)} className="bg-white text-center py-2.5 font-bold rounded-xl border border-gray-300 text-gray-700">
                                Log In
                            </Link>
                            <Link href={'/auth/registation'} onClick={() => setManu(false)} className="bg-[#5b21b6] text-center py-2.5 text-white font-bold rounded-xl">
                                Get Started Free
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Navbar;