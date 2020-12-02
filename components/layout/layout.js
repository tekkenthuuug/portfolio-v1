import React from 'react';
import Head from 'next/head';
import Header from '../header/header';
import FixedLinks from '../fixed-links/fixed-links';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
      <FixedLinks />
    </div>
  );
};

export default Layout;
