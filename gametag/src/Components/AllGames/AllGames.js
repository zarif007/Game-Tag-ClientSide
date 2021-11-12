import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import domain from '../../Domain'

const AllGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`${domain}allgames`)
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);

    
    return (
        <section className="container p-6 mx-auto bg-white" style={{ "backgroundColor": "black" }}>
            <div className="mb-10 text-center mt-12">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                    Browse Games
                </p>
            </div>

            <div className="flex items-center justify-center pb-12">
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        games.map(game => {
                            return(
                                <Link to={`/game/${game._id}`}>
                                    <div className="w-full h-full max-w-xs text-center pb-12">
                                        <img className="object-cover object-center w-full h-full mx-auto rounded-lg" src={game.img} alt="avatar"/>

                                        <div className="mt-2">
                                            <h3 className="text-lg font-medium text-white dark:text-white">{game.name}</h3>
                                            <div className="flex items-center justify-center gap-2 ">
                                                <div className="mt-1 font-medium text-white text-white bg-blue-700 rounded p-1">Ratings: {game.rate}/10</div>
                                                <span className="mt-1 font-medium text-white text-white">${game.price}</span>
                                            </div>
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

export default AllGames