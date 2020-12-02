import React from 'react';
import Head from 'next/head';
import Header from '../header/header';

const Layout = ({ children, slide }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
