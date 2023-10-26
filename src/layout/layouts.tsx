import React from 'react';

import  Header  from './components/headerHome/Header';
import  Footer  from './components/footerHome/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
