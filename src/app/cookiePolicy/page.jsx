const CookiePolicy = () => {
    return (
        <section className="min-h-screen bg-white">
            {/* Top Header Section */}
            <div className="px-6 md:px-24 lg:px-48 py-12 md:py-16 bg-red-50">
                <div className="flex flex-col gap-3">
                    <h4 className="text-blue-700 font-bold text-xs md:text-sm tracking-wide">LEGAL</h4>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900">Cookie Policy</h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        This Cookie Policy explains how Trimr.io uses cookies and similar technologies. Last updated: <span className="font-semibold text-gray-700">October 24, 2026</span>
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 md:px-24 lg:px-48 py-10 md:py-14 flex flex-col gap-5">
                <h4 className="text-blue-700 font-bold text-base md:text-lg">Cookie Policy</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Cookies are small pieces of data, stored in text files, that are stored on your computer or other device when websites are loaded in a browser. They are widely used to “remember” you and your preferences, either for a single visit (through a “session cookie”) or for multiple repeat visits (using a “persistent cookie”). They ensure a consistent and efficient experience for visitors, and perform essential functions such as allowing users to register and remain logged in. Cookies may be set by the site that you are visiting (known as “first party cookies”), or by third parties, such as those who serve content or provide advertising or analytics services on the website (“third party cookies”).
                </p>
            </div>
        </section>
    );
};

export default CookiePolicy;