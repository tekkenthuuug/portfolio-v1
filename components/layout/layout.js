import React from 'react';
import Head from 'next/head';
import Header from '../header/header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Developer | Maksim Pautsina</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
