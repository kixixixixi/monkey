import React, { ReactElement } from "react"
import styled, { keyframes, css } from "styled-components"

const FullRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const ease = (p1, p2, p3, p4) => css`
  animation-timing-function: cubic-bezier(
    ${p1 * 0.1},
    ${p2 * 0.1},
    ${p3 * 0.1},
    ${p4 * 0.1}
  );
`

const LoaderContainer = styled.div`
  position: relative;
  top: 0;
  .loader {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    &:before,
    &:after {
      content: "";
      position: absolute;
      display: block;
      box-sizing: border-box;
    }
    .dot {
      position: absolute;
      top: 0;
      left: 50%;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background: white;
      transform-origin: 50% 1rem;
      z-index: 100;

      &:nth-child(1) {
        animation: ${FullRotate} 1.5s 0s infinite;
        ${ease(5, 0, 3, 10)};
      }
      &:nth-child(2) {
        animation: ${FullRotate} 1.5s 0s infinite;
        ${ease(6, 0, 4, 10)};
      }
      &:nth-child(3) {
        animation: ${FullRotate} 1.5s 0s infinite;
        ${ease(7, 0, 5, 10)};
      }
      &:nth-child(4) {
        animation: ${FullRotate} 1.5s 0s infinite;
        ${ease(8, 0, 6, 10)};
      }
    }
  }
`

const Loader = (): ReactElement => {
  return (
    <LoaderContainer>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </LoaderContainer>
  )
}

export default Loader
