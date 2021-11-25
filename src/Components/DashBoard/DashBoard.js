import React, { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
  } from "react-router-dom";
import AllOrders from "./AllOrders/AllOrders";
import ConfirmedOrders from "./ConfirmedOrders/ConfirmedOrders";
import Review from './Review/Review';
import PaidOrders from "./PaidOrders/PaidOrders";
import AddAdmin from "./AddAdmin/AddAdmin";
import AddAGame from './AddAGame/AddAGame';
import AdminRoute from './AdminRoute/AdminRoute';



export default function DashBoard() {
    const [show, setShow] = useState(false);
    let { path, url } = useRouteMatch();

    const {user, logOut, isAdmin} = useAuth();

    return (
        <>
            <div className="w-full h-full" style={{"backgroundColor": 'black'}}>
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div className="absolute lg:relative w-64 min-h-screen shadow bg-gray-900 hidden lg:block">
                        <div className="h-16 w-full flex flex-col items-center px-8">
                            <h1 className="text-white">{user.displayName}</h1>
                            <h2 className="text-white">{user.email}</h2>
                        </div>
                        {
                            !isAdmin ?
                            <ul aria-orientation="vertical" className=" py-6">
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}`}><div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                        <span className="ml-2">Your all Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/confirmedorders`}><div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-2">Confirmed Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/paidorders`}><div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <span className="ml-2">Paid Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/review`}><div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                        <span className="ml-2">Review</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <button className="flex items-conter" onClick={logOut}>LogOut</button>
                                </li>
                            </ul> : <ul>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}`}><div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                        <span className="ml-2">All Users Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/addanadmin`}><div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-2">Add an Admin</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/addagame`}><div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="ml-2">Add a Game</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <button className="flex items-conter" onClick={logOut}>LogOut</button>
                                </li>
                            </ul>
                        }
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-900 lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="flex items-center justify-between px-8">
                                        
                                        <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="h-16 w-full flex flex-col items-center px-8">
                                        <h1 className="text-white">{user.displayName}</h1>
                                        <h2 className="text-white">{user.email}</h2>
                                    </div>
                                    {
                                        !isAdmin ?
                                        <ul aria-orientation="vertical" className=" py-6">
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}`}>
                                                    <div className="flex items-center">
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Your All orders</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/confirmedorders`}>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Confirmed Orders</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/paidorders`}>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                        </svg>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Paid Orders</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/review`}>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                        </svg>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Review</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <button className="flex items-conter" onClick={logOut}>LogOut</button>
                                            </li>
                                        </ul> : <ul>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}`}>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                                        </svg>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">All Users orders</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/addanadmin`}>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Add an Admin</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/addagame`}>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Add a Game</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <button className="flex items-conter" onClick={logOut}>LogOut</button>
                                            </li>
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full">
                        
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-grey-900 shadow relative z-10">
                            
                            <div className="text-gray-400 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </nav>
                        {/* Navigation ends */}

                        <div className="container mx-auto md:w-4/5 w-11/12">
                            <div className="w-full h-full">
                                <Switch>
                                    <Route exact path={path}>
                                        <AllOrders></AllOrders>
                                    </Route>
                                    <Route path={`${path}/confirmedorders`}>
                                        <ConfirmedOrders></ConfirmedOrders>
                                    </Route>
                                    <Route path={`${path}/paidorders`}>
                                        <PaidOrders></PaidOrders>
                                    </Route>
                                    <Route path={`${path}/review`}>
                                        <Review></Review>
                                    </Route>
                                    <AdminRoute path={`${path}/addanadmin`}>
                                        <AddAdmin></AddAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addagame`}>
                                        <AddAGame />
                                    </AdminRoute>
                                    
                                </Switch>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
