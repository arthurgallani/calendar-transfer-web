import React from 'react'

import { ServerStyleSheet } from 'styled-components'
import Document, { DocumentContext, DocumentInitialProps, Html, Main, NextScript } from '../../node_modules/next/document'
import Head from '../../node_modules/next/head'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }


  render():JSX.Element {
    return (
      <Html lang='pt'>
        <Head>
          <meta charSet='utf-8'/>

          <link href="https://fonts.googleapis.com/css2?family=Poppins:400,500,700" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}


