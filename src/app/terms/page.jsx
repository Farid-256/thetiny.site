const TermsAndConditions = () => {
    return (
        <section className="min-h-screen bg-white">
            {/* Top Header Section */}
            <div className="px-6 md:px-24 lg:px-48 py-12 md:py-16 bg-gray-50 border-b border-gray-100">
                <div className="flex flex-col gap-3">
                    <h4 className="text-blue-700 font-bold text-xs md:text-sm tracking-wide">LEGAL</h4>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Please read these Terms carefully before using Trimr.io. Last updated: <span className="font-semibold text-gray-700">October 24, 2026</span>
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 md:px-24 lg:px-48 py-10 md:py-14 flex flex-col gap-8 max-w-5xl">
                
                {/* Section Intro */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-blue-700 font-bold text-base md:text-lg">Terms Condition</h3>
                </div>

                {/* Cookies Subsection */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Cookies</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        We employ the use of cookies. By accessing Its-slbd.com, you agreed to use cookies in agreement with the ITS's Privacy Policy.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>
                </div>

                {/* License Subsection */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">License</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Unless otherwise stated, ITS and/or its licensors own the intellectual property rights for all material on Its-slbd.com. All intellectual property rights are reserved. You may access this from Its-slbd.com for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default TermsAndConditions;