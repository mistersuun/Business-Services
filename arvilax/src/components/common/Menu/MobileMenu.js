import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {

  const navStyle = {
    top: '-80px'
  }
  return (
    <>
      <div className=" col-lg-7 col-md-4 d-none d-md-block" style={navStyle}>
        <div className="main-menu text-center">
          <nav id="mobile-menu mobile-menu-area" >
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Let's Bloom&Rise</Link>
              </li>
              {/*<div className="link-container">
                <li className="link-text">
                  <Link className="link-text" to="/contact">Let's Bloom&Rise</Link>
                </li>
              </div>*/}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
