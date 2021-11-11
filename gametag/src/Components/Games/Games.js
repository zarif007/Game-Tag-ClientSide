import React from 'react'
import { Link } from 'react-router-dom'
import DiscountedGames from '../DiscountedGames/DiscountedGames'
import FreeGames from '../FreeGames/FreeGames'
import TopGames from '../TopGames/TopGames'

const Games = () => {
    
    return (
        <div style={{ "backgroundColor": "black" }} id="games">
            <div className="mb-10 text-center mt-12">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                    Browse Games
                </p>
            </div>
            <DiscountedGames></DiscountedGames>
            
            <TopGames></TopGames>

            <FreeGames></FreeGames>

            <Link to="/allgames" className="px-12 py-4 bg-blue-700 hover:bg-blue-800 transition duration-100 ease-in-out shadow hover:shadow-lg transform hover:scale-110 text-white font-semibold text-lg rounded inline-block mb-12">Browse All</Link>
        </div>
    )
}

export default Games
