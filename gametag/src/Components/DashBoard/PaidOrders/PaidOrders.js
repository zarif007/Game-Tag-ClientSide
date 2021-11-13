import React, { useEffect, useState } from 'react'
import useAuth from '../../../customHooks/useAuth'
import domain from '../../../Domain'



const PaidOrders = () => {

    const {user} = useAuth();
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch(`${domain}orders/${user.uid}`)
          .then(res => res.json())
          .then(data => setOrders(data));
    }, [])


    return (
        <>
            <div className="mb-10 text-center mt-12">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                  Your Paid Orders
                </p>
            </div>
            {
              orders.map(order => {
                return(
                    <>
                    {
                      order.status === 'paid' && <div className="m-3">
                      <div className="flex flex-col p-2 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            
                            <img className="w-16 h-16 rounded"  src={order.gameImg}/>
                            <div className="flex ml-3 sm:gap-2 xl:gap-10">
                              
                                <div className="font-medium leading-none text-gray-100 lg:pl-6">{order.gameName}</div>
                                
                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-300 leading-none mt-1">{order.date}</p>
                                    <p className="text-md text-blue-500 leading-none mt-1">Paid</p>
                                </div>

                                <div className="mt-1 font-medium text-white text-white bg-blue-700 rounded p-2">${order.gamePrice}</div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    </>
                    
                )
              })
            }
        </>
    )
}

export default PaidOrders
