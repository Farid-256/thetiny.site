import Link from 'next/link';

const Blog = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
            <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-2xl shadow-sm text-center max-w-lg w-full flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">Blog</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Welcome to our blog page! Stay tuned for the latest articles, updates, tips, and insights on URL management and digital marketing.
                </p>
                <div className="mt-4">
                    <Link
                        href="/"
                        className="inline-block bg-[#5b21b6] hover:bg-purple-800 text-white font-medium px-6 py-2.5 rounded-xl transition duration-200 text-sm"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;