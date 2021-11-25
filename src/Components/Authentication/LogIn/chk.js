import React from 'react'
import { Link } from 'react-router-dom'

const CHK = () => {
    return (

        <div class=" container p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center" style={{'backgroundColor': 'black'}}>
            <div class="content w-full">
                <img src="https://i.ibb.co/strf13Y/Untitled-designu.png" />
            </div>
            <div class="container mx-auto flex flex-col items-center">
                
                <form class="shadow-lg w-80 p-4 flex flex-col bg-gray-800 rounded-lg">
                    <div className="text-center">
                        <h1 className="text-2xl mb-4 text-white">Signin</h1>
                    </div> 
                    <input type="email" placeholder="Email" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    <input type="password" placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    <button class="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
                    <Link to='/' class="text-blue-400 text-center my-2">Create New Account</Link>
                    <hr />
                    <button class="w-full bg-red-700 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">SignIn With Google</button>
                </form>
                <p class="text-center text-sm my-4">
                <span class="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
                </p>
            </div>
        </div>

    )
}

export default CHK
