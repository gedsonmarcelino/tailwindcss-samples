import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './index.css';

export const Profile = () => {
  return (
    <div className="page-profile">
      <div className="card">
        <Link to="/">
          <img
            className="image"
            src="https://lmpixels.com/demo/breezycv/dark/1/img/main_photo.jpg"
            width="200"
          />
        </Link>

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
};
