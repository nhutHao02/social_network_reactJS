import React from "react";
import './signup.css'
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="signup_container">
           <div className="card">
            <form className="signup_left">
                <input type="text" placeholder="username" required></input>
                <input type="email" placeholder="email" required></input>
                <input type="password" placeholder="password" required></input>
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
            <div className="signup_right">
                <h2>Wellcome to ABC network</h2>
                <span>---------------------</span>
                <span>Have an account?</span>
                <Link to='/login'>
                <button className="btn">Login</button>
                </Link>
            </div>
           </div>
        </div>
        
    )
}