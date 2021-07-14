import React from 'react'
import "./EmployerButton.css"
import { Link } from 'react-router-dom'

export default function EmployerButton() {
    return (
        <div>
            <Link to="/">
                <button className="btn">Log out</button>
            </Link>
        </div>
    )
}
