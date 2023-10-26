// pages/_app.js
import React from 'react';
import '../styles.scss';
import '../src/scss/obelisco.scss';
import '../src/scss/home/home.scss';
import '../src/scss/header/Header.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
