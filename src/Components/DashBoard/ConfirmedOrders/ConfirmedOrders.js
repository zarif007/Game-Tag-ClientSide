import React, { useEffect, useState } from 'react'
import useAuth from '../../../customHooks/useAuth'
import domain from '../../../Domain'
import swal from 'sweetalert';


const ConfirmedOrders = () => {

    const {user} = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`${domain}orders/${user.uid}`)
          .then(res => res.json())
          .then(data => setOrders(data));
    }, [])

    const payOrder = id => {

      fetch(`${domain}orders/pay/${id}`, {
          method: "PATCH"
      }) .then(res => res.json())
      .then(data => {
          const rest = orders.filter(order => order._id !== id);
          let result = orders.find( ({ _id }) => _id === id );
          result.status = 'paid';
          const updated = [...rest, result];
          setOrders(updated);
          
      }) .then(swal({
          title: "Success!",
          text: "You order has been Paid! ",
          icon: "success",
          button: "ok!",
          
      } ));
    }

    return (
        <>
            <div className="mb-10 text-center mt-12">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                  Your Confirmed Orders
                </p>
            </div>
            {
              orders.map(order => {
                return(
                    <>
                    {
                      order.status === 'confirmed' && <div className="m-3">
                      <div className="flex flex-col p-2 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            
                            <img className="w-16 h-16 rounded"  src={order.gameImg}/>
                            <div className="flex ml-3 sm:gap-2 xl:gap-10">
                              
                                <div className="font-medium leading-none text-gray-100 lg:pl-6">{order.gameName}</div>
                                
                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-300 leading-none mt-1">{order.date}</p>
                                    <p className="text-md text-green-500 leading-none mt-1">Confirmed</p>
                                </div>

                                <div className="mt-1 font-medium text-white text-white bg-blue-700 rounded p-2">${order.gamePrice}</div>
                                
                              </div>
                            </div>
                            <button onClick={() => payOrder(order._id)}  className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full">Pay</button>
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

export default ConfirmedOrders
