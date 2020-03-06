import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main >
        {children}
      </main>

    </div>
        <Footer />
        </>

  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
