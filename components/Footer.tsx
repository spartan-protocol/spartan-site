import React, { FC } from 'react'

import Logo from 'assets/spartan-logo.png'

export const Footer: FC = () => (
  <footer id="footer" className="container-fluid p-20px" style={{ backgroundColor: '#000000'}}>
    <div className="container">
      <div className="row" >
        <div className="col-md-4" style={{ height: '30px' }}>
          <img style={{ height: '30px' }} className="img-fluid" src={Logo} />
        </div>
        <div className="col-md-8">
          <div className="col-md-12  text-right" style={{ fontSize: '1.5rem' }}>
          <a href="https://twitter.com/SpartanProtocol" target="_blank">
                  <i className="text-grey mx-10px fab fa-twitter" />
                </a>
                <a href="https://www.reddit.com/user/Spartan_Protocol" target="_blank">
                  <i className="text-grey mx-10px fab fa-reddit" />
                </a>
                <a href="https://github.com/spartan-protocol" target="_blank">
                  <i className="text-grey mx-10px fab fa-github" />
                </a>
                <a href="https://t.me/SpartanProtocolOrg" target="_blank">
                  <i className="text-grey mx-10px fab fa-telegram-plane" />
                </a>
                <a href="https://discord.gg/vqWaYN3" target="_blank">
                  <i className="text-grey mx-10px fab fa-discord" />
                </a>
                <a href="https://medium.com/@spartanprotocol" target="_blank">
                  <i className="text-grey mx-10px fab fa-medium" />
                </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
