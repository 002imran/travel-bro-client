import { useState } from "react";
import Logo from '../../../assets/images/travel-bro-logo.png';

const Header=()=> {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-purple-700 shadow text-2xl py-3">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <p href="">
              {/* <h2 className="text-2xl font-bold text-white"> */}
                <img src={Logo} alt="" className="h-14 w-14 rounded-full cursor-pointer"/>
              {/* </h2> */}
            </p>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                       1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 
                       01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
              <li className="text-white hover:text-indigo-200">
              <p href="">Home</p>
              </li>
              <li className="text-white hover:text-indigo-200">
              <p href="">Blog</p>
              </li>
              <li className="text-white hover:text-indigo-200">
              <p href="">About</p>
              </li>
              <li className="text-white hover:text-indigo-200">
              <p href="">Contact</p>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
            <p
                href=""
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </p>
           
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
        <p
            href=""
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
          >
            Login
          </p>
      
        </div>
      </div>
    </nav>
  );
}

export default Header;