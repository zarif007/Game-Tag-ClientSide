import React from 'react'
import { Link } from 'react-router-dom';
import BestSellingGames from '../BestSellingGames/BestSellingGames';
import TopRatedGames from '../TopRatedGames/TopRatedGames';



const TopGames = () => {

    return (
      <section class="text-gray-400 body-font" style={{ "backgroundColor": "black" }}>
        <div class="container px-5 py-24 mx-auto">
          <h2 className="text-base text-2xl text-blue-700 font-semibold tracking-wide uppercase m-4 pb-4">
              Top Games
          </h2>
          <div class="flex flex-wrap items-center justify-center gap-12 md:w-1/1 sm:w-1/1">
            <TopRatedGames></TopRatedGames>
            <BestSellingGames></BestSellingGames>
          </div>
          
        </div>
      </section>
    )
}

export default TopGames
