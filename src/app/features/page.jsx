import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { IoQrCodeSharp } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { WiLightning } from "react-icons/wi";

const Features = () => {
    return (
        <section className="bg-white">
            {/* Header Section */}
            <div className="bg-gray-50 flex flex-col gap-3 items-center py-12 md:py-20 px-6 text-center">
                <h4 className="text-blue-700 font-bold text-xs md:text-sm tracking-wide">FEATURES</h4>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Everything you need to <span className="text-blue-700">manage links</span>.
                </h2>
                <h3 className="text-gray-500 text-sm md:text-xl max-w-3xl leading-relaxed">
                    Powerful tools for marketers, developers, and teams — packed into a fast, reliable, easy-to-use platform.
                </h3>
            </div>

            {/* Features Cards Grid Section */}
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card-1 */}
                    <div className="border border-gray-200 p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
                        <div>
                            <WiLightning className="text-4xl md:text-5xl text-blue-800" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                            Lightning Fast
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            Shorten URLs instantly with our optimized infrastructure
                        </p>
                    </div>

                    {/* Card-2 */}
                    <div className="border border-gray-200 p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
                        <div>
                            <TbBrandGoogleAnalytics className="text-4xl md:text-5xl text-blue-800" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                            Detailed Analytics
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            Track clicks, referrers, locations, and devices
                        </p>
                    </div>

                    {/* Card-3 */}
                    <div className="border border-gray-200 p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
                        <div>
                            <AiOutlineGlobal className="text-4xl md:text-5xl text-blue-800" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                            Global CDN
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            Fast redirects from anywhere in the world
                        </p>
                    </div>

                    {/* Card-4 */}
                    <div className="border border-gray-200 p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
                        <div>
                            <IoQrCodeSharp className="text-4xl md:text-5xl text-blue-800" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                            QR Codes
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            Generate QR codes for any shortened link
                        </p>
                    </div>

                    {/* Card-5 */}
                    <div className="border border-gray-200 p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
                        <div>
                            <GrSecure className="text-4xl md:text-5xl text-blue-800" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                            Secure
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            All links are encrypted and malware scanned
                        </p>
                    </div>

                    {/* Card-6 */}
                    <div className="border border-gray-200 p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
                        <div>
                            <FaRegClock className="text-4xl md:text-5xl text-blue-800" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                            Expiration Control
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            Set expiry dates or click limits
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA Box Section */}
            <section className="max-w-7xl mx-auto px-6 pb-16 bg-white">
                <div className="bg-[#6320ee] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white flex flex-col items-center justify-center shadow-xl shadow-purple-200">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                        Ready to get started?
                    </h2>

                    <p className="text-purple-100 text-sm md:text-base mb-8 max-w-lg">
                        Shorten your first link in seconds — no credit card required.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link
                            href="/"
                            className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition duration-200 text-sm flex items-center justify-center gap-2 shadow-sm"
                        >
                            Shorten a URL <FaArrowRight />
                        </Link>

                        <Link
                            href="/pricing"
                            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-purple-400 font-semibold px-6 py-3 rounded-xl transition duration-200 text-sm flex items-center justify-center"
                        >
                            See Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Features;