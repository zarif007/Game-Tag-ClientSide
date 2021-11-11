import React from 'react'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <section class="py-20 lg:py-28" style={{'backgroundColor': 'black'}}>
            <div class="container mx-auto px-5 text-center">
                <div class="mb-16">
                    <div class="space-y-4 mb-12">
                        <h4 class="text-2xl sm:text-3xl font-semibold text-blue-700">Best Game Shop</h4>
                        <h1 class="text-5xl sm:text-7xl font-bold text-white">Buy, Collect, Play</h1>
                        <p class="sm:w-3/4 lg:w-2/4 xl:w-96 mx-auto text-lg sm:text-xl text-gray-600">Get favourite Games from here</p>
                    </div>
                    <button class="px-12 py-4 bg-blue-700 hover:bg-blue-800 transition duration-100 ease-in-out shadow hover:shadow-lg transform hover:scale-110 text-white font-semibold text-lg rounded-full inline-block">Buy now</button>
                </div>
                <img class="mx-auto xl:max-w-screen-lg mb-28" src="https://i.ibb.co/strf13Y/Untitled-designu.png" alt="Drone"/>
            </div>
        </section>
  )
}

export default Banner
