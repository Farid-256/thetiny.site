import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { IoIosStarOutline } from "react-icons/io";
import { IoQrCodeSharp } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { WiLightning } from "react-icons/wi";


const Testimonials = () => {
    return (
        <section className="bg-gray-50 px-6 sm:px-10 md:px-20 py-16">
            <div className="flex flex-col items-center gap-3 text-center">
                <h3 className="text-sm sm:text-xl text-gray-400 font-semibold tracking-wider">TESTIMONIALS</h3>
                <h1 className="text-2xl sm:text-4xl font-black">Loved by 80,000+ users worldwide.</h1>
            </div>

            {/* Card */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 sm:mt-20 gap-6">
                <div className="border border-gray-300 p-5 bg-white rounded-2xl flex flex-col gap-5 w-full max-w-xl">
                    <div className="flex items-center">
                        <IoIosStarOutline className="text-blue-800 text-lg" />
                        <IoIosStarOutline className="text-blue-800 text-lg" />
                        <IoIosStarOutline className="text-blue-800 text-lg" />
                        <IoIosStarOutline className="text-blue-800 text-lg" />
                        <IoIosStarOutline className="text-blue-800 text-lg" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium">
                        &quot;A good platform for Link management.&quot;
                    </h3>

                    <div>
                        <h3 className="font-bold">Nadim Majid</h3>
                        <h3 className="text-gray-500 text-sm">User</h3>
                    </div>
                </div>

                {/* Empty div for layout balance on large screen */}
                <div className="hidden md:block w-full max-w-xl"></div>
            </div>

            <section className="mt-20 sm:mt-30">
                <div className="flex flex-col gap-4 items-center text-center">
                    <h1 className="text-2xl sm:text-4xl font-black">Why Choose Our Platform?</h1>
                    <h3 className="text-gray-400 text-sm sm:text-base">Everything you need to manage and track your links</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 sm:my-15">
                    {/* Card-1 */}
                    <div className="border border-gray-300 p-5 bg-white rounded-2xl flex flex-col gap-3">
                        <div>
                            <WiLightning className="text-5xl text-blue-800" />
                        </div>

                        <h3 className="text-xl font-semibold">
                            Lightning Fast
                        </h3>

                        <div>
                            <h3 className="text-gray-400">Shorten URLs instantly with our optimized infrastructure</h3>
                        </div>
                    </div>

                    {/* Card-2 */}
                    <div className="border border-gray-300 p-5 bg-white rounded-2xl flex flex-col gap-5">
                        <div>
                            <TbBrandGoogleAnalytics className="text-5xl text-blue-800" />
                        </div>

                        <h3 className="text-xl font-semibold">
                            Detailed Analytics
                        </h3>

                        <div>
                            <h3 className="text-gray-400">Track clicks, referrers, locations, and devices</h3>
                        </div>
                    </div>

                    {/* Card-3 */}
                    <div className="border border-gray-300 p-5 bg-white rounded-2xl flex flex-col gap-5">
                        <div>
                            <AiOutlineGlobal className="text-5xl text-blue-800" />
                        </div>

                        <h3 className="text-xl font-semibold">
                            Global CDN
                        </h3>

                        <div>
                            <h3 className="text-gray-400">Fast redirects from anywhere in the world</h3>
                        </div>
                    </div>

                    {/* Card-4 */}
                    <div className="border border-gray-300 p-5 bg-white rounded-2xl flex flex-col gap-5">
                        <div>
                            <IoQrCodeSharp className="text-5xl text-blue-800" />
                        </div>

                        <h3 className="text-xl font-semibold">
                            QR Codes
                        </h3>

                        <div>
                            <h3 className="text-gray-400">Generate QR codes for any shortened link</h3>
                        </div>
                    </div>

                    {/* Card-5 */}
                    <div className="border border-gray-300 p-5 bg-white rounded-2xl flex flex-col gap-5">
                        <div>
                            <GrSecure className="text-5xl text-blue-800" />
                        </div>

                        <h3 className="text-xl font-semibold">
                            Secure
                        </h3>

                        <div>
                            <h3 className="text-gray-400">All links are encrypted and malware scanned</h3>
                        </div>
                    </div>

                    {/* Card-6 */}
                    <div className="border border-gray-300 p-5 bg-white rounded-2xl flex flex-col gap-5">
                        <div>
                            <FaRegClock className="text-5xl text-blue-800" />
                        </div>

                        <h3 className="text-xl font-semibold">
                            Expiration Control
                        </h3>

                        <div>
                            <h3 className="text-gray-400">Set expiry dates or click limits</h3>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Testimonials;