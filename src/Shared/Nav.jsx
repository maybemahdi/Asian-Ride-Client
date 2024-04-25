import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#a93fda] text-[#a93fda] border-[#a93fda] no-underline bg-white"
              : "text-black no-underline"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#a93fda] text-[#a93fda] border-[#a93fda] no-underline bg-white"
              : "text-black no-underline"
          }
          to={"/all-tourist-spot"}
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#a93fda] text-[#a93fda] border-[#a93fda] no-underline bg-white"
              : "text-black no-underline"
          }
          to={"/add-tourist-spot"}
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#a93fda] text-[#a93fda] border-[#a93fda] no-underline bg-white"
              : "text-black no-underline"
          }
          to={"/my-list"}
        >
          My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-5">
      <div className="navbar-start">
        <div className="dropdown -ml-8">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="md:text-2xl text-xl w-fit font-bold">Asian Ride</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="md:flex gap-4 hidden">
          <Link
            to={"/login"}
            className="bg-[#a93fda] no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-white hover:bg-[#9230c0]"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="bg-[#a93fda] no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-white hover:bg-[#9230c0]"
          >
            Register
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
