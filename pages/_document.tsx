import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const styledComponentsSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            styledComponentsSheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Spartan Protocol | DeFi on BSC" />
          <meta property="og:image" content="https://spartanprotocol.org/spartan-preview.png" />
          <meta property="og:description" content="A protocol for incentivised liquidity & synthetic tokens. Swap BEP assets & earn yield!" />
          <meta property="og:url" content="https://spartanprotocol.org" />
          <meta name="twitter:card" content="https://spartanprotocol.org/spartan-preview.png" />
          <meta name="title" content="Spartan Protocol | DeFi on BSC" />
          <meta name="description" content="A protocol for incentivised liquidity & synthetic tokens. Swap BEP assets & earn yield!" />
          <meta name="keywords" content="Liquidity, Swap Assets, BSC, DeFi" />
          <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="google-site-verification" content="lMyRmPCukXIx7zODSb7jqgrMw-67IjkVHZNbkNGfgXs" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400|Open+Sans:200,300,400|Titan+One"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.png" type="image/ico" />
          <link rel="icon" href="/favicon.png" type="image/ico" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
