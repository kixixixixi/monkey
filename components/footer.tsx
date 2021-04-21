import React, { useContext, ReactElement, useEffect } from "react"
import Link from "next/link"
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

    > a, > button {
      margin: 0 .25rem;
    }

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
          <Link href="/">
            トップ
          </Link>
          {currentUser && <button onClick={() => signOut()}>
            ログアウト
          </button>}
          {currentUser && <Link href="/myself">
            マイページ
          </Link>}
        </div>
        <div className="copy">
          Copyright &copy; Reload, Inc. All rights reserved.
        </div>
      </div>
    </FooterTag>
  )
}

export default Footer
