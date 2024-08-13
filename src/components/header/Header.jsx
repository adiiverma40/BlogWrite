import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="text-white" style={{backgroundColor : "rgba(0,0,0,0.1)"}}>
      <div className="flex items-center justify-end">
        <img />
        <ul className="flex mx-2 px-2">
          <li className="mr-2 ml-2 ">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="mr-2 ml-2 ">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="mr-2 ml-2 ">
            <NavLink to={"/allpost"}>All Post</NavLink>
          </li>
          <li className="mr-2 ml-2 ">
            <NavLink to={"/addpost"}>Add Post</NavLink>
          </li>
          <li className="mr-2 ml-2 ">
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li className="mr-2 ml-2 ">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
