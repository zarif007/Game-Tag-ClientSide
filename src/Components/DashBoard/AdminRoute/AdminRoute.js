import React from 'react'
import { Redirect } from 'react-router';
import { Route } from 'react-router'
import useAuth from '../../../customHooks/useAuth';


const AdminRoute = ({children, ...rest}) => {
    
    const {user, isLoading, isAdmin} = useAuth();

    if(isLoading){
        return(
            <div class=" flex justify-center items-center">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        )
    } 

    console.log('isAdmin', isAdmin);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.email && isAdmin) ?
                children : <Redirect
                    to={{
                    pathname: "/dashboard",
                    state: { from: location }
                }}
            ></Redirect>
        }
        ></Route>
    )
}

export default AdminRoute
