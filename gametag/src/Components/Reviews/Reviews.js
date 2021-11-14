import React, { useEffect, useState } from 'react'
import domain from '../../Domain'


const Reviews = () => {
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${domain}reviews/`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    console.log('iii', reviews);

    return (
        <>
        <section class="text-gray-400 body-font" style={{'backgroundColor': 'black'}} id="reviews">
            <div className="mb-10 text-center mt-12">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                    Customer's Feedback
                </p>
            </div>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    
                        {
                            reviews.map(review => {
                                return(
                                    <div class="p-4 lg:w-1/6">
                                        <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                                            <h1 class="title-font sm:text-2xl text-xl font-medium text-blue-600 mb-3">{review.user}</h1>
                                            <p class="leading-relaxed sm:text-1xl text-xl font-medium mb-3">{review.review}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                </div>
            </div>
        </section>
            
        </>
    )
}

export default Reviews
