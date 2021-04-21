import React, { useState } from "react"
import styled from "styled-components"

const HeroTag = styled.div`
  color: #9d9d9d;
  max-width: 640px;
  margin: auto;
  padding: 4rem 1rem;
  width: 100%;
  .logo {
    color: #f5c843;
  }
`

const MainImageTag = styled.img`
  width: 90%;
  max-width: 160px;
  margin: auto;
  display: block;
`
const PreviosPostTag = styled.div`
  text-align: center;
  margin: 2rem 0 4rem;
  position: relative;
  em {
    font-size: 4rem;
    color: #f5c843;
  }
  time {
    display: block;
    position: absolute;
    right: 0;
    font-size: 0.5rem;
  }
`

const FormTag = styled.form`
  display: block;
  text-align: center;
`
const InputTag = styled.input`
  background-color: transparent;
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3rem;
  padding: 0.3rem 1rem 0.3rem;
  text-align: center;
  width: 100%;
  margin-bottom: 1.5rem;
`

const SubmitTag = styled.button`
  background-color: #f5c843;
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  height: 2.5rem;
  letter-spacing: 0.1rem;
  line-height: 2/5rem;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:disabled {
    background-color: #d1d1d1;
  }
`
const IndexPage = (): React.ReactElement => {
  const [word, setWord] = useState("")
  const isEnabled = (): boolean => word.length >= 2 && word.length <= 10
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <>
      <HeroTag>
        <div>まじかるばなな</div>
        <h1 className="logo">Magical Banana</h1>
        <MainImageTag src="/images/monkey.png" />
        <p>前のひとの投稿した言葉から連想できる言葉を投稿するゲームです</p>
        <ul>
          <li>2文字以上、10文字以下の"単語"を投稿してください</li>
          <li>投稿をすると過去の投稿を閲覧できます</li>
        </ul>
        <br />
        <PreviosPostTag>
          <em>バナナ</em>といったら...
          <time>2021/03/09 19:24</time>
        </PreviosPostTag>
        <FormTag onSubmit={(e) => submit(e)}>
          <InputTag
            maxLength={10}
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <SubmitTag disabled={!isEnabled()}>投稿する</SubmitTag>
        </FormTag>
      </HeroTag>
      <section className="container"></section>
    </>
  )
}

export default IndexPage
