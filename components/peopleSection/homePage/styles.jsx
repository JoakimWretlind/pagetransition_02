import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
    0%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

const exitAnimation = keyframes`
    0%{
        height: 30vh;
    }
    35%{
        height: 100vh;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    100%{
        height: 100vh;
        left: 0;
        transform: translateY(-50%);
        animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
    }
`;

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper1 = styled.div`
  overflow: hidden;
  height: 0;
  width: 100%;
`;

export const InnerWrapper2 = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;
  height: 29vh;
  z-index: 2;
  filter: grayscale(15%);
  // &.active is needed when toggle back
  /* &.active {
      z-index: 10;
      height: 30vh;
    } */
  &#jg {
    top: 56%;
    left: 38%;
  }
  &#jd {
    top: 14vh;
    left: 76%;
  }
  &#kk {
    top: 8%;
    left: 29%;
  }
  &#dg {
    top: 49%;
    left: 26%;
  }
  &#ut {
    top: 17%;
    left: 60%;
  }
  &#dw {
    bottom: 20%;
    left: 84%;
  }
  &#jp {
    top: 30%;
    left: 16%;
  }
  &#hj {
    top: 5%;
    left: 7%;
  }
  &#ks {
    bottom: 7%;
    left: 66%;
  }
  &#jf {
    bottom: 7%;
    left: 6%;
  }
  &#kr {
    top: 44%;
    left: 51%;
  }
  &#uc {
    top: 10%;
    left: 47%;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Img2 = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 29vh;
  filter: grayscale(10%);
  animation: ${opacityAnimation} 1s both;
  &:hover {
    cursor: pointer;
  }
  &.active {
    opacity: 1;
    height: 30vh;
    z-index: 10;
    animation: ${exitAnimation} 1.4s forwards;
    animation-delay: 1.2s;
  }
`;
