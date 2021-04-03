import React from "react"
import Head from 'next/head'
import { AppProps } from "next/app"
import "assets/styles.scss"
import styled from "styled-components"
import { AuthProvider } from 'contexts/auth'
import LoginForm from "components/login-form"

const ContentTag = styled.article`
  min-height: 100vh;
`

const FooterTag = styled.footer`
  background: #201006;
  color: white;
  display: block;
  font-size: .75rem;
  padding: 9rem .5rem 6rem;
  width: 100%;
  .copy {
    text-align: center;
  }
  a {
    color: white;
  }
`

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <AuthProvider>
        <LoginForm />
        <ContentTag>
          <Component {...pageProps} />
        </ContentTag>
      </AuthProvider>
      <FooterTag>
        <div>
          <div className="copy">
            Copyright &copy; Reload, Inc. All rights reserved.
          </div>
        </div>
      </FooterTag>
    </>
  )
}

export default App
