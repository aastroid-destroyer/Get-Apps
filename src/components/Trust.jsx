import React from 'react'

const Trust = () => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Trusted By Millions, Built For You
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Total Downloads */}
                <div>
                    <p className="text-lg text-gray-200 mb-1">Total Downloads</p>
                    <h3 className="text-5xl font-extrabold">29.6M</h3>
                    <p className="text-xl text-gray-300 mt-1">
                        21% More Than Last Month
                    </p>
                </div>

                {/* Total Reviews */}
                <div>
                    <p className="text-lg text-gray-200 mb-1">Total Reviews</p>
                    <h3 className="text-5xl font-extrabold">906K</h3>
                    <p className="text-xl text-gray-300 mt-1">
                        49% More Than Last Month
                    </p>
                </div>

                {/* Active Apps */}
                <div>
                    <p className="text-lg text-gray-200 mb-1">Active Apps</p>
                    <h3 className="text-5xl font-extrabold">132+</h3>
                    <p className="text-xl text-gray-300 mt-1">
                        31 More Will Launch
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Trust