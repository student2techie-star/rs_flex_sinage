import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from '../Cursor';

const Layout = ({ children }) => {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
