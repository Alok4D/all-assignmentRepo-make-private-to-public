import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth-Provider/AuthProvider";

const links = (
  <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/listedBooks">About Us</NavLink></li>
    <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
  </>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="navbar bg-base-100 w-[100%] m-auto lg:mt-[68px] mt-6 lg:w-[88%] mx-auto">
      <div className="navbar-start max-sm:w-[45%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] lg:p-2 shadow bg-base-100 rounded-box lg:w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-red-500 font-extrabold lg:text-[32px] cursor-pointer">
          Industrial
        </a>
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="lg:navbar-end lg:gap-4 gap-2 ">
        
        {user ? (
          <div className="flex gap-4 justify-center items-center">
            <img className="border rounded-full h-[45px]" src={user.photoURL} />
            <button onClick={() => logOut()} className="btn btn-secondary">Log Out</button></div>) : 
            (<Link to="/login"><a className="btn btn-success">Login</a></Link>)}
      </div>
    </div>
  );
};

export default Navbar;
