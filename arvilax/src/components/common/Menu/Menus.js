import React from "react";
import { Link } from "react-router-dom";
/* Unused for now
<li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/team-details">Team details</Link>
</li>
*/

const Menus = () => {
  return (
    <ul>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/service">Services</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <div className="link-container">
        <li className="link-text">
          <Link className="link-text" to="/contact">Let's Bloom&Rise</Link>
        </li>
      </div>
    </ul>
  );
};

/* Unused

    <li className="has-dropdown">
    
    </li>

    <li>
      <Link to="/service-details">service details</Link>
    </li>
    <li>
      <Link to="/contact">contact</Link>
    </li>
    <li>
      <Link to="/faq">Faq</Link>
    </li>

<ul className="submenu">
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/portfolio-details">Portfolio Details</Link>
          </li>
</ul>
*/
export default Menus;
