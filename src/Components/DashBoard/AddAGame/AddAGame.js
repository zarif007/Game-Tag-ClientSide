import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import domain from '../../../Domain'
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import useAuth from '../../../customHooks/useAuth';


const AddAGame = () => {

    const history = useHistory();
    const [game, setGame] = useState({});

    const {user, token} = useAuth();

    const handleInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...game};
        newData[field] = value;
        console.log(newData);
        setGame(newData);
    }

    const addAGame = e => {

        fetch(`${domain}games`, {
          method: 'POST',
          headers: {
              'authorization': `Token ${token}`,
              'content-type': 'application/json'
          },
          body: JSON.stringify(game)
        }) .then(swal({
          title: "Success!",
          text: "Game added to the DataBase",
          icon: "success",
          button: "ok!",
          
        } )) .then(history.push('/dashboard'));

    }

    return (
      <>
        <div className="mb-10 text-center mt-12">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                Add a Game
            </p>
        </div>
        <div className="min-h-screen py-6 flex flex-col  sm:py-5" style={{'backgroundColor': 'black'}}>
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white min-w-1xl flex flex-col rounded shadow-lg">
              <div className="px-12 py-5">
                <h2 className="text-gray-800 text-3xl font-semibold">Add a new Game to the stack</h2>
              </div>
              <div className="bg-gray-200 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-6 space-y-3">
                </div>
                <div className="w-3/4 flex flex-col">
                  <input name="name" onBlur={handleInput} type="email" rows="3" placeholder="Name" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="developer" onBlur={handleInput} type="email" rows="3" placeholder="Developer" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="publisher" onBlur={handleInput} type="email" rows="3" placeholder="Publisher" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="genre" onBlur={handleInput} type="email" rows="3" placeholder="Genre" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="price" onBlur={handleInput} type="email" rows="3" placeholder="Price" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="img" onBlur={handleInput} type="email" rows="3" placeholder="Img Url" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="discount" onBlur={handleInput} type="email" rows="3" placeholder="Discount" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="rate" onBlur={handleInput} type="email" rows="3" placeholder="Rate" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <input name="soldcopies" onBlur={handleInput} type="email" rows="3" placeholder="Sold Copies" className="m-2 p-4 text-gray-500 rounded-xl resize-none"></input>
                  <button onClick={addAGame} className="py-3 my-8 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl text-white">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default AddAGame
