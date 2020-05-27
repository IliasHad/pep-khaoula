import PropTypes from "prop-types";
import React from "react";
import ContextProvider from "../provider/ContextProvider";
import Navigation from "./navigation";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <ContextProvider>
      <div className="flex flex-col font-sans min-h-screen text-gray-900">
        <main>{children}</main>
      </div>
      <Footer />
    </ContextProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
