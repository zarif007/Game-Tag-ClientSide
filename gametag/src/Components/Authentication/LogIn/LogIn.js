import React, { useState } from 'react'
import {  useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../../customHooks/useAuth';
import domain from '../../../Domain'



const LogIn = () => {

    const auth = getAuth();

    // State Handling 
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');

    const {signInWithGoogle, setIsLoading, setUser} = useAuth();

    const loaction = useLocation();
    const history = useHistory();
    const redirect_url = loaction.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                saveToDB(res.user.email, res.user.displayName, res.user.uid, 'PUT');
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSignIn = e => {
        e.preventDefault();
        processLogin(email, password);
    }

    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
            .then(res => { 
                const user = res.user;
                console.log(user);
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const saveToDB = (email, displayName, uid, METHOD) => {
        const user = {email, displayName, fireBaseId: uid, role: 'Customer'};

        fetch(`${domain}users`, {
            method: METHOD,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }) .then()
    }

    return (
        <div className="h-screen px-3 py-16" style={{'backgroundColor': 'black'}}>
                <div className="max-w-md mx-auto bg-white p-3 rounded">
                    <div className="px-3 py-5">
                        <div className="text-center">
                            <h1 className="text-2xl mb-4">Signin</h1>
                        </div> 
                        <button onClick={handleGoogleSignIn} className="h-12 w-full hover:bg-blue-800 focus:outline-none bg-blue-700 rounded text-white mb-3">Signin using Google</button>
                        <div className="mt-5">
                            <div className="relative py-4 flex justify-center"> <span className="absolute px-4 rounded -top-4 left-30 bg-white">Or signin with email</span> </div>
                        </div>

                        <form onSubmit={handleSignIn}>
                            <div className="relative mb-3"> <label className="ml-2 bg-white px-2 absolute -top-3 text-sm">Email</label> 
                            <input onBlur={handleEmailChange} className="transition duration-500 border h-12 rounded w-full px-2 mb-2"/> </div>
                            <div className="relative mb-1"> <label className="ml-2 bg-white px-2 absolute -top-3 text-sm">Password</label> 
                            <input onBlur={handlePasswordChange} type="password" className="transition duration-500 border h-12 rounded w-full px-2 mb-2"/> </div>
                            <div className="text-right mb-3"> <Link to='/register' className="cursor-pointer text-blue-500 hover:text-blue-700">Create an Account</Link> </div> 
                            <p style={{"color": "red"}}>{error}</p>
                            <button type="submit" className="h-12 w-full hover:bg-red-800 focus:outline-none bg-red-700 rounded text-white mb-3">Signin</button>
                        </form>
                            
                    </div>
                </div>
        </div>
    )
}

export default LogIn;
