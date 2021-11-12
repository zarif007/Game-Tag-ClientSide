import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import domain from '../../Domain'


const Game = () => {
    const {id} = useParams();

    const [game, setGame] = useState({});


    useEffect(() => {
        fetch(`${domain}game/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    } ,[])

    console.log(game);

    
    return (
        <section class="text-gray-400 body-font overflow-hidden pt-12" style={{'backgroundColor': 'black'}}>
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h2 class="text-2xl title-font font-mediumt text-blue-600 tracking-widest pt-12">{game.publisher}</h2>
                    <h1 class="text-white text-4xl title-font font-medium mb-4 p-10">{game.name}</h1>
                    <div class="flex mb-4">
                    </div>
                    <div class="flex border-t border-gray-800 py-2 m-5">
                        <span class="text-blue-400">Developer</span>
                        <span class="ml-auto text-white">{game.developer}</span>
                    </div>
                    <div class="flex border-t border-gray-800 py-2 m-5">
                        <span class="text-blue-400">Genre</span>
                        <span class="ml-auto text-white">{game.genre}</span>
                    </div>
                    <div class="flex border-t border-gray-800 py-2 m-5">
                        <span class="text-blue-400">SoldCopies</span>
                        <span class="ml-auto text-white">{game.soldcopies}</span>
                    </div>
                    <div class="flex border-t border-b mb-6 border-gray-800 py-2 m-5">
                        <span class="text-blue-400 ">Rating</span>
                        <span class="ml-auto text-white">{game.rate}/10</span>
                    </div>
                    <div class="flex">
                        <div className="flex items-center justify-center gap-3">
                            <div className="mt-1 font-medium text-white text-white bg-blue-700 rounded p-1">-{game.discount}%</div>
                            <span className="title-font font-medium text-2xl  text-white">${game.price}</span>
                        </div>
                    <button class="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">Add to Wishlist</button>
                    </div>
                </div>
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={game.img} />
                </div>
            </div>
        </section>
    )
}

export default Game
