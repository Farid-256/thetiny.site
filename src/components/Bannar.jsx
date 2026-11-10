import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";

const Bannar = () => {
    return (
        <section className="bg-gray-50 flex flex-col items-center md:gap-5 py-12 px-4 md:px-10">

            {/* Banner badge */}
            <div className="flex justify-center">
                <div className="inline-flex items-center gap-1.5 border border-blue-200 rounded-full px-3 py-1 bg-blue-50 text-xs md:text-sm">
                    <FiTrendingUp className="text-blue-700 text-base" />
                    <span className="text-blue-700 font-medium">Trusted by thousands of users</span>
                </div>
            </div>

            {/* Banner heading text */}
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                    Shorten Your URL <br />
                    <span className="text-blue-600">in seconds</span>
                </h1>
            </div>

            {/* Banner subtitle */}
            <div className="text-center max-w-xl px-2">
                <p className="text-base sm:text-lg text-gray-500">
                    Create short, memorable links that you can share anywhere. Track every click with powerful analytics.
                </p>
            </div>

            {/* Banner box */}
            <div className="bg-white w-full max-w-3xl flex flex-col items-center justify-center rounded-2xl shadow-xl 
            border border-gray-100 p-6 sm:p-10 my-4">

                {/* Lock Icon Box */}
                <div className="text-center mb-4">
                    <div className="bg-purple-50 p-4 sm:p-5 rounded-full inline-flex justify-center items-center">
                        <CiLock className="text-[#5b21b6] text-4xl sm:text-5xl" />
                    </div>
                </div>

                {/* Box Headings */}
                <div className="text-center mb-6 px-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        Login to make your URL short
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                    <Link
                        href='/auth/login'
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5b21b6] hover:bg-[#4c1d95] px-6 py-3 text-white font-semibold rounded-xl shadow-md transition text-sm"
                    >
                        <CiLock className="text-xl" /> Login to Make URL
                    </Link>

                    <Link
                        href='/auth/register'
                        className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3 text-[#5b21b6] font-semibold rounded-xl border-2 border-[#5b21b6] hover:bg-purple-50/50 transition text-sm"
                    >
                        Sign Up Free <FaArrowRightLong />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Bannar;