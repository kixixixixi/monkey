import React from "react"
import { AppProps } from "next/app"
import "assets/styles.scss"
import styled from "styled-components"

const ContentTag = styled.article`
  margin-top: 5rem;
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
      <ContentTag>
        <Component {...pageProps} />
      </ContentTag>
      <FooterTag>
        <div className="container">
          <div className="copy">
            Copyright &copy; Reload, Inc. All rights reserved.
          </div>
        </div>
      </FooterTag>
    </>
  )
}

export default App
