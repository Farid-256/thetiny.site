const CounterSection = () => {
    return (
        <section className="bg-[#6529c7] py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                {/* Item 1 */}
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">100K+</h2>
                    <p className="text-purple-200 text-sm sm:text-base font-medium mt-1">Links Created</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">1M+</h2>
                    <p className="text-purple-200 text-sm sm:text-base font-medium mt-1">Total Clicks</p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">180+</h2>
                    <p className="text-purple-200 text-sm sm:text-base font-medium mt-1">Countries</p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">99.9%</h2>
                    <p className="text-purple-200 text-sm sm:text-base font-medium mt-1">Uptime</p>
                </div>

            </div>
        </section>
    );
};

export default CounterSection;