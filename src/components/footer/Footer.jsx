import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="absolute z-50 w-screen bg-gray-800 text-white text-center py-4 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <NavLink to="/" className="text-white font-bold ml-10 text-lg">
              BlogWrite
            </NavLink>
          </div>
          <div className="mb-4 md:mb-0">
            <ul className="flex justify-center">
              <li className="mx-2">
                <NavLink to="/about" className="text-white hover:text-gray-400">
                  About
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/" className="text-white hover:text-gray-400">
                  Contact
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/" className="text-white hover:text-gray-400">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/" className="text-white hover:text-gray-400">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-gray-400">
            &copy; 2024 BlogWrite. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
