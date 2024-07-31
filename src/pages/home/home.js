import React from "react";
import './home.css'

import Nav from "../../components/nav/nav";
import RightBar from "../../components/rightBar/rightBar";

export default function Home() {
    return (
        <div className="home_container">
            <Nav/>
            <div className="home_center">
                <h1>Home</h1>
            </div>
            <RightBar/>
        </div>
    )
}