import Link from 'next/link';
import { CiNoWaitingSign } from 'react-icons/ci';
import { FaLock } from 'react-icons/fa6';
import { MdPolicy } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 w-full">
                
                {/* Header Section */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#5b21b6] text-xs font-semibold mb-4">
                        <span className='text-4xl'><MdPolicy /></span> LEGAL
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg mb-4">
                        We believe privacy is a right, not a feature. This policy explains clearly and honestly how we handle your data.
                    </p>
                    <div className="text-xs text-gray-500 flex gap-4">
                        <span>Last updated: <strong className="text-gray-700">October 24, 2026</strong></span>
                        <span>•</span>
                        <span>Effective: <strong className="text-gray-700">October 24, 2026</strong></span>
                    </div>
                </div>

                {/* TL;DR / Short Version Box */}
                <div className="bg-[#f3f0ff] border border-purple-100 rounded-2xl p-6 mb-12">
                    <h3 className="text-xs font-bold tracking-wider text-[#5b21b6] uppercase mb-4">
                        TL;DR — THE SHORT VERSION
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
                        <div className="flex items-start gap-3">
                            <span className="text-red-500 font-bold text-lg"><CiNoWaitingSign className='text-2xl'/></span>
                            <p>We never sell your personal data to third parties.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-blue-500 font-bold text-lg"><SiSimpleanalytics /></span>
                            <p>We collect click data to power your analytics dashboard.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-500 font-bold text-lg"><FaLock /></span>
                            <p>All data is encrypted in transit and at rest.</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Content Section */}
                <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    <h2 className="text-xl font-bold text-gray-900 pt-2">Privacy Policy Details</h2>
                    <p>
                        The exact contents of a privacy policy will depend upon the applicable law and may need to address requirements across geographical boundaries and legal jurisdictions. Most countries have their own legislation and guidelines of who is covered, what information can be collected, and what it can be used for.
                    </p>
                    <p>
                        In general, data protection laws cover the private sector as well as the public sector. Their privacy laws apply not only to government operations but also to private enterprises and commercial transactions.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;