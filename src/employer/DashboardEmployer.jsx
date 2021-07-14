import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router";
import EmployerSignedIn from './layouts/EmployerSignedIn';
import EmployerSignedOut from './layouts/EmployerSignedOut';

export default function DashboardEmployer() {

    const history = useHistory();
    const [isAuthenticatedEmployer, setisAuthenticatedEmployer] = useState(false);
    function handleSignOut(){
        setisAuthenticatedEmployer(false);
        history.push("/")
    }
    function handleSignIn(){
        setisAuthenticatedEmployer(true);
    }
    return (
        <div>
            {isAuthenticatedEmployer ? (
                <EmployerSignedIn signOut={handleSignOut}/>
            ) : (
                <EmployerSignedOut signIn={handleSignIn}/>
            )}
        </div>
    )
}
