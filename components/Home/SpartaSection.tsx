import React, { FC } from 'react'
import Link from 'next/link'

export const SpartaSection: FC = () => (
  <div className="container-fluid lgrey-bg min-h-60v pb-10vh" id="RUNE">
    <div className="container">
      <div className="row text-center  pt-10vh">
        <div className="col-12 pb-50">
          <h2 style={{ letterSpacing: '2.75px' }}>$SPARTA</h2>
          <div
            className="bg-spartan-gradient-center"
            style={{ margin: '20px auto', height: '2px', width: '75%' }}
          />
          <h5>A programmable incentive token, fixed in supply, emitted for participation.</h5>
        </div>
      </div>
      <div className="row pt-5vh">

        <div className="col-lg-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <img className="img-fluid" style={{ width: 200 }} src={require('assets/supply-circle.png')} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="col-12">
            <div className="container desc-paragraph">
              <ul>
                <li>A programmable incentive token with a reward stream. </li>
                <li>Initial supply of 100 million distributed using Proof-of-Burn & Bond+Mint.</li>
                <li>Daily liquidity incentives beginning at 30% APY reducing over 10 years.</li>
                <li><a href="https://medium.com/spartanprotocol/sparta-token-distribution-a327ee09e95b" target='blank'>Maximum supply of 300 million.</a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 pt-5vh">
            <a href="https://coinmarketcap.com/currencies/spartan-protocol/"
              target="_blank"
              style={{ color: '#C7692B', fontSize: '18px' }} >
              <div className="btn-thor">VIEW ON CMC</div>
            </a>
            <br />
            <a href="https://pools.spartanprotocol.org/"
              target="_blank"
              style={{ color: '#C7692B', fontSize: '18px' }} >
              <div className="btn-thor">SWAP SPARTA</div>
            </a>
            <br />
            <a href="https://www.binance.com/en/trade/SPARTA_BNB"
              target="_blank"
              style={{ color: '#C7692B', fontSize: '18px' }} >
              <div className="btn-thor">BUY SPARTA<img src="./Binance-Horizontal.svg"></img></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SpartaSection
