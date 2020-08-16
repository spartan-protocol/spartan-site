import React, { FC } from 'react'

export const FeaturesSection: FC = () => (
  <>
    <div className="container-fluid grey-bg min-h-60v pt-10vh pb-10vh">
      <div className="container">
      <h2 className="my-5 text-center ">LIQUIDITY POOLS</h2>
        <div className="row">
          <div className="col-lg-6 min-h-40v">
            <div className="col-12 pt-5vh">
              <img className="img-fluid" src={require('assets/spartan-pools.png')} />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="col-12 desc-paragraph">
              <p>The heart of the Spartan Protocol are its incentivised liquidity pools, driving on-market capital formation. </p>
              <p>The liquidity pools are facilitated by an automated-market-maker (AMM) algorithm with liquidity-sensitive fees.  </p>
              <p>Liquidity-sensitive fees ensure the system can sense correct asset purchasing power at all times, allowing scalable and risk-tolerant growth.</p>
            </div>
            <div className="row my-5">
              <div className="col-12 py-1">
                <h5>
                  {/* <a href="https://app.bepswap.com" target="_blank" style={{ color: '#53AEE2' }}>
                    LEARN MORE
                  </a> */}
                </h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="container-fluid lgrey-bg min-h-60v pt-10vh pb-10vh" id="STAKE">
      <div className="container">
      <h2 className="my-5 text-center ">SYNTHETIC ASSET GENERATION</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="container  desc-paragraph">
              <p>The Spartan Protocol allows the generation of synthetic assets, using price anchors offered by its own liquidity pools, collaterised by liquidity pool shares. </p>
              <p>Liquidity pool shares are on-market, value-stabilised and can be instantly liquidated. </p>
              <p>Liquidity-sensitive fees ensure positions taken up scale with the depth of available liquidity, preventing deleveraging spirals common to other systems.</p>
            </div>
            <div className="row my-5">
              <div className="col-12 py-1 mx-1">
                <h5>
                  {/* <a
                    href="https://app.bepswap.com/pool/stakingintro"
                    target="_blank"
                    style={{ color: '#53AEE2' }}
                  >
                    LEARN MORE
                  </a> */}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-10vh text-center">
            <div className="container">
              <div className="col">
                <img className="img-fluid" src={require('assets/synthetics.png')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid grey-bg min-h-60v pt-10vh pb-10vh" id="NODE">
      <div className="container">
      <h2 className="my-5  text-center ">LENDING AND DERIVATIVES</h2>
        <div className="row">
          <div className="col-lg-6 my-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <img className="img-fluid" style={{ width: 200 }} src={require('assets/lending.png')} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="col-12 desc-paragraph">

              <p>Synthetic asset minters are short the value of the asset, and long the value of their collateral. By winding up their position, they can achieve leverage. The opposite is also true for those wishing to leverage long an asset.</p>
              <p>Lending is possible using a system of fees and collaterised debt.</p>
              <p>Liquidations of unhealthy positions are done instantly via liquidity pools, ensuring the system is always safe. </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default FeaturesSection
