import React, { FC } from 'react'

// import Logo from 'assets/spartan-logo.png'

export const Header: FC = () => (
  <nav id="mainNav" className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" style={{ maxWidth: '40%' }}>
        {/* <img className="top-brand" src={Logo} /> */}
      </a>
    </div>
  </nav>
)

export default Header
