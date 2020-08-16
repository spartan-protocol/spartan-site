import React, { FC } from 'react'
import Link from 'next/link'

export const HeroSection: FC = () => (
  <section id="top">
    <div className="container-fluid min-h-80v" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row" style={{ marginTop: '80px' }}>
              <h1 style={{ color: '#A80005' }}>SPARTAN PROTOCOL</h1>
              <br /><br /><br />
              <h5>A PROTOCOL FOR INCENTIVISED LIQUIDITY AND SYNTHETIC ASSETS ON BINANCE SMART CHAIN</h5>
              <br /><br />
              <p  style={{ fontSize: 20 }} className="desc-paragraph">
                The Spartan Protocol incentivises the formation of capital in liquidity pools, such that they can be used for synthetic asset generation, lending, derivatives and more.
                </p>
              <br />
            </div>
            <div className="row text-left">
              <div className="col-12" style={{ fontSize: '1.5rem' }}>
                <a href="https://spartanprotocol.org" target="_blank">
                  <i className="text-grey mx-10px fab fa-twitter" />
                </a>
                <a href="https://spartanprotocol.org" target="_blank">
                  <i className="text-grey mx-10px fab fa-reddit" />
                </a>
                <a href="https://github.com/spartan-protocol" target="_blank">
                  <i className="text-grey mx-10px fab fa-github" />
                </a>
                <a href="https://spartanprotocol.org" target="_blank">
                  <i className="text-grey mx-10px fab fa-telegram-plane" />
                </a>
                <a href="https://spartanprotocol.org" target="_blank">
                  <i className="text-grey mx-10px fab fa-discord" />
                </a>
                <a href="https://spartanprotocol.org" target="_blank">
                  <i className="text-grey mx-10px fab fa-medium" />
                </a>
              </div>
              <div className="col-12" style={{ marginTop: '40px' }}>
                <a href="https://github.com/spartan-protocol/resources/blob/master/whitepaper.pdf"
                    target="_blank"
                    style={{ color: '#A80005', fontSize: '18px' }} >
                    <div className="btn-thor">WHITEPAPER</div>
                  </a>
                <br/>
                <Link href="/sparta">
                <div className="btn-thor">GET SPARTA</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
)

export default HeroSection
