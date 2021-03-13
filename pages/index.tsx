import React, { useState } from "react"
import styled from "styled-components"

const HeroTag = styled.div`
  color: #9d9d9d;
  max-width: 640px;
  margin: auto;
  min-height: calc(100vh - 5rem);
  padding: 6rem 1rem;
  width: 100%;
  .logo {
    color: #ffdb2b;
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
    color: #ffdb2b;
  }
  time {
    display: block;
    position: absolute;
    right: 0;
    font-size: .5rem;
  }
`

const FormTag = styled.form`
  display: block;
  text-align: center;
`
const IndexPage = (): React.ReactElement => {
  const [word, setWord] = useState("")
  return (
    <>
      <HeroTag>
        <div>まじかるばなな</div>
        <h1 className="logo">Magical Banana</h1>
        <MainImageTag
          src="https://4.bp.blogspot.com/-PftCnIlpHmk/ViipSVvcokI/AAAAAAAAz0k/AlK8YitEQzs/s400/eto_saru_banana.png" />
        <p>前のひとの投稿した言葉から連想できる言葉を投稿するゲームです</p>
        <ul>
          <li>
            2文字以上、10文字以下の"単語"を投稿してください
          </li>
          <li>
            投稿をすると過去の投稿を閲覧できます
          </li>
        </ul>
        <br/>
        <PreviosPostTag>
          <em>バナナ</em>といったら...
          <time>2021/03/09 19:24</time>
        </PreviosPostTag>
        <FormTag>
          <input
            maxLength={10}
            value={word}
            onChange={(e) => setWord(e.target.value) }
          />
          <button className="button-primary">
            投稿する
          </button>
        </FormTag>
      </HeroTag>
      <section className="container">
      </section>
    </>
  )
}

export default IndexPage
