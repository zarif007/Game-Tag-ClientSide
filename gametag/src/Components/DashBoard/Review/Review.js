import React from 'react'

const Review = () => {
  return (
    <>

      <div class="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-5">
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
            <div class="px-12 py-5">
              <h2 class="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
            </div>
            <div class="bg-gray-200 w-full flex flex-col items-center">
              <div class="flex flex-col items-center py-6 space-y-3">
                <span class="text-lg text-gray-800">How was quality of the call?</span>
                
              </div>
              <div class="w-3/4 flex flex-col">
                <textarea rows="3" class="p-4 text-gray-500 rounded-xl resize-none">Leave a message, if you want</textarea>
                <button class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">Rate now</button>
              </div>
            </div>
            <div class="h-20 flex items-center justify-center">
              <a href="#" class="text-gray-600">Maybe later</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
