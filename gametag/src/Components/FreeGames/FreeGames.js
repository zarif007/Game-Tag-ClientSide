import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import domain from '../../Domain'

const FreeGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`${domain}games/free`)
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);

    return (
        <section className="container p-6 mx-auto bg-white" style={{ "backgroundColor": "black" }}>
            <h2 className="text-base text-2xl text-blue-700 font-semibold tracking-wide uppercase m-4 pb-4">
                Free Games
            </h2>

            <div className="flex items-center justify-center pb-12">
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        games.map(game => {
                            return(
                                <Link to="/">
                                    <div class="flex flex-col items-center justify-center max-w-sm mx-auto">
                                        <img className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" src={game.img}/>

                                        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{game.name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FreeGames
