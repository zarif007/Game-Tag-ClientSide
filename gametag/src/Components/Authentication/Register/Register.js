import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react'
import { useLocation, useNavigate, useHistory } from 'react-router';
import { Link } from "react-router-dom";
import useAuth from "../../../customHooks/useAuth";
import domain from '../../../Domain'


const Register = () => {

    // State Handling 
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const {signInWithGoogle, setIsLoading, setUser} = useAuth();

    const loaction = useLocation()
    const history = useHistory();
    const redirect_url = loaction.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                saveToDB(res.user.email, res.user.displayName, 'PUT');
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
    }

    const handleEmailChange = e => {
        setError('');
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setError('');
        setPassword(e.target.value);
    }

    const handleNameChange = e => {
        setError('');
        setName(e.target.value);
    }

    const handleRegistraion = e => {
        e.preventDefault();
        if (password.length < 8) {
            setError("Your password must be at least 8 characters"); 
            return;
        }
        if (password.search(/[a-z]/i) < 0) {
            setError("Your password must contain at least one letter.");
            return;
        }
        if (password.search(/[0-9]/) < 0) {
            setError("Your password must contain at least one digit."); 
            return;
        }

        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                updateProfile(auth.currentUser, {displayName: name})
                    .then(res => {})
                saveToDB(email, name, 'POST');
                history.push('/login');
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const saveToDB = (email, displayName, METHOD) => {
        const user = {email, displayName};

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
                            <h1 className="text-2xl mb-4">SignUp</h1>
                        </div> 
                        <button onClick={handleGoogleSignIn} className="h-12 w-full hover:bg-blue-800 focus:outline-none bg-blue-700 rounded text-white mb-3">Signin using Google</button>
                        <div className="mt-5">
                            <div className="relative py-4 flex justify-center"> <span className="absolute px-4 rounded -top-4 left-30 bg-white">Or signin with email</span> </div>
                        </div>

                        <form onSubmit={handleRegistraion}>
                            <div className="relative mb-3"> <label className="ml-2 bg-white px-2 absolute -top-3 text-sm">Email</label> 
                            <input type="email" onBlur={handleEmailChange} className="transition duration-500 border h-12 rounded w-full px-2 mb-2" required/> </div>
                            <div className="relative mb-3"> <label className="ml-2 bg-white px-2 absolute -top-3 text-sm">Name</label> 
                            <input type="text" onBlur={handleNameChange} className="transition duration-500 border h-12 rounded w-full px-2 mb-2" required/> </div>
                            <div className="relative mb-1"> <label className="ml-2 bg-white px-2 absolute -top-3 text-sm">Password</label> 
                            <input type="password" onBlur={handlePasswordChange} className="transition duration-500 border h-12 rounded w-full px-2 mb-2" required/> </div>
                            <div className="text-right mb-3"> <Link to='/login' className="cursor-pointer text-blue-500 hover:text-blue-700">Already have an account?</Link> </div> 
                            <p style={{"color": "red"}}>{error}</p>
                            <button type="submit" className="h-12 w-full hover:bg-red-800 focus:outline-none bg-red-700 rounded text-white mb-3">SignUp</button>
                        </form>
                            
                    </div>
                </div>
        </div>
    )
}

export default Register;
