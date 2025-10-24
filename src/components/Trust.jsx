import React from 'react';

const Trust = () => {
    return (
        <section className="bg-linear-to-r from-purple-600 to-indigo-600 text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
                Trusted By Millions, Built For You
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {/* Total Downloads */}
                <div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-1">Total Downloads</p>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">29.6M</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-1">
                        21% More Than Last Month
                    </p>
                </div>

                {/* Total Reviews */}
                <div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-1">Total Reviews</p>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">906K</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-1">
                        49% More Than Last Month
                    </p>
                </div>

                {/* Active Apps */}
                <div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-1">Active Apps</p>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">132+</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-1">
                        31 More Will Launch
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Trust;
