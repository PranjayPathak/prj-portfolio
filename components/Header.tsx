import React from 'react'
import Logo from './Logo';
import { FaSun, FaMoon, FaMusic } from "react-icons/fa";

type Props = {}

function Header({ }: Props) {
  return (
    <header  className='top-navbar'>
      <Logo />

      <div className='top-navbar__items'>
        <div className='top-navbar__items__item'><FaMusic/></div>
        <div className='top-navbar__items__item'><FaMoon/></div>
        <div className='top-navbar__items__item'>Contact me</div>
      </div>
      {/* Logo  */}
      {/* Contact me */}
      {/* Theme Change */}
    </header>
  )
}

export default Header;