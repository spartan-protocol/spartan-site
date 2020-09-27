import React, { FC } from 'react'

import Logo from 'assets/spartan-logo.png'

export const Header: FC = () => (
  <nav id="mainNav" className="navbar navbar-expand-lg">
      <div className="row" style={{ width:'100%'}}>
        <div className="col-md-4 vert-mid">
          <a href="/"><img className="top-brand col-md-12" src={Logo} /></a>
        </div>
        <div className="col-md-4 text-center disp-flex vert-mid">
          <a className="col-md-8" href="/faq">FAQs</a>
          <a className="col-md-8" href="https://spartanswap.org/">GET SPARTA</a>
        </div>
        <div className="col-md-4 text-right vert-mid">
        <a href="https://twitter.com/SpartanProtocol" target="_blank">
                <i className="text-grey mx-10px fab fa-twitter" />
              </a>
              <a href="https://www.reddit.com/r/SpartanProtocol" target="_blank">
                <i className="text-grey mx-10px fab fa-reddit" />
              </a>
              <a href="https://github.com/spartan-protocol" target="_blank">
                <i className="text-grey mx-10px fab fa-github" />
              </a>
              <a href="https://t.me/SpartanProtocolOrg" target="_blank">
                <i className="text-grey mx-10px fab fa-telegram-plane" />
              </a>
              <a href="https://medium.com/@spartanprotocol" target="_blank">
                <i className="text-grey mx-10px fab fa-medium" />
              </a>
        </div>
      </div>
  </nav>
)

export default Header
