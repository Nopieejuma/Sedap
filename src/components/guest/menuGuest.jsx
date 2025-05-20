import { SlBasket } from "react-icons/sl"; 

import { MdDashboardCustomize } from "react-icons/md"; 

import { NavLink } from "react-router-dom";


export default function menuGuest() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return (
    <div id="navbar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
	                    <NavLink id="menu-1" 
                        to="/"
                        className={menuClass}>
                            <MdDashboardCustomize  className="mr-4 text-xl"/>Dashboard</NavLink>
	                  </li>
                    <li>
	                    <NavLink id="menu-2" 
                        to="/Orders" className={menuClass}>
                            <SlBasket  className="mr-4 text-xl"/>Orders</NavLink>
	                  </li>
	                  {/* <li>
	                    <NavLink id="menu-3" 
                        to="/Customers"
                        className={menuClass}>
                            <IoMdPeople  className="mr-4 text-xl"/>Customers</NavLink>
	                  </li>
                      <li>
	                    <NavLink id="menu-4" 
                        to="/Error401"
                        className={menuClass}>
                            <MdReportGmailerrorred className="mr-4 text-xl"/>401 page</NavLink>
	                  </li>
                      <li>
	                    <NavLink id="menu-5" 
                        to="/Error403"
                        className={menuClass}>
                            <IoMdPeople  className="mr-4 text-xl"/>403 Page</NavLink>
	                  </li>
                      <li>
	                    <NavLink id="menu-6" 
                        to="/Error404"
                        className={menuClass}>
                            <IoMdPeople  className="mr-4 text-xl"/>404 Page</NavLink>
	                  </li>
                      <li>
	                    <NavLink id="menu-7" 
                        to="/user"
                        className={menuClass}>
                            <IoMdPeople  className="mr-4 text-xl"/>User</NavLink>
	                  </li> */}
                </ul>
            </div>
            );
        }