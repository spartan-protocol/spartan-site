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
          <meta property="og:title" content="SPARTAN PROTOCOL" />
          <meta property="og:image" content="https://spartanprotocol.org/static/preview-spartan.png" />
          <meta property="og:description" content="A PROTOCOL FOR INCENTIVISED LIQUIDITY AND SYNTHETIC ASSETS" />
          <meta property="og:url" content="https://spartanprotocol.org" />
          <meta name="twitter:card" content="https://spartanprotocol.org/static/preview-spartan.png" />
          <meta
            name="keywords"
            content="Liquidity, Swap Assets"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400|Open+Sans:200,300,400|Titan+One"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
