import React from 'react'
import { Link } from 'react-router-dom'

export default function JobSeekerButton() {
    return (
        <div>
            <Link to="/">
                <button className="btn">Log out</button>
            </Link>
        </div>
    )
}
