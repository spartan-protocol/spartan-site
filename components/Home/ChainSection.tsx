import React, { FC } from 'react'

export const RuneSection: FC = () => (
  <div className="container-fluid lgrey-bg min-h-60v pb-10vh" id="RUNE">
    <div className="container">
      <div className="row text-center  pt-10vh">
        <div className="col-12 pb-50">
          <h2 style={{ letterSpacing: '2.75px' }}>BINANCE SMART CHAIN</h2>
          <div
            className="bg-spartan-gradient-center"
            style={{ margin: '20px auto', height: '2px', width: '75%' }}
          />
          <h5>A bet on the future economic value of the Binance DeFi Ecosystem</h5>
        </div>
      </div>
      <div className="row pt-5vh">

        <div className="col-lg-4">
          <div className="container pt-10vh">
            <div className="row">
              <div className="col">
                <img className="img-fluid" style={{ width: 200 }} src={require('assets/bsc.png')} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="col-12">
            <div className="container desc-paragraph">
              <ul>
                <li>The project is a directional bet on Binance Smart Chain. Do not acquire $SPARTA if you do not subscribe to this direction.</li>
                <li>Binance Smart Chain is an EVM-compatible delegated-PoS blockchain, with fast (3-sec) blocktimes, good developer support and sufficient decentralisation.</li>
                <li>The BEP2 token community is second only to the ERC-20 community, and all can be linked to Binance Smart Chain. </li>
                <li>This project may fail, despite best attempts. Know the risks. </li>
              </ul>
            </div>
          </div>
          <div className="col-12 pt-5vh">
            <a
              href="https://www.binance.org/en/smartChain"
              target="_blank"
              style={{ color: '#C7692B', fontSize: '18px' }}
            >
              LEARN MORE
                  </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RuneSection
