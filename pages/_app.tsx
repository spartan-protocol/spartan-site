import { AppProps } from 'next/app'

import '../styles/bootstrap.css'
import '../styles/site.css'
import '../styles/helper.css'

import Layout from 'components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
