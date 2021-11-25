import { getAuth, getIdToken, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Components/Authentication/FireBase/firebase.init';
import domain from './../Domain';


initializeAuthentication();

const useFireBase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        fetch(`${domain}userinfo/${user.uid}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.isAdmin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {} )
            .finally(() => setIsLoading(false))
    }

    // user state changing observer  
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else { 
                setUser({});
            }
            
            setIsLoading(false)
        })

        return () => unSubscribe;
    } ,[])


    return {
        user, 
        isAdmin,
        setUser,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading,
        token,
    }
}


export default useFireBase;