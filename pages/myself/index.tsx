import React, { useContext } from "react"
import { AuthContext } from "contexts/auth"
import styled from "styled-components"

const ContentTag = styled.div`
  margin: auto;
  max-width: 640px;
  padding: 5rem 1rem;
  text-align: center;

  .avatar {
    display: block;
    height: 40px;
    margin: 1rem auto;
    width: 40px;
    img {
      border-radius: 20px;
      width: 100%;
    }
  }
  .name {
    font-size: 1.5rem;
    margin: 1rem;
  }
  .profile {
    textarea {
      font-size: 0.75rem;
      width: 75%;
    }
  }
`

const MyselfIndexPage = (): React.ReactElement => {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <ContentTag>
        {currentUser ? (
          <div>
            <div className="avatar">
              <img src={currentUser.pictureUrl} />
            </div>
            <div className="name">{currentUser.name}</div>
            <div className="profile">
              <textarea rows={4} placeholder="プロフィール">
                {currentUser.profile}
              </textarea>
            </div>
          </div>
        ) : (
          <div>ログインしてください</div>
        )}
      </ContentTag>
    </>
  )
}

export default MyselfIndexPage
