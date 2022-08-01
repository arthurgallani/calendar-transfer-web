import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from '../../node_modules/next/app'
import Link from '../../node_modules/next/link'
import GlobalStyle from '../styles/global'
import { Container } from '../styles/pages/Home'
import theme from '../styles/theme'
import Home from './index'
import Create from './transaction/create'
import Find from './transaction/find'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />

      

        
      </ ThemeProvider>

  )
}

export default MyApp
