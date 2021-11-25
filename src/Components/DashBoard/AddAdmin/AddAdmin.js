import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import domain from '../../../Domain'
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import useAuth from '../../../customHooks/useAuth';


const AddAdmin = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');

    const {user, token} = useAuth();

    const handleInput = e => {
        setEmail(e.target.value);
    }

    const MakeAdmin = e => {

        const newAdmin = {email};

        fetch(`${domain}makeadmin`, {
          method: 'PATCH',
          headers: {
              'authorization': `Token ${token}`,
              'content-type': 'application/json'
          },
          body: JSON.stringify(newAdmin)
        }) .then(swal({
          title: "Success!",
          text: "User Added to Admin Panel",
          icon: "success",
          button: "ok!",
          
        } )) .then(history.push('/dashboard'));

    }

    return (
      <>
        <div className="mb-10 text-center mt-12">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                Add an Admin
            </p>
        </div>
        <div class="min-h-screen py-6 flex flex-col  sm:py-5" style={{'backgroundColor': 'black'}}>
          <div class="py-3 sm:max-w-xl sm:mx-auto">
            <div class="bg-white min-w-1xl flex flex-col rounded shadow-lg">
              <div class="px-12 py-5">
                <h2 class="text-gray-800 text-3xl font-semibold">Add a new Admin to the panel</h2>
              </div>
              <div class="bg-gray-200 w-full flex flex-col items-center">
                <div class="flex flex-col items-center py-6 space-y-3">
                </div>
                <div class="w-3/4 flex flex-col">
                  <input onBlur={handleInput} type="email" rows="3" placeholder="user's email" class="p-4 text-gray-500 rounded-xl resize-none"></input>
                  <button onClick={MakeAdmin} class="py-3 my-8 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl text-white">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default AddAdmin
