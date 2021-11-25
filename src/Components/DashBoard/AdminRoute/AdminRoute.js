import React from 'react'
import { Redirect } from 'react-router';
import { Route } from 'react-router'
import useAuth from '../../../customHooks/useAuth'


const AdminRoute = ({children, ...rest}) => {
    
    const {user, isLoading} = useAuth();

    if(isLoading){
        return(
            <div class=" flex justify-center items-center">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        )
    } 

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.email && user) ?
                children : <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
        }
        ></Route>
    )
}

export default AdminRoute