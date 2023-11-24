import React from 'react';
import './NavBar.scss';
import {BiSearchAlt2} from "react-icons/bi";

const NavBar = () => {
  return (
  <div className='navBarContainer'>
    <img src={require("../../../assets/images/Unsplash_Symbol.png")} alt='' />
    <form>
        <BiSearchAlt2/>
        <input type="text" required />
    </form>
    <span>Advertise</span>
    <span>Blog</span>
    <span>Unsplash</span>
    <span>Advertise</span>
    <span>Advertise</span>
    </div>
  );
};

export default NavBar;
