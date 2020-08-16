import React, { FC } from 'react'

import Logo from 'assets/spartan-logo.png'

export const Footer: FC = () => (
  <footer id="footer" className="container-fluid p-20px">
    <div className="container">
      <div className="row">
        <div className="col-md-4" style={{ height: '30px' }}>
          <img style={{ height: '30px' }} className="img-fluid" src={Logo} />
        </div>
        <div className="col-md-8">
          <div className="col-md-12  text-right" style={{ fontSize: '1.5rem' }}>
            <a href="https://twitter.com/thorchain_org" target="_blank">
              <i className="text-grey mx-10px fab fa-twitter" />
            </a>
            <a href="https://reddit.com/r/thorchain" target="_blank">
              <i className="text-grey mx-10px fab fa-reddit" />
            </a>
            <a href="https://gitlab.com/thorchain" target="_blank">
              <i className="text-grey mx-10px fab fa-gitlab" />
            </a>
            <a href="https://t.me/thorchain_org" target="_blank">
              <i className="text-grey mx-10px fab fa-telegram-plane" />
            </a>
            <a href="https://discord.gg/V6pNp8A" target="_blank">
              <i className="text-grey mx-10px fab fa-discord" />
            </a>
            <a href="https://medium.com/thorchain" target="_blank">
              <i className="text-grey mx-10px fab fa-medium" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
