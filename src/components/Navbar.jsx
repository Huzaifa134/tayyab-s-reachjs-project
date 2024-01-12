import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../static/css/index.css'
import { useAuth } from "../context/auth"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import userpicture from '../assets/userpicture.png'
import hosting from '../assets/hosting-icon-2.svg'
import hosting1 from '../assets/hosting-icon-3.svg'
import hosting2 from '../assets/hosting-icon-4.svg'
import hosting3 from '../assets/hosting-icon-5.svg'


function Navbar() {
  const navigate = useNavigate()
  const [client_id, setClient_id] = useState('');
  const [auth, setAuth] = useAuth()
  const [showClientIdField, setShowClientIdField] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
  const [searchQuery, setSearchQuery] = useState(''); // State for search query



  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    })
    localStorage.removeItem('clientid')
    localStorage.removeItem('auth')
    navigate('/')
  }

  const handleCreateSsoToken = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://comweb-backend.onrender.com/createSsoToken', { client_id: auth?.user?.client_id }
      );
      const redirectUrl = response.data.redirect_url;
      setToken(redirectUrl);
      // Open the redirected URL in a new tab
      window.location.href = redirectUrl;
    } catch (error) {
      setError("Failed to create SSO token. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="fixed z-50 bg-white w-full" style={{ zIndex: '1000' }}>
      <nav className=" dark:bg-gray-900 2xl:container 2xl:mx-auto md:px-10 lg:px-10 xl:px-44 hosting-small-fold px-lg-4" >
        <div className="container child-nav flex flex-wrap items-center justify-between">
          <Link to={'/'} className="flex  items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold mr-10 whitespace-nowrap dark:text-white small-fold">D-Tech</span>
          </Link>
          <>
            {!auth.user && (
              <>
                <li className=" list-none ml-24 mr-0 small-fold-login">
                  <Link to={'/login'} className="bg-blue-500 lg:hidden block hover:bg-blue-600  text-white font-semibold rounded-md transition duration-300 ease-in-out py-2 px-2 w-full">
                    Login
                  </Link>
                </li>
              </>
            )}

            <div className="login-right rounded flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverserounded-l">


              <div className="hidden w-full md:block md:w-auto px-lg-5" id="navbar-default">
                <ul className="flex flex-col  font-medium md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">

                  <li>
                    <Link to={'/'} className=" block margin-links md:p-0">
                      <i class="mision-fision-icons fas fa-home fs-2 home-icon-nav"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/about'} className="link-li block margin-links md:p-0">About</Link>
                  </li>
                  <li>
                  <Link to={'/hosting'} > <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="link-li block margin-links md:p-0 flex items-center  justify-between w-full py-2 px-3 md:w-auto ml-4 margin-links">  Hosting
                      <svg className="ml-1 w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                      </svg>
                    </button> </Link>
                    {/* Dropdown menu */}
                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100  rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                        {/* <li>
                          <Link to={'/hosting'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hosting</Link>
                        </li> */}
                        <li>
                          <Link to={'/hosting/shared-hosting'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shared Hosting</Link>
                        </li>
                        <li>
                          <Link to={'/hosting/web-development'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Web Development</Link>
                        </li>
                        <li>
                          <Link to={'/hosting/business-hosting'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Control Panel</Link>
                        </li>

                        <li>
                          <Link to={'/hosting/Plesk-Hosting'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Plesk Hosting</Link>
                        </li>

                        <li>
                          <Link to={'/hosting/Re-Hosting'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Re-Hosting</Link>
                        </li>

                      </ul>
                    </div>
                  </li>
                  {/* <li>
                    <Link to={'/WebDevelopment'} className="link-li block margin-links md:p-0">Web Development</Link>
                  </li> */}
                  <li>
                    <Link to={'/services'} className="link-li block margin-links md:p-0">Services</Link>
                  </li>
                  <li>
                    <Link to={'/getproducts'} className="link-li block margin-links md:p-0">Products</Link>
                  </li>

                </ul>
              </div>

              {auth.user && (
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm w-full cursor-pointer fs-5 text-white font-sans login-icon login-largy"
                >
                  Logout
                </button>
              )}
              {!auth.user && (
            <li className="sm:hidden small-fold-btn block lg:block">
              <Link to={'/login'} className="login-large margin-links  text-white font-semibold rounded-md transition duration-300 ease-in-out py-2 px-2 w-full">
             
                <button className="login-icon login-largy">Login <i class="fas fa-sign-in-alt"></i></button>


              </Link>
            </li>
          )}



              {/* <button type="button" className="flex items-center" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>

                {auth.user && (
                  <li className=" list-none">
                    <span className="fs-4 text-uppercase font-sans"><h1> <i class='fas'>&#xf406;</i> </h1></span>
                  </li>
                )}
              </button> */}

              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>

            {/* <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              {auth.user && (
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">{auth?.user?.firstname || 'Name'}</span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{auth?.user?.email || 'Email'}</span>
                </div>
              )} */}

            {/* {auth.user && (
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <button
                      onClick={handleCreateSsoToken}
                      className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Billing Portal
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )} */}

            {/* </div> */}

          </>
          {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col  font-medium md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">

              <li>
                <Link to={'/'} className=" block margin-links md:p-0">
                  <i class="fas fa-home fs-2 home-icon-nav"></i>
                  </Link>
              </li>
              <li>
                <Link to={'/about'} className="link-li block margin-links md:p-0">About</Link>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="link-li block margin-links md:p-0 flex items-center  justify-between w-full py-2 px-3 md:w-auto ml-4 margin-links">Hosting
                  <svg className="ml-1 w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
                </button>
            
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100  rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link to={'/hosting'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hosting</Link>
                    </li>
                    <li>
                      <Link to={'/hosting/shared-hosting'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shared Hosting</Link>
                    </li>
                    <li>
                      <Link to={'/hosting/unlimited-hosting'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Unlimited Hosting</Link>
                    </li>
                    <li>
                      <Link to={'/hosting/business-hosting'} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Business Hosting</Link>
                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <Link to={'/services'} className="link-li block margin-links md:p-0">Services</Link>
              </li>
              <li>
                <Link to={'/getproducts'} className="link-li block margin-links md:p-0">Products</Link>
              </li>

            </ul>
          </div> */}

          {/* {!auth.user && (
            <li className="sm:hidden small-fold-btn block lg:block ">
              <Link to={'/login'} className="login-large ml-32 margin-links  text-white font-semibold rounded-md transition duration-300 ease-in-out py-2 px-2 w-full">
             
                <button className="login-icon login-largy">Login <i class="fas fa-sign-in-alt"></i></button>


              </Link>
            </li>
          )} */}

        </div >
      </nav >

    </div>

  );
}

export default Navbar;