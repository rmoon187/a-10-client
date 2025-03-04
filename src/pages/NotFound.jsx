import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="text-center text-white">
                <h1 className="text-9xl font-bold">404</h1>
                <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
                <p className="text-xl mt-2">The page you're looking for doesn't exist or has been moved.</p>
                <div className="mt-8">
                    <a
                        href="/"
                        className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-50 transition duration-300"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>

        </div>
    );
};

export default NotFound;