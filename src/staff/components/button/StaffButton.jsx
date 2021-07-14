import React from 'react'
import { Link } from 'react-router-dom'
import "./StaffButton.css"
export default function StaffButton() {
    return (
        <div>
            <Link to="/">
                <button className="btn-log-out">Log out</button>
            </Link>
        </div>
    )
}
