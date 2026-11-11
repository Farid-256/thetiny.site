import { RiRefund2Line } from "react-icons/ri";

const RefundPolicy = () => {
    return (
        <section className="min-h-screen bg-white">
            {/* Top Header Section */}
            <div className="px-6 md:px-24 lg:px-48 py-12 md:py-16 bg-red-50">
                <div className="flex flex-col gap-3">
                    <h4 className="text-blue-700 font-bold text-xs md:text-sm tracking-wide flex items-center gap-0.5"><RiRefund2Line className="text-3xl" /> LEGAL</h4>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900">Refund Policy</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 md:px-24 lg:px-48 py-10 md:py-14 flex flex-col gap-3">
                <h4 className="text-gray-500 font-bold text-base md:text-lg">Refund Policy</h4>
                <p className="text-gray-500 text-sm md:text-base">
                    Last updated: <span className="font-semibold text-gray-700">November 11, 2026</span>
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We want you to be completely satisfied with our service. This policy explains how refunds work for paid plans.
                </p>
            </div>
        </section>
    );
};

export default RefundPolicy;