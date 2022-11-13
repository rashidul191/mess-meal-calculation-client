import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const logout = () => {
    signOut(auth);
  };
  const menu = (
    <>
      <li>
        <a href="/home">Home</a>
      </li>

      <li>
        <a href="/add-member">Add Member</a>
      </li>

      <li>
        <a href="/add-meal">Add Meal</a>
      </li>
    </>
  );
  return (
    <section>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Meal Calculation
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            {user ? (
              <button onClick={logout} className="btn btn-error text-white">
                Log out
              </button>
            ) : (
              <ul className="btn btn-primary">
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
              </ul>
            )}

            {/* {user ? (
              <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://placeimg.com/80/80/people"
                      alt="profile"
                    />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="btn btn-error text-white"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <NavLink to={"/login"}>Login</NavLink>
            )}

             */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
