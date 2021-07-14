import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router";
import StaffSignedIn from './layouts/StaffSignedIn';
import StaffSignedOut from './layouts/StaffSignedOut';

export default function DashboardStaff() {

    const history = useHistory();
    const [isAuthenticatedStaff, setisAuthenticatedStaff] = useState(false);

    function handleSignOut(){
        setisAuthenticatedStaff(false);
        history.push("/")
    }
    function handleSignIn(){
        setisAuthenticatedStaff(true);
    }
    return (
        <div>
            {isAuthenticatedStaff ? (
                <StaffSignedIn signOut={handleSignOut}/>
            ) :  (
                <StaffSignedOut signIn={handleSignIn}/>
            )}
        </div>
    )
}
