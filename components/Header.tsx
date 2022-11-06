import React from 'react'
import Logo from './common/Logo';
// import Link from 'next/link';
// import { FaSun, FaMoon, FaMusic } from "react-icons/fa";

type Props = {}

function Header({ }: Props) {
  return (
    <header className='top-navbar'>
      <Logo />

      <div className='top-navbar__items'>
        {/* <div className='top-navbar__items__item'><FaMusic/></div>
        <div className='top-navbar__items__item'><FaMoon/></div> */}
        <a href='#contact'>
          <div className='top-navbar__items__item contact-link label-2'>
            CONTACT ME
          </div>
        </a>
      </div>
      {/* Logo  */}
      {/* Contact me */}
      {/* Theme Change */}
    </header>
  )
}

export default Header;