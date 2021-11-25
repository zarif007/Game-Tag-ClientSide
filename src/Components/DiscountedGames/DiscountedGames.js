import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import domain from '../../Domain'

const DiscountedGames = () => {
    const [games, setGames] = useState([]);
    const history = useHistory();

    console.log(`${domain}games/onsale`);
    useEffect(() => {
        fetch(`${domain}games/onsale`)
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);

    const showDetails = id => {
        history.push(`/game/${id}`);
    }

    return (
        <section className="container p-6 mx-auto bg-white" style={{ "backgroundColor": "black" }}>
            <h2 className="text-base text-2xl text-blue-700 font-semibold tracking-wide uppercase m-4 pb-4">
                Games On Sale
            </h2>

            <div className="flex items-center justify-center pb-12">
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {
                        games.map(game => {
                            return(
                                <button onClick={() => showDetails(game._id)}>
                                    <div className="w-full h-full max-w-xs text-center pb-12">
                                        <img className="object-cover object-center w-full h-full mx-auto rounded-lg" src={game.img} alt="avatar"/>

                                        <div className="mt-2">
                                            <h3 className="text-lg font-medium text-white dark:text-white">{game.name}</h3>
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="mt-1 font-medium text-white text-white bg-blue-700 rounded p-1">-{game.discount}%</div>
                                                <span className="mt-1 font-medium text-white text-white">${game.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default DiscountedGames
