import React from 'react'
import Nav from "./Nav";
import Company from "./Company";

const Header = ({ props }) => {
  return (
    <header>
      <Company />
      <Nav />
    </header>
  )
}

export default Header
