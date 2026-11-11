'use client'
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-white border-black border-t pt-16 pb-10 px-6 sm:px-10 md:px-20 text-gray-600">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-200">
                
                {/* Column 1: Logo, Description & Socials */}
                <div className="md:col-span-6 flex flex-col gap-5">
                    {/* Brand / Logo */}
                    <h2 className="text-xl font-extrabold tracking-widest text-gray-900 font-mono">
                        THETINY.SITE
                    </h2>

                    <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
                        The fastest way to shorten, track, and manage your URLs. Trusted by thousands of marketers, developers, and businesses across Bangladesh and beyond.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/md.farid.iqubal" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-[#5b21b6] flex items-center justify-center transition text-gray-700">
                            <FaFacebookF className="text-sm" />
                        </a>

                        <a href="https://www.linkedin.com/in/mdfaridiqubal/" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-[#5b21b6] flex items-center justify-center transition text-gray-700">
                            <FaLinkedinIn className="text-sm" />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-[#5b21b6] flex items-center justify-center transition text-gray-700">
                            <FaYoutube className="text-sm" />
                        </a>

                        <a href="https://www.whatsapp.com/" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-[#5b21b6] flex items-center justify-center transition text-gray-700">
                            <FaWhatsapp className="text-sm" />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                            <HiOutlineMail className="text-[#5b21b6] text-base" />
                            <span>banglapuzzle@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                            <FiPhoneCall className="text-[#5b21b6] text-base" />
                            <span>+880 1880-811048</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Product Links */}
                <div className="md:col-span-3 flex flex-col gap-3">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Product</h4>
                    <Link href="/features" className="text-sm text-gray-500">Features</Link>

                    <Link href="/pricing" className="text-sm text-gray-500">Pricing</Link>

                    <Link href="#" className="text-sm text-gray-500 ">API Docs</Link>

                    <Link href="#" className="text-sm text-gray-500">Browser Extension</Link>

                    <Link href="/reportURL" className="text-sm text-gray-500">Report Malicious URL</Link>
                </div>

                {/* Column 3: Company Links */}
                <div className="md:col-span-3 flex flex-col gap-3">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Company</h4>

                    <Link href="/about" className="text-sm text-gray-500 ">About Us</Link>

                    <Link href="/blog" className="text-sm text-gray-500 ">Blog</Link>

                    <Link href="/terms" className="text-sm text-gray-500">Terms & Conditions</Link>

                    <Link href="/privatePolicy" className="text-sm text-gray-500">Privacy Policy</Link>

                    <Link href="/cookiePolicy" className="text-sm text-gray-500">Cookie Policy</Link>

                    <Link href="/refundPolicy" className="text-sm text-gray-500">Refund Policy</Link>
                </div>

            </div>

            {/* Bottom Copyright & Secondary Links */}
            <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                <p>© 2026 <Link href='https://banglapuzzle.com/' target="_blank" className="text-blue-700 font-semibold">Bangla Puzzle Limited</Link>. All rights reserved.</p>
                
                <div className="flex items-center gap-6">
                    <Link href="#" className="hover:text-gray-700 transition">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-700 transition">Refund Policy</Link>
                    <Link href="#" className="hover:text-gray-700 transition">Cookie Policy</Link>
                    <Link href="#" className="hover:text-gray-700 transition">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;