import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {BlogContext} from '../Context/UserContext.jsx'

function Navbar() {
  const {Blogs,setBlogs} = useContext(BlogContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    localStorage.setItem('Blogs', JSON.stringify(Blogs));
  }, [Blogs])
  

  return (
    <div className="bg-blue-500 w-screen p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="text-white text-2xl font-bold">Logo</div>

        <div className="hidden md:flex space-x-6 text-white text-lg">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/all-blog"
          >
            All Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/create-blog"
          >
            Write a Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/about"
          >
            About Us
          </NavLink>
        </div>

        <div className="hidden md:block text-white">
          <NavLink className="hover:text-blue-300" to="/login">
            Sign up / Login
          </NavLink>
        </div>

        <div className="md:hidden text-white text-xl">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 text-white text-lg md:hidden">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/all-blog"
            onClick={() => setIsMenuOpen(false)}
          >
            All Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/create-blog"
            onClick={() => setIsMenuOpen(false)}
          >
            Create Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-black font-semibold " : ""
              } hover:text-blue-300`
            }
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            className="hover:text-blue-300"
            to="/login"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign up / Login
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
