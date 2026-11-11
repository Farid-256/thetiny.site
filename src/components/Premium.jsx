import { TiTickOutline } from "react-icons/ti";

const Premium = () => {
    return (
        <section className="bg-gray-50 px-6 sm:px-10 md:px-20 py-12 flex flex-col lg:flex-row items-center gap-10 justify-between">
            <div className="flex flex-col gap-5 max-w-xl">
                <h3 className="text-blue-800 font-bold">PREMIRM</h3>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Unlock powerful tools for serious growth.</h2>

                <p className="text-gray-600">Go beyond basic shortening with a full suite of marketing and developer tools — custom branded links, UTM builders, deep analytics, QR codes, and a REST API for your apps.</p>

                <div className="flex flex-col gap-3">

                    <div className="flex items-center gap-1">
                        <div className="p-1 bg-blue-200 rounded-full"><TiTickOutline /></div>
                        <h5 className="text-lg sm:text-xl">Custom branded short links</h5>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="p-1 bg-blue-200 rounded-full"><TiTickOutline /></div>
                        <h5 className="text-lg sm:text-xl">Custom branded short links</h5>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="p-1 bg-blue-200 rounded-full"><TiTickOutline /></div>
                        <h5 className="text-lg sm:text-xl">Custom branded short links</h5>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="p-1 bg-blue-200 rounded-full"><TiTickOutline /></div>
                        <h5 className="text-lg sm:text-xl">Custom branded short links</h5>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="p-1 bg-blue-200 rounded-full"><TiTickOutline /></div>
                        <h5 className="text-lg sm:text-xl">Custom branded short links</h5>
                    </div>

                </div>
            </div>

            <div className="bg-blue-700 w-full max-w-xl lg:max-w-2xl p-6 sm:p-10 flex flex-col gap-5 rounded-2xl shadow-xl">
                <div className="flex justify-between items-center">
                    <h3 className="text-white font-bold">Link Analytics Dashboard</h3>
                    <div></div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-200 text-sm sm:text-base font-mono">shorturl.bd/ig9Kp2</h3>
                        <h3 className="text-white font-bold">1,247</h3>
                    </div>
                   
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-200 text-sm sm:text-base font-mono">shorturl.bd/yt3Nm8</h3>
                        <h3 className="text-white font-bold">589</h3>
                    </div>
                    <div dir="rtl" className="w-full h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[50%] rounded-full"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-200 text-sm sm:text-base font-mono">shorturl.bd/lk7Rv1</h3>
                        <h3 className="text-white font-bold">312</h3>
                    </div>
                    <div dir="rtl" className="w-full h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[70%] rounded-full"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-200 text-sm sm:text-base font-mono">shorturl.bd/fb2Wx9</h3>
                        <h3 className="text-white font-bold">198</h3>
                    </div>
                    <div dir="rtl" className="w-full h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[85%] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Premium;