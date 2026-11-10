import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TiTickOutline } from 'react-icons/ti';

const Pricing = () => {
    return (
        <section className='px-6 sm:px-10 md:px-20 py-16 bg-white'>

            {/* Section Header */}
            <div className='flex flex-col justify-center items-center gap-3 text-center mb-14'>
                <h3 className='text-[#5b21b6] font-bold tracking-widest text-sm'>PRICING</h3>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-black text-gray-900'>Simple, transparent pricing.</h1>
                <p className='text-gray-500 text-base sm:text-xl'>No hidden fees. Start free, scale when you are ready.</p>
            </div>

            {/* Pricing Cards Container */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto'>
                
                {/* Card-1: Free */}
                <div className='bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-gray-500 font-bold tracking-wide text-sm'>FREE</h4>
                        <div className='flex items-baseline gap-1'>
                            <span className='font-black text-4xl sm:text-5xl text-gray-900'>$0</span> 
                            <span className='text-sm text-gray-400 font-medium'>/forever</span>
                        </div>
                        <p className='text-gray-500 text-sm sm:text-base'>Great for individuals and casual use.</p>

                        <div className="flex flex-col gap-3.5 mt-6">
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Unlimited link shortening</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Basic click counter</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">HTTPS security</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">QR code (basic)</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Cross-device support</h5>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <Link href='/auth/login' className='bg-[#5b21b6] hover:bg-[#4c1d95] font-semibold text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm shadow-md'>
                            Get Started Free <FaArrowRightLong />
                        </Link>
                    </div>
                </div>

                {/* Card-2: Pro (Highlighted / Popular) */}
                <div className='bg-blue-700 text-white border border-[#5b21b6] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative transform lg:-translate-y-2'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-purple-200 font-bold tracking-wide text-sm'>PRO</h4>
                        <div className='flex items-baseline gap-1'>
                            <span className='font-black text-4xl sm:text-5xl text-white'>$9</span> 
                            <span className='text-sm text-purple-200 font-medium'>/per month</span>
                        </div>
                        <p className='text-purple-100 text-sm sm:text-base'>For creators, marketers, and power users.</p>

                        <div className="flex flex-col gap-3.5 mt-6">
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-white/20 text-white rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-purple-50 font-medium">Everything in Free</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-white/20 text-white rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-purple-50 font-medium">Custom short links</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-white/20 text-white rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-purple-50 font-medium">Advanced analytics</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-white/20 text-white rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-purple-50 font-medium">UTM builder</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-white/20 text-white rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-purple-50 font-medium">QR code (custom)</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-white/20 text-white rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-purple-50 font-medium">Browser extension</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-white/20 text-white rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-purple-50 font-medium">Priority support</h5>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <Link href='/auth/login' className='bg-white hover:bg-purple-50 font-semibold text-[#5b21b6] px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm shadow-md'>
                            Start 14-Day Trial <FaArrowRightLong />
                        </Link>
                    </div>
                </div>

                {/* Card-3: Business */}
                <div className='bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-gray-500 font-bold tracking-wide text-sm'>BUSINESS</h4>
                        <div className='flex items-baseline gap-1'>
                            <span className='font-black text-4xl sm:text-5xl text-gray-900'>$29</span> 
                            <span className='text-sm text-gray-400 font-medium'>/per month</span>
                        </div>
                        <p className='text-gray-500 text-sm sm:text-base'>For teams and growing companies.</p>

                        <div className="flex flex-col gap-3.5 mt-6">
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Everything in Pro</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Team dashboard</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Developer API</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Bulk link creation</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">White-label domain</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">App integrations</h5>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="p-1 bg-purple-100 text-[#5b21b6] rounded-full"><TiTickOutline /></div>
                                <h5 className="text-sm sm:text-base text-gray-700 font-medium">Dedicated support</h5>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <Link href='/auth/login' className='bg-[#5b21b6] hover:bg-[#4c1d95] font-semibold text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm shadow-md'>
                            Subscribe Now <FaArrowRightLong />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;