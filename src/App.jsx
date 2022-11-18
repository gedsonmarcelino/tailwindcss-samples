import { useState } from 'react';

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="card">
        <img
          className="image"
          src="https://lmpixels.com/demo/breezycv/dark/1/img/main_photo.jpg"
          width="200"
        />

        <h1 className="title">Alex Smith</h1>
        <p className="subtitle">Web Designer</p>

        <div className="social-networks">
          <a href="">
            <FaLinkedinIn />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </div>

        <button className="button">Download CV</button>

        <footer className="footer">2020 All rights reserved</footer>
      </div>
    </div>
  );
}

export default App;
