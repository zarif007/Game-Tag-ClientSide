import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import domain from '../../../Domain'
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import useAuth from '../../../customHooks/useAuth';


const Review = () => {

    const history = useHistory();
    const [review, setReview] = useState('');

    const {user} = useAuth();

    const handleInput = e => {
        setReview(e.target.value);
    }

    const placeReview = e => {

        const reviewGo = {review: review, user: user.displayName};

        fetch(`${domain}reviews`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(reviewGo)
        }) .then(swal({
          title: "Success!",
          text: "Thanks for your feedback!",
          icon: "success",
          button: "ok!",
          
        } )) .then(history.push('/dashboard'));

    }

    return (
      <>

        <div class="min-h-screen py-6 flex flex-col  sm:py-5" style={{'backgroundColor': 'black'}}>
          <div class="py-3 sm:max-w-xl sm:mx-auto">
            <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
              <div class="px-12 py-5">
                <h2 class="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
              </div>
              <div class="bg-gray-200 w-full flex flex-col items-center">
                <div class="flex flex-col items-center py-6 space-y-3">
                </div>
                <div class="w-3/4 flex flex-col">
                  <textarea onBlur={handleInput} rows="3" placeholder="Leave a message, if you want" class="p-4 text-gray-500 rounded-xl resize-none"></textarea>
                  <button onClick={placeReview} class="py-3 my-8 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl text-white">Rate now</button>
                </div>
              </div>
              <div class="h-20 flex items-center justify-center">
                <Link to='/dashboard' class="text-gray-600">Maybe later</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Review
