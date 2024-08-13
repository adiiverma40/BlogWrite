import React from "react";
import { Link, NavLink } from "react-router-dom";
import image from '../../Images/_ba0cd2a4-1aa3-44e0-bf9b-5ea6be927a34.jpeg';
function Header() {
  return (
    <header className="text-white text-lg font-bold h-12 fraunces" style={{backgroundColor : "rgb(206, 125, 165)"}}>
        <img className="w-10 h-10 rounded-full float-start ml-12 mt-1" src={image}/>
      <div className="flex h-full  items-center justify-end">
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
