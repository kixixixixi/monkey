import React, { useContext, ReactElement, useEffect } from "react"
import { AuthContext } from "contexts/auth"
import { auth } from "services/firebase"
import styled from "styled-components"

const FooterTag = styled.footer`
  background: #201006;
  color: white;
  display: block;
  font-size: .75rem;
  padding: 6rem .5rem 6rem;
  width: 100%;
  .menu {
    padding: 2rem;
    text-align: center;

    button {
      background-color: transparent;
      border: none;
      color: white;
      :focus {
        opacity: 66%;
        outline: none;
      }
    }
  }
  .copy {
    text-align: center;
  }
  a {
    color: white;
  }
`

const Footer = (): ReactElement => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser
  }, [currentUser])

  const signOut = () => {
    auth.signOut()
  }
  return (
    <FooterTag>
      <div>
        <div className="menu">
          {currentUser && <button onClick={() => signOut()}>
            ログアウト
          </button>}
        </div>
        <div className="copy">
          Copyright &copy; Reload, Inc. All rights reserved.
        </div>
      </div>
    </FooterTag>
  )
}

export default Footer
