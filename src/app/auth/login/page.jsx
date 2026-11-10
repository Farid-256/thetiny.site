'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";




const Login = () => {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        if(userData){
            router.push('/')
            e.target.reset()
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Sign in to your account</h2>
                <p className="text-center text-gray-500 mb-6">Enter your email and password to continue. Dont have an account? <Link href='/auth/register' className="font-bold text-blue-700">Sign up free</Link></p>

                <button
                    type="button"
                    className="w-full my-2 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition cursor-pointer mb-4"
                >
                    <FcGoogle className="text-2xl" />
                    Continue with Google
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-xs text-gray-400 font-medium uppercase">Or login with email</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="e.g. farid@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-end">
                        <Link href='/forgotPassword' className="text-blue-800 font-bold">Forgot Password?</Link>
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition mt-2 cursor-pointer"
                    >
                        Sign in
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;