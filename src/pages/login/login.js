import React from "react";
import './login.css'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login_container">
           <div className="card">
           <div className="login_left">
                <h2>Wellcome to ABC network</h2>
                <span>---------------------</span>
                <span>Don't have an account?</span>
                <Link to='/signup'>
                <button className="btn btn-primary"> Register</button>
                </Link>
            </div>

            <form className="login_right">
                <input type="text" placeholder="username" required></input>
                <input type="password" placeholder="password" required></input>
                <button className="btn" type="submit">Login</button>
            </form>
           </div>
        </div>
        
    )
}