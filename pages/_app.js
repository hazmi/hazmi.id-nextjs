import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import ReactGA from 'react-ga'
import { Main } from '../components/main/index.tsx'

class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize('UA-303912-4');
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="theme-color" content="#cf257b" />
          <link rel="manifest" href="/static/manifest/manifest.json" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
        </Head>
        <Main>
          <Component {...pageProps} />
        </Main>
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          body {
            font: 400 16px/1.4 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #333;
            background: #f3f3f3;
            display: flex;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          #__next {
            display: flex;
            flex: 1;
            justify-content: center;
          }
          hr {
            display: none;
          }
      `}</style>
      </Container>
    );
  }
}

export default MyApp
