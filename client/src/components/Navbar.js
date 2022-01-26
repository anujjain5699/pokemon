import React from 'react';
import '../style/style.css';
import { Link } from "react-router-dom"

export default function Navbar({ user }) {
    return (
        <div className="navbar">
            <span className="logo"><Link className="link" to="/">Auth app</Link></span>
            {
                user ? (
                    <ul className="list">
                        <li className="listItem">
                            <img src="https://images.unsplash.com/photo-1643028468558-2082eb119131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60" alt="user" className="avatar" />
                        </li>
                        <li className="listItem">John</li>
                        <li className="listItem">Logout</li>
                    </ul>
                ) : (
                    <Link className="link" to="login">
                        Login
                    </Link>
                )
            }
        </div>
    );
}
