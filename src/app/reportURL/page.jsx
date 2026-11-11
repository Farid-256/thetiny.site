"use client";

import { useState } from "react";
import { FiShield } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";

const ReportMaliciousURL = () => {
    const [formData, setFormData] = useState({
        url: "",
        comment: "",
        isHuman: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Report submitted successfully!");
    };

    const handleReset = () => {
        setFormData({ url: "", comment: "", isHuman: false });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="bg-white border border-gray-200/80 rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden">

                {/* Top Orange Header Banner */}
                <div className="bg-linear-to-r from-orange-500 to-amber-600 p-6 sm:p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                            <FiShield className="text-xl" />
                        </span>
                        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                            Report Malicious URL
                        </h1>
                    </div>
                    <p className="text-orange-100 text-sm sm:text-base">
                        Help us keep the internet safe by reporting suspicious or malicious URLs
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-6">

                    {/* Malicious URL Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Malicious URL <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            required
                            placeholder="https://example.com/malicious-page"
                            value={formData.url}
                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition text-gray-900"
                        />
                    </div>

                    {/* Comment / Description Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Comment / Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            rows="4"
                            placeholder="Describe why this URL is malicious"
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition resize-none text-gray-900"
                        ></textarea>
                    </div>

                    {/* Human Verification Checkbox */}
                    <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                        <input
                            type="checkbox"
                            id="human"
                            required
                            checked={formData.isHuman}
                            onChange={(e) => setFormData({ ...formData, isHuman: e.target.checked })}
                            className="w-4 h-4 mt-0.5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 accent-orange-600"
                        />
                        <label htmlFor="human" className="text-sm cursor-pointer select-none">
                            <span className="font-semibold text-gray-800">I am human (verify)</span>
                            <p className="text-gray-500 text-xs mt-0.5">Confirm that you are a real person reporting this URL</p>
                        </label>
                    </div>

                    {/* Action Buttons Group */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                        <button
                            onClick={handleReset}
                            type="submit"
                            className="w-full sm:flex-1 bg-linear-to-r from-orange-500 to-amber-600 hover:from-orange-600
                            hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 text-sm"
                        >
                            <RiSendPlaneLine className="text-lg" /> Submit Report
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-3 px-6 rounded-xl transition text-sm"
                        >
                            Reset Form
                        </button>
                    </div>

                    {/* Safety Notice Box */}
                    <div className="flex items-start gap-3 p-4 border border-blue-100 bg-blue-50/60 rounded-xl text-blue-900">
                        <span className="p-1 bg-blue-100 text-blue-700 rounded-lg mt-0.5">
                            <FiShield className="text-base" />
                        </span>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800">Safety Notice</h4>
                            <p className="text-xs sm:text-sm text-blue-700 mt-0.5">
                                Your report will be reviewed by our security team.
                            </p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ReportMaliciousURL;