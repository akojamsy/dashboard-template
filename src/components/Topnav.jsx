import React, { useState } from "react";
import { BsPersonGear } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp, IoIosLogOut } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/user/authSlice";
import { useLogoutMutation } from "../redux/slice/usersApiSlice";

const Topnav = ({open, setOpen}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { data } = useSelector(state => state.auth?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ logoutApiCall ] = useLogoutMutation()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log( error)
    }
  }

  return (
    <div className="w-full bg-white border-gray-200 dark:bg-dark-primary ">
      <div className={`w-[95%] h-16 mx-auto flex justify-between items-center`}>
        <div className={` flex items-center ml-[-10px]`}>
          <HiMenuAlt3
              size={28}
              className="cursor-pointer text-dark-primary dark:text-light-primary"
              onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="user"
                className="w-9 h-9 rounded-full object-cover"
              />
              <h2 className="font-medium capitalize">{data?.username}</h2>
                {dropdownOpen ? (
                  <IoIosArrowUp
                  />
                ) : (
                  <IoIosArrowDown
                  />
                )}
            </button>
            {dropdownOpen && (
              <div className="absolute top-12 right-0 mt-2 w-40 bg-white dark:bg-dark-primary  border border-gray-200 dark:border-gray-700 rounded shadow-md">
                {/* Dropdown content goes here */}
                <a
                  href="/"
                  className="flex gap-2 items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <BsPersonGear size={18} />
                    <span>Your Profile</span>
                </a>
                <span
                  className="flex gap-2 items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={logoutHandler}
                >
                    <IoIosLogOut size={18} />
                    <span>Logout</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
)}

export default Topnav;
