import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    return (
        <section className="py-20 lg:py-28" style={{'backgroundColor': 'black'}}>
                <div className="container mx-auto px-5 text-center">
                    <div className="mb-16">
                        <div className="space-y-4 mb-12">
                            <h4 className="text-2xl sm:text-3xl font-semibold text-blue-700">Best Game Shop</h4>
                            <h1 className="text-5xl sm:text-7xl font-bold text-white uppercase">Buy Collect Play</h1>
                            <p className="sm:w-3/4 lg:w-2/4 xl:w-96 mx-auto text-lg sm:text-xl text-gray-600">Get favourite Games from here</p>
                        </div>
                        <HashLink to='/#games' className="px-12 py-4 bg-blue-700 hover:bg-blue-800 transition duration-100 ease-in-out shadow hover:shadow-lg transform hover:scale-110 text-white font-semibold text-lg rounded-full inline-block">Buy now</HashLink>
                    </div>
                    <img className="mx-auto xl:max-w-screen-lg mb-28" src="https://i.ibb.co/strf13Y/Untitled-designu.png" alt="Drone"/>
                </div>
            </section>
    )
}

export default Banner
