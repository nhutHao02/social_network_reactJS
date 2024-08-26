import React from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav_container">
      <Link to="/" className="logo">
        <p className="text-[#c6c3ff]">RPM</p>
      </Link>
      <NavLink exact to="/home" activeClassName="active" className="row">
        <p>
          <i class="fa-solid fa-house"></i> Home
        </p>
      </NavLink>
      <NavLink to="/explore" activeClassName="active" className="row">
        <p>
          <i class="fa-solid fa-magnifying-glass"></i> Explore
        </p>
      </NavLink>
      <NavLink to="/notifications" activeClassName="active" className="row">
        <p>
          <i class="fa-regular fa-bell"></i> Notifications
        </p>
      </NavLink>
      <NavLink to="/message" activeClassName="active" className="row">
        <p>
          <i class="fa-regular fa-envelope"></i> Message
        </p>
      </NavLink>
      <NavLink to="/bookmarks" activeClassName="active" className="row">
        <p>
          <i class="fa-regular fa-bookmark"></i> Bookmarks
        </p>
      </NavLink>
      <NavLink to="/profile" activeClassName="active" className="row">
        <p>
          <i class="fa-regular fa-user"></i> Profile
        </p>
      </NavLink>
      <NavLink to="/more" activeClassName="active" className="row">
        <p>
          {" "}
          <i class="fa-solid fa-ellipsis"></i> More
        </p>
      </NavLink>
      <div className="btn btn-primary">
        <p className="text-center">Post</p>
      </div>
      <div className="info_user">
        <div className="img">
          <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1720022602~exp=1720023202~hmac=7ea40d1d2cf6c229f602a5817a5a2871ec4b73df95dfdd6ce7c0e35788b307be"></img>
        </div>
        <div className="info">
          <p className="name">Username</p>
          <p>email</p>
        </div>
      </div>
    </div>
  );
}
