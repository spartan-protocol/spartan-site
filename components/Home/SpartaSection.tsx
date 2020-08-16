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
          <h5>A programmable incentive asset, fixed in supply, emitted for participation.</h5>
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
                <li>A programmable incentive asset with a reward stream. </li>
                <li>Initial supply of 100 million distributed to a minimum of 9000 members from 30 selected Binance Chain projects using Proof-of-Burn.</li>
                <li>Daily liquidity incentives beginning at 30% APY reducing over 10 years.</li>
                <li>Maximum supply of 300 million.</li>
              </ul>
            </div>
          </div>
          <div className="col-12 pt-5vh">
            <Link href="/sparta">
            <div className="btn-thor">GET SPARTA</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SpartaSection
