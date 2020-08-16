import React, { FC } from 'react'

import Link from 'next/link'

export const SpartaSection: FC = () => (
  <div className="container-fluid grey-bg min-h-60v pb-10vh" id="RUNE">
    <div className="container">
      <br/>
      <Link href="/">
        <a style={{ color: '#A80005', fontSize: '20px' }}>
          BACK
                  </a>
      </Link>

      <div className="container-fluid grey-bg min-h-60v pb-10vh" id="STAKE">
        <div className="container">
          <h2 className="my-5">ACQUIRING SPARTA</h2>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="container  desc-paragraph">
                <p>Sparta’s Initial Distribution is via Proof-of-Burn. Participants burn their previous assets in order to acquire a share of 100,000,000 $SPARTA. </p>
                <p>The remaining 200,000,000 $SPARTA is emitted to participants for the provision of liquidity in liquidity pools via a supply-responsive emission schedule. </p>
                <p>A protocol fee-burn ensures 300,000,000 is never reached, and eventually fees will offset emissions. </p>
              </div>
              <div className="row my-5">
                <div className="col-12 py-1 mx-1">

                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="container">
                <div className="col">
                  <img className="img-fluid" src={require('assets/spartan-coin.png')} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-10vh  text-center">
            <div className="container">
              <div className="col">
                <img className="img-fluid" src={require('assets/graph.png')} />
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-10vh">
            <div className="container">
                <img className="img-fluid" src={require('assets/allocation.png')} />
            </div>
          </div>
          <div className="col-lg-12 pt-10vh">
          <div className="container  text-center desc-paragraph">
                <p>All burnt assets will be sent to the 0x0 address on Binance Smart Chain and will be forever destroyed. </p>
                <p>The SPARTA contract will mint the respective amount of assets, and send to the claimant’s address, on a first-come-first-serve basis. </p>
                <p>Do not acquire SPARTA unless you intend to forever destroy your previous assets and participate in the SPARTAN Protocol.  </p>
                <p>If all assets are burnt, then SPARTA will have absorbed roughly $30m in capital.</p>
              </div>
          </div>
        </div>
      </div>


    </div>
  </div>
)

export default SpartaSection
