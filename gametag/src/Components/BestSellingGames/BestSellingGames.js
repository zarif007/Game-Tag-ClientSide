import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import domain from '../../Domain'

const BestSellingGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`${domain}games/bestseller`)
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);

    return (
        <div className="flex flex-wrap -m-5 p-12">
            <div className="p-2 lg:w-1/1 md:w-1/1 w-full">
                <h2 className="text-base text-1xl text-blue-600 font-semibold tracking-wide uppercase m-4 pb-4">
                    Best Sellers
                </h2>
                {
                    games.map(game => {
                        return(
                            <Link to="/">
                                <div className="p-4 lg:w-1/1">
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={game.img}/>
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font text-center font-medium text-lg text-white">{game.name}</h2>
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="mt-1 font-medium text-white text-white bg-blue-700 rounded p-1">Downloads: {game.soldcopies}</div>
                                                <span className="mt-1 font-medium text-white text-white">${game.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSellingGames
