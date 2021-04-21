import React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import "assets/styles.scss"
import styled from "styled-components"
import { AuthProvider } from "contexts/auth"
import LoginForm from "components/login-form"
import Footer from "components/footer"

const ContentTag = styled.article`
  min-height: 100vh;
`

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <AuthProvider>
        <LoginForm />
        <ContentTag>
          <Component {...pageProps} />
        </ContentTag>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
