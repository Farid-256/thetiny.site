'use client'

import { useState } from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { IoQrCodeOutline, IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { QRCodeSVG } from "qrcode.react";

const Links = () => {
    const popularLinks = [
        {
            id: 1,
            shortUrl: "https://thetiny.site/ARLsEN",
            originalUrl: "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...",
            clicks: "420 clicks"
        },
        {
            id: 2,
            shortUrl: "https://thetiny.site/BArxCj",
            originalUrl: "https://leena45945.softr.app",
            clicks: "269 clicks"
        },
        {
            id: 3,
            shortUrl: "https://thetiny.site/kLrnXd",
            originalUrl: "https://supportersframe.com/blog/supportersframecom-introduces-qr-code...",
            clicks: "85 clicks"
        },
        {
            id: 4,
            shortUrl: "https://thetiny.site/qQNTp0",
            originalUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf3aBliGp4uunkBsQVLy_zLWcwkWh...",
            clicks: "64 clicks"
        },
        {
            id: 5,
            shortUrl: "https://thetiny.site/k4DiP8",
            originalUrl: "https://solverfirm.com/",
            clicks: "33 clicks"
        }
    ];

    // State for Copy Status & Modal
    const [copiedId, setCopiedId] = useState(null);
    const [selectedQrUrl, setSelectedQrUrl] = useState(null);

    // Copy Handler
    const handleCopy = (id, url) => {
        navigator.clipboard.writeText(url);
        setCopiedId(id);

        setTimeout(() => {
            setCopiedId(null);
        }, 4000);
    };

    // QR Download Handler
    const downloadQRCode = () => {
        const svg = document.getElementById("qr-code-svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");

            const downloadLink = document.createElement("a");
            downloadLink.href = pngFile;
            downloadLink.download = `QR_Code_${Date.now()}.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };

        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <section className="py-16 px-4 sm:px-6 bg-white relative">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col justify-center items-center gap-2 mb-10 text-center">
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Most Popular Links</h3>
                    <p className="text-sm sm:text-base text-gray-500">Check out the most clicked links on our platform</p>
                </div>

                {/* Links Cards Container */}
                <div className="space-y-4">
                    {popularLinks.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 border border-gray-200/80 hover:border-purple-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                        >
                            {/* URL Text Info */}
                            <div className="space-y-1 overflow-hidden">
                                <a
                                    href={item.shortUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg block truncate"
                                >
                                    {item.shortUrl}
                                </a>
                                <p className="text-xs sm:text-sm text-gray-400 truncate max-w-md">
                                    {item.originalUrl}
                                </p>
                            </div>

                            {/* Action Buttons & Clicks Counter */}
                            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                                {/* Clicks Badge */}
                                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                    <HiOutlineCursorClick className="text-gray-400 text-base" />
                                    <span>{item.clicks}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    {/* Copy Button */}
                                    <button
                                        onClick={() => handleCopy(item.id, item.shortUrl)}
                                        className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm cursor-pointer ${copiedId === item.id
                                                ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                                                : "bg-[#5b21b6] hover:bg-[#4c1d95] text-white"
                                            }`}
                                    >
                                        {copiedId === item.id ? (
                                            <>
                                                <FaCheck className="text-sm" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <FaRegCopy className="text-sm" />
                                                Copy
                                            </>
                                        )}
                                    </button>

                                    {/* QR Button */}
                                    <button
                                        onClick={() => setSelectedQrUrl(item.shortUrl)}
                                        className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl transition border border-gray-200 cursor-pointer"
                                    >
                                        <IoQrCodeOutline className="text-sm text-gray-600" />
                                        QR
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/* QR Code Pop-up */}
            {selectedQrUrl && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative border border-gray-100 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-150">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedQrUrl(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 p-1.5 rounded-full transition cursor-pointer"
                        >
                            <IoClose className="text-xl" />
                        </button>

                        {/* Top Icon */}
                        <div className="bg-purple-50 p-3.5 rounded-2xl mb-3 text-[#5b21b6]">
                            <IoQrCodeOutline className="text-2xl" />
                        </div>

                        {/* Modal Header */}
                        <h4 className="text-xl font-extrabold text-gray-900">QR Code</h4>
                        <p className="text-xs text-gray-400 truncate max-w-62.5 mt-1 mb-5">
                            {selectedQrUrl}
                        </p>

                        {/* Dynamic QR Code Canvas/SVG */}
                        <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-inner mb-6">
                            <QRCodeSVG
                                id="qr-code-svg"
                                value={selectedQrUrl}
                                size={180}
                                level="H"
                                includeMargin={true}
                            />
                        </div>

                        {/* Download Button */}
                        <button
                            onClick={downloadQRCode}
                            className="w-full bg-[#5b21b6] hover:bg-[#4c1d95] text-white font-semibold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
                        >
                            <FiDownload className="text-base" />
                            Download QR Code
                        </button>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Links;