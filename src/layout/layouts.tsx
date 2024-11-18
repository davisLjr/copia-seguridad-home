import React from 'react';

import  Header  from './components/headerHome/Header';
import  Footer  from './components/footerHome/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <h1 style={{ opacity: 0, height: '1px' }} >Neitrys Barrera</h1>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
