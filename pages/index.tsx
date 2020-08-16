import Head from 'next/head'

import HeroSection from 'components/Home/HeroSection'
import FeaturesSection from 'components/Home/FeaturesSection'
import SpartaSection from 'components/Home/SpartaSection'
import ProjectSection from 'components/Home/ProjectSection'
import ChainSection from 'components/Home/ChainSection'

const Home = () => (
  <>
    <Head>
      <title>THORChain</title>
    </Head>
    <HeroSection />
    <FeaturesSection />
    <SpartaSection />
    <ProjectSection />
    <ChainSection />
  </>
)

export default Home
