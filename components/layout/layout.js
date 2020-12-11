import React from 'react';
import Head from 'next/head';
import Header from '../header/header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Maksim Pautsina - Web Developer</title>
        <meta
          name='description'
          content="An ambitious second-year Computer Science student with commercial
          experience of working in software development field. I'm passionate
          about Web Development and Teamwork"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
