'use client'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";


const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())

        if (userData.password !== userData.confirmPassword) {
            toast.error('Password not match')
            return
        }
        else{
            toast.success('Account created successfully!');
            e.target.reset()
        }

    }
    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Create your free account
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Start shortening, tracking, and sharing your links. Already have an account? <Link className="font-bold text-blue-700" href={'/auth/login'}>Sign in</Link>
                    </p>

                    <div className="flex items-center my-4">
                        <div className="grow border-t border-gray-200"></div>
                        <span className="shrink mx-4 text-gray-400 text-sm">or</span>
                        <div className="grow border-t border-gray-200"></div>
                    </div>

                    <button
                        type="button"
                        className="w-full my-2 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition cursor-pointer mb-4"
                    >
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </button>
                </div>

                {/* Form UI */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. Farid Iqubal"
                            className="w-full px-4 py-2.5 bg-gray-50/30 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b21b6] focus:border-transparent transition-all text-sm text-gray-800 placeholder-gray-400"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            className="w-full px-4 py-2.5 bg-gray-50/30 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b21b6] focus:border-transparent transition-all text-sm text-gray-800 placeholder-gray-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            className="w-full px-4 py-2.5 bg-gray-50/30 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b21b6] focus:border-transparent transition-all text-sm text-gray-800 placeholder-gray-400"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2.5 bg-gray-50/30 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b21b6] focus:border-transparent transition-all text-sm text-gray-800 placeholder-gray-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg mt-2 cursor-pointer text-sm"
                    >
                        Create Free Account
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Register;