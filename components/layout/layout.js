import React from 'react';
import Head from 'next/head';
import Header from '../header/header';
import FixedLinks from '../fixed-links/fixed-links';
import SectionNavigation from '../section-navigation/section-navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SectionNavigation />
      {children}
      <FixedLinks />
    </div>
  );
};

export default Layout;
