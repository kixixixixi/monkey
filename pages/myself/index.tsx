import React, { useContext } from "react"
import { AuthContext } from "contexts/auth"
import styled from "styled-components"

const ContentTag = styled.div`
  margin: auto;
  max-width: 640px;
  padding: 5rem 1rem;
`

const MyselfIndexPage = (): React.ReactElement => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <ContentTag>
        {currentUser ? <div>
          ようこそ{currentUser.name}さん
        </div> : <div>
          ログインしてください
        </div>}
      </ContentTag>
    </>
  )
}

export default MyselfIndexPage
