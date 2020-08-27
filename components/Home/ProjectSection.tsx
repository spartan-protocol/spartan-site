import React, { FC } from 'react'

export const ProjectSection: FC = () => (
  <div className="container-fluid grey-bg min-h-60v pb-10vh" id="PROJECT">
    <div className="container">
      <div className="row text-center  pt-10vh">
        <div className="col-12 pb-50">
          <h2 style={{ letterSpacing: '2.75px' }}>PROJECT</h2>
          <div
            className="bg-spartan-gradient-center"
            style={{ margin: '20px auto', height: '2px', width: '75%' }}
          />
          <h5>A decentralised effort from the community.</h5>
        </div>
      </div>
      <div className="row pt-5vh">
        <div className="col-lg-8 col-md-12">
          <div className="container desc-paragraph">
            <ul>
              <li>The project is galvanized by the communities of former Binance Chain projects.</li>
              <li>Individual token holders destroy their previous tokens to acquire $SPARTA.</li>
              <li>30 Binance Chain projects selected to participate.</li>
              <li>The project begins decentralised from Day 0; there is no official team and no treasury.</li>
              <li>The protocol is autonomous and does not need ongoing maintenance.</li>
            </ul>
          </div>
          {/* <div className="col-12 pt-5vh">
            <a
              href="https://coinmarketcap.com/currencies/spartan/"
              target="_blank"
              style={{ color: '#A80005', fontSize: '18px' }}
            >
              LEARN MORE
                  </a>
          </div> */}
        </div>
        <div className="col-lg-4 col-md-12 pt-5vh">
          <img className="img-fluid"  src={require('tokens/spartan-group.png')} />
        </div>
      </div>
    </div>
  </div>
)

export default ProjectSection
