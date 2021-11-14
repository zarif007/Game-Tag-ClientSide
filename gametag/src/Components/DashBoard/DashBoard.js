import React, { useEffect, useState } from "react";
import useAuth from "../../customHooks/useAuth";
import domain from '../../Domain'
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



export default function DashBoard() {
    const [show, setShow] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    let { path, url } = useRouteMatch();

    const {user} = useAuth();

    useEffect(() => {
        fetch(`${domain}userinfo/${user.uid}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    } ,[])
    


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
                            userInfo.role !== 'Admin' ?
                            <ul aria-orientation="vertical" className=" py-6">
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}`}><div className="flex items-center">
                                        
                                        <span className="ml-2">Your all Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/confirmedorders`}><div className="flex items-center">
                                        
                                        <span className="ml-2">Confirmed Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/paidorders`}><div className="flex items-center">
                                        
                                        <span className="ml-2">Paid Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/review`}><div className="flex items-center">
                                        
                                        <span className="ml-2">Review</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul> : <ul>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}`}><div className="flex items-center">
                                        
                                        <span className="ml-2">All Users Orders</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/addanadmin`}><div className="flex items-center">
                                        
                                        <span className="ml-2">Add an Admin</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to={`${url}/addagame`}><div className="flex items-center">
                                        
                                        <span className="ml-2">Add a Game</span>
                                        </div>
                                    </Link>
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
                                        userInfo.role !== 'Admin' ?
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
                                                        
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Confirmed Orders</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/review`}>
                                                    <div className="flex items-center">
                                                        
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Review</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul> : <ul>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}`}>
                                                    <div className="flex items-center">
                                                        
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">All Users orders</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/addanadmin`}>
                                                    <div className="flex items-center">
                                                        
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Add an Admin</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <Link to={`${url}/addagame`}>
                                                    <div className="flex items-center">
                                                        
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Add a Game</span>
                                                    </div>
                                                </Link>
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
                                    <Route path={`${path}/addanadmin`}>
                                        <AddAdmin></AddAdmin>
                                    </Route>
                                    <Route path={`${path}/addagame`}>
                                        <AddAGame />
                                    </Route>
                                    
                                </Switch>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
