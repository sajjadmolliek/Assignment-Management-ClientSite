import { BsPersonCircle } from "react-icons/Bs";
import { Link, NavLink } from "react-router-dom";
import useCustomeHook from "../../Hooks/useCustomeHook";
import logo from "../../assets/logo.png";
import { useState } from "react";


const Navbar = () => {
  const { user, logOut } = useCustomeHook();
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logOut();
  };
  const userName = user?.displayName;

  const navitems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FE834C] font-bold underline"
              : "text-black font-bold"
          }
          to={"/"}
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
              ? "text-[#FE834C] font-bold underline"
              : "text-black font-bold"
          }
          to={"/All-Assignment"}
        >
          All Assignment
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FE834C] font-bold underline"
                  : "text-black font-bold"
              }
              to={"/Create-Assignment "}
            >
              Create Assignment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FE834C] font-bold underline"
                  : "text-black font-bold"
              }
              to={"/My-Assignment"}
            >
              My Assignment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FE834C] font-bold underline"
                  : "text-black font-bold"
              }
              to={"/Submitted-Assignment"}
            >
              Submitted Assignment
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );


  return (
    <div className="bg-[#FE834C33]">
      <div className="w-[95%] mx-auto">
        <div className="navbar col-span-1 justify-center ">
          <div className="navbar-start gap-2 md:gap-4 lg:w-[40%]">
            <div className="dropdown  ">
              <div onClick={handleToggle}>

              <label
              onClick={handleToggle}
                tabIndex={0}
                className=" text-[#FE834C]  lg:hidden"
              >
               
                {!toggle ? (
                  <>
                    <h1 className="text-xl">X</h1>
                  </>
                ) : (
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
                )}
              </label>
              </div>
              {!toggle ? (
                <ul
                  tabIndex={0}
                  className=" bg-[#f9e4e4] menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-56 h-60 space-y-3"
                >
                  {navitems}

                  <div className="flex items-center">
                    {user != null ? (
                      <button className="px-3 py-2 rounded-lg mx-3  text-white border-[2px] border-[#FE834C] bg-[#FE834C]">
                        {userName}
                      </button>
                    ) : (
                      ""
                    )}
                    {user != null ? (
                      user?.photoURL ? (
                        <img
                          className="w-[20%] rounded-full mr-2 border-0"
                          src={user.photoURL}
                          alt="User"
                        />
                      ) : (
                        <BsPersonCircle className="text-2xl mr-2 border-0"></BsPersonCircle>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </ul>
              ) : (
                <></>
              )}
            </div>
            <NavLink to={"/"}>
              <div className="flex lg:justify-start items-start">
                <img
                  className="w-[35%] md:w-[20%] inline"
                  src={logo}
                  alt="logo"
                />
              </div>
            </NavLink>
          </div>
          <div className="navbar-start col-span-3 justify-center hidden lg:flex lg:w-full">
            <ul className=" flex gap-6 px-1 text-[16px]">{navitems}</ul>
          </div>
          <div className="navbar-end">
            {user != null ? (
              user?.photoURL ? (
                <img
                  className={`w-[20%] md:w-[10%] border-0 rounded-full mr-3`}
                  src={user.photoURL}
                  alt="User"
                />
              ) : (
                <BsPersonCircle className="text-4xl border-0 mr-3"></BsPersonCircle>
              )
            ) : (
              ""
            )}
            {user != null ? (
              <button className="btn hidden lg:flex mr-1 text-white border-[2px] border-[#FE834C] bg-[#FE834C]">
                {userName}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="navbar-center">
            {user != null ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm md:btn-md text-white border-[2px] border-[#FE834C] bg-[#FE834C]"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/logins"}
                className="btn btn-sm md:btn-md text-white border-[2px] border-[#FE834C] bg-[#FE834C]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
