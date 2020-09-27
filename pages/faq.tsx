import React, { FC } from 'react'

import Link from 'next/link'

export const SpartaSection: FC = () => (
  <div className="container-fluid grey-bg min-h-60v pb-10vh" id="RUNE">
    <div className="container">
      <br/>
      <Link href="/">
        <a style={{ color: '#C7692B', fontSize: '20px' }}>
        &lt;&lt; BACK
                  </a>
      </Link>

      <div className="container-fluid grey-bg min-h-60v pb-10vh" id="STAKE">
        <div className="container">
          <h1 className="my-5 faq-q">Community Curated FAQs</h1>
          <h4 className="my-5">Ask us your 'burning’ questions</h4>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="schema-faq-code">
                <div className="faq-question">
                    <h3 className="faq-q">What is Spartan Protocol?</h3>
                    <div>
                         <p className="faq-a">The Spartan Protocol is a wholesome and complete protocol that allows the safe growth of synthetic assets, lending markets and for all assets to be liquid and productive.
              </p><p>A small amount of governance is necessary to manage the upgrading of contracts and the tweaking of some of the protocol’s parameters.
              </p><p>The governance process is at-risk as such that there is a direct link between healthy and effective governance and the value of exposed collateral.
              </p><p>The Spartan Protocol borrows ideas for UniSwap, THORChain, Synthetix, MakerDAO and Vader/Vether Protocol, but will be launched on Binance Smart Chain as its own separate protocol.</p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Who are the founders?</h3>
                    <div>
                         <p className="faq-a">The project is galvanized by communities of former Binance Chain projects. The project begins decentralised from day 0; there is no official team and no treasury.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Is the team anonymous?</h3>
                    <div>
                         <p className="faq-a">Yes, the Spartan Protocol is a community driven initiative with a wide and varied source of contributors. It draws inspiration from Thorchain and other projects that elected to go anonymous in line with the world’s most known token, Bitcoin.
              </p><p>This is done to protect the project and it’s users to assist in ensuring it can be more decentralised from its outset. The focus should be on the project, its code and the community that drives it, these are transparent and verifiable.
              </p><p>Don’t trust, verify!
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">No airdrop — No founder/team tokens — No presale</h3>
                    <div>
                         <p className="faq-a">Zero, none, nada — Like the 300 Spartans that held Hells Gate, the team believe in the true intent of DeFi to provide open solutions for all on an equal playing field.
              </p><p>The only way for anyone to have access to SPARTA tokens is by burning selected BEP20 tokens. This applies to everyone, there are no advantages given here. The Spartans believe the token will accrue value through genuine use and not through gimmicks.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Why!? How can something be built without treasury and hierarchy?!</h3>
                    <div>
                         <p className="faq-a">It’s a community give back. Spartan Protocol are not trying to scam or get rich quick off the back of this. SP believes that this is a great way to attract holders of other tokens that may be looking for a way out or looking for some staking benefits not necessarily available to them currently. There are various reasons. If it works, everyone should be rewarded and come out on top.
              </p><p>The most important component of SP is that the team doesn’t have FREE skin in the game — if they want Sparta, they burn as well. There are no presale or private sale allocations waiting to be dumped. That seems to be the general MO for a rug pull, so it’s good to know this is not a risk-variable of this project.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">I see this is a community project, so how can I contribute or influence the direction of Spartan Protocol?</h3>
                    <div>
                         <p className="faq-a">When the protocol is launched, all token holders have the power to vote on changes within the network by partaking in the DAO governance launching soon there-after. Every token holder has a voice.
              </p><p>Right now you can contribute by being a part of these community channels and asking good questions. What is said in these channels directly influences what happens leading up to launch as each of you are a part of the decentralised team.
              </p><p>If you are a developer please feel free to contribute to the open source project at <a href="https://github.com/spartan-protocol">Github</a>.
              </p><p>If you are not, contribute your words or put your hand up for other jobs in the community channels at the bottom of this page. This FAQ was curated by the community, many hands make light work!
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">How do I obtain SPARTA tokens?</h3>
                    <div>
                         <p className="faq-a">Spartan Protocol starts decentralised from day one. To acquire SPARTA you will need to send your tokens through a smart contract on the Spartan Protocol DApp. The tokens you send through this contract will be ‘burnt’.
              </p><p>Your tokens will be sent to a this burn address (<a href="https://bscscan.com/address/0x000000000000000000000000000000000000dead">0x000000000000000000000000000000000000dEaD</a>) and will no longer be usable by anyone. The smart contract will then send your freshly minted SPARTA of equivalent value to your BSC address once the old tokens have been confirmed burned.
              </p><p>There is minimal wait compared to smart contracts on Ethereum, most processes take only 1–5 seconds.</p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">So do I need to buy coins to get tokens?</h3>
                    <div>
                         <p className="faq-a">Not necessarily; to obtain SPARTA tokens you will need to have BEP20 tokens from the chosen projects to burn in exchange for SPARTA.
              </p><p>There might be some you already own, some you already hold, some you want to sell but can’t get the right price, or some that you decide to acquire deliberately for the purpose of getting Sparta.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Why is burning the collateral necessary, can’t we donate it somewhere or use the funds as a treasury?</h3>
                    <div>
                         <p className="faq-a">By burning your tokens to receive SPARTA, it shows an individual’s commitment to the project, every token has an inherent value associated with it set by the market.
              </p><p>This in effect transfers their value over to the SPARTA token. If the Protocol was to hold or dispense the tokens received that value would be diluted.
              </p><p>We are not interested in anything resembling an ICO where valuations are manipulated. Let’s just stick with the ‘burning’ part of a token price ‘crashing and burning’. Besides; the community is confident they can provide what is required without a treasury.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">What happens if the whole 100m SPARTA allocation is not burned? Is there any expiry date to burn my tokens?</h3>
                    <div>
                         <p className="faq-a">If the 100m of proof-of-burn obtained tokens are not fully acquired, it stays open indefinitely until it does.</p>
                         <p className="faq-a">The team predicts that as use and value is captured by Spartan Protocol it will provide an arbitrage opportunity for those with a keen eye to buy tokens and burn to use up the remaining allocations.</p>
                         <p className="faq-a">However, once a total of 100M tokens have been emitted (including tokens minted by the liquidity incentives) then a phase-shift begins. In this phase the liquidity incentives are favoured and the claim rates for SPARTA minted during burning are gradually eroded and made less attractive.</p>
                         <p className="faq-a">This will shift incentives from 'burning' to contributing to the ecosystem instead!</p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">I am interested but not keen to risk a lot of money! Is there a minimum amount i can burn?</h3>
                    <div>
                         <p className="faq-a">There is no minimum qty! Binance Smart Chain fees are also very low allowing for smaller token holders to participate.</p>
                         <p className="faq-a">However; the current MetaMask implementation REQUIRES AT LEAST 0.51BNB in your wallet for the DApp to work properly! If MetaMask comes up with a crazy fees-price, then this is the issue, make sure you get more BNB in your wallet!</p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">What about a maximum?</h3>
                    <div>
                         <p className="faq-a">The community pointed out that there was a way around our initial idea of max allocation per wallet; it’s quite obvious really; just make multiple wallets.
              </p><p>Whilst we could take KYC-like information to prevent this, that goes against our community values. So there is NO maximum allocation per wallet.
              </p><p>However, each token (BNB, CAN etc) has a max allocation, so if you were some massive, ridiculous, fat, gross whale who wanted to burn $5,000,000 worth of BNB, you will not be able to.</p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Do I need BNB to use Spartan Protocol?</h3>
                    <div>
                    <p className="faq-a">Yes, please make sure you have at least 0.51BNB in your wallet to interact with MetaMask properly. You will use less than 0.05BNB to pay for transactions, other operations and staking. BNB performs the same function as ETH for Ethereum (aka 'gas')</p>
                    <p className="faq-a">However one of the biggest differences is that Binance Smart Chain's fees are extremely low (and fast) compared to Ethereum! We are talking single digit cents, none of these $80-dollar Ethereum transactions!</p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Do the BEP2 projects selected need to migrate to BEP20/BSC before they can burn for SPARTA?</h3>
                    <div>
                         <p className="faq-a">Kind of; the projects do not need to decide to permanently change chains, they just need to create a matching BEP20 token and connect it to the TokenHub so that token holders are free to go between Binance Chain and Binance Smart Chain. This is great because it opens token holders and projects up to another ecosystem with the power of smart contracts without the project having to make a large and costly decision to port their project across to some other chain.
              </p><p>The communities are advised to reach out to the teams / token owners to show their support for the bridge between Binance Chain and Binance Smart Chain. If you, the token holder want to access DeFi and awesome DApps on BSC, ask your projects to setup the bridge!
              </p><p><a href="https://medium.com/@spartanprotocol/migrating-from-binance-chain-to-binance-smart-chain-bdda3a36385d">Guide for teams to set this up (takes about 1 hour)</a></p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Can other tokens be burnt for SPARTA tokens?</h3>
                    <div>
                         <p className="faq-a">Only 30 exclusive projects have been selected for the burning event, but once the liquidity pools are live you will be able to swap a vast array of tokens for SPARTA and vice versa.</p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">How is the rate of burn determined?</h3>
                    <div>
                         <p className="faq-a">The $0.30 SPARTA initial value comes from how we developed the economic model. We chose 300 million max tokens based on…. well… Sparta! Following that decision, 100 million of those will from the initial proof-of-burn distribution instead of what would normally be a blood-sucking ICO or dusty airdrop!
              </p><p>We divided the 30 project tokens into what we believe is a fair manner aimed at max distribution, to equate to $30 million if all are burned, hence $0.30 value for each of 100 million Sparta. It is a matter of what value it has to you and ultimately how much you believe in your existing project.
              </p><p>Burn rate for each individual project therefore is a result of their price to the $0.30 per SPARTA.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">How is the snapshot price determined?</h3>
                    <div>
                         <p className="faq-a">The snapshot price for each token enabled for the burn will be locked on the burn date. It will be based on a rolling average price for each token.
              </p><p>ie. If BNB's average is $20.00 and SPARTA is set at $0.30 then the ratio will be 66.666 SPARTA for every 1 BNB.
              </p><p>If BNB’s price goes down following the snapshot, this may create an arb-opportunity for peers to buy BNB on exchange and send it in for ‘cheaper’ SPARTA.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Why does SPARTA need to be the settlement asset in every pool?</h3>
                    <div>
                         <p className="faq-a">The Spartan Protocol is a liquidity protocol for asset exchange and synthetic asset generation on Binance Smart Chain. The first foundation of Spartan is its liquidity pools, similar to Uniswap, but instead of a fixed-rate fee model it uses a liquidity-sensitive fee similar to THORChain’s slip-based fees.
              </p><p>This ensures liquidity demand is always catered for, pool prices are resistant to manipulation and incentives are correct for sustainable minting of synthetic assets.
              </p><p>Synthetic assets are minted by collateralized liquidity pool-shares, which are value-stabilised, yield-generating and can be instantly liquidated to protect against deleveraging spirals. The SPARTA asset is emitted via a programmatic supply-responsive algorithm that rewards participants and gives way to a sustainable fee market.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Will there be lockup for staking tokens?</h3>
                    <div>
                         <p className="faq-a">There is no lock-up for staking, rewards will be calculated each block and claimable daily.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Is the protocol audited?</h3>
                    <div>
                         <p className="faq-a">The audit has been funded by the community and is currently in motion. We will announce the results when more information arises.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">Does Spartan protocol require price feeds, oracles etc?</h3>
                    <div>
                         <p className="faq-a">No, Spartan Protocol uses a continuous liquidity pools design with arbitrage opportunities balancing the prices. Essentially if the value of the token in a pool is out of sync with the market, arbitrage bots and traders will bring funds in and swap it back in balance.
              </p>
                    </div>
                </div>

                <div className="faq-question">
                    <h3 className="faq-q">What wallets are compatible with Spartan Protocol?</h3>
                    <div>
                         <p className="faq-a">Most existing Ethereum tooling is compatible with BSC, however we have only integrated MetaMask with the Spartan protocol DApp thus far.
              </p><p>We plan to integrate Binance Chain wallet & WalletConnect next for easy access with Math Wallet, Trust Wallet etc.
              </p><p><a href="https://medium.com/@spartanprotocol/connecting-metamask-to-bsc-mainnet-23e434bc670f">Guide to connect MetaMask to BSC mainnet.</a></p>
                    </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-12 py-1 mx-1">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SpartaSection
