import React from 'react';

const Navbar= ({ title }) => (
  <div>
    <h1>{title}</h1>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/favoriteThings">Favorite Things</a>
  </div>
);

export default Navbar;