import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import reduce from "lodash/reduce";
import StoreContext from "../context/StoreContext";
const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const items = checkout ? checkout.lineItems : [];
  const total = reduce(items, (acc, item) => acc + item.quantity, 0);
  return [total !== 0, total];
};
const Navigation = ({ links, children }) => {
  const [open, setOpen] = useState(false);
  const [hasItems, quantity] = useQuantity();

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="relative z-10  bg-white  lg:max-w-2xl lg:w-full ">
        <div className="pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/img/logos/workflow-mark-on-white.svg"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    onClick={() => setOpen(true)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden md:block  md:pr-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  activeClassName="mr-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
                  className={
                    "mr-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        {hasItems && <div>{quantity}</div>}
        Cart 🛍
        {open && (
          <div x-show="open">
            <div className="rounded-lg shadow-md">
              <div className="rounded-lg bg-white shadow-xs overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/${link.handle}`}
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Navigation;
