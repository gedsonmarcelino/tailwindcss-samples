import React from 'react';

export const Profile = () => {
  return (
    <div className="container">
      <div className="bg-black text-white px-4 py-4">
        <h1 className="">Alex Smith</h1>
        <p>Web Designer</p>

        <div className="social-networs">
          <a href="">linkedin</a>
          <a href="">facebook</a>
          <a href="">twitter</a>
        </div>

        <button>Download CV</button>

        <footer>2020 All rights reserved</footer>
      </div>
    </div>
  );
};
