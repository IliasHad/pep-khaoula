import React from "react";
import { Link } from "gatsby";
const Footer = () => {
  return (
    <footer className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl">Pepiniere Khaoula</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Servir des produits de bonne qualité depuis 1999.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Liens rapides{" "}
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to="/product"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contactez Nous
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Nos Collections
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Nos Réseaux Sociaux{" "}
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Twitter
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Contactez Nous
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="tel:(212)-615626671"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Tel: +212615626671
                </a>
              </li>
              <li className="mt-2 ">
                <a
                  href="https://www.google.com/maps/place/Pepini%C3%A9re+Khaoula+%D9%85%D8%B3%D8%AA%D9%86%D8%A8%D8%AB+%D8%AE%D9%88%D9%84%D8%A9%E2%80%AD/@34.2140913,-6.6676767,15z/data=!4m2!3m1!1s0x0:0xc1cf87c929f6bbdb?sa=X&ved=2ahUKEwj43KOst-PpAhWvAGMBHSC0DIcQ_BIwE3oECBgQCA"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Adresse: 10 Km Route De Rabat - Kénitra
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 — Pepiniere Khaoula
            <a
              href="https://twitter.com/iliashaddad3"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Build with @iliashaddad3
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
