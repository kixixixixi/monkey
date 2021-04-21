import React, { useContext, ReactElement, useEffect } from "react"
import Link from "next/link"
import { auth, twitterProvider } from "services/firebase"
import { AuthContext } from "contexts/auth"
import styled from "styled-components"

const FormContainerTag = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: .75rem;
  z-index: 1;
`

const ButtonTag = styled.button`
    background-color: rgba(29,161,242,1.00);
    border: none;
    border-radius: .2rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: .8rem;
    font-weight: 700;
    height: 2rem;
    letter-spacing: .1rem;
    line-height: 2rem;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
`

const UserNameTag = styled.button`
  background-color: #f5c843;
  border: none;
  border-radius: .2rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  outline: none;
  padding: 0 1rem;
`

const LoginForm = (): ReactElement => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser
  }, [currentUser])

  const login = () => {
    auth.signInWithRedirect(twitterProvider)
  }
  return (
     <FormContainerTag>
       { currentUser ?
        <Link href="/myself"><UserNameTag>{currentUser.name}</UserNameTag></Link>
       :
      <ButtonTag onClick={login}>Twitterでログインする</ButtonTag>}
     </FormContainerTag>
  )
}

export default LoginForm
