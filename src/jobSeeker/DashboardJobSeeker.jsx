import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import JobSeekerSignedIn from './layouts/JobSeekerSignedIn';
import JobSeekerSignedOut from './layouts/JobSeekerSignedOut';

export default function DashboardJobSeeker() {

    const history = useHistory();
    const [isAuthenticatedJobSeeker, setisAuthenticatedJobSeeker] = useState(false);

    function handleSignOut(){
        setisAuthenticatedJobSeeker(false);
        history.push("/")
    }

    function handleSignIn(){
        setisAuthenticatedJobSeeker(true);
    }
    return (
        <div>
            {isAuthenticatedJobSeeker ? (
                <JobSeekerSignedIn signOut={handleSignOut}/>
            ) : (
                <JobSeekerSignedOut signIn={handleSignIn}/>
            )}
        </div>
    )
}
