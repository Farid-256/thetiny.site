'use client'

import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";

const ForgotPassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        console.log("OTP requested for:", email);
        e.target.reset()
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                {/* Back Link */}
                <div className="mb-6">
                    <Link 
                        href="/auth/login" 
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
                    >
                        <IoArrowBack className="text-base" />
                        Back
                    </Link>
                </div>

                {/* Header Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Forgot your password?
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Well email you a 6-digit code to reset your password.
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                <HiOutlineMail className="text-lg" />
                            </span>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50/30 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b21b6] focus:border-transparent transition-all text-sm text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer text-sm flex items-center justify-center gap-2"
                    >
                        Send OTP &rarr;
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ForgotPassword;