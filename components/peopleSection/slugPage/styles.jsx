import styled from "styled-components";

export const SlugWrapper = styled.div`
  top: 0;
  left: 0;
  overflow-y: hidden;
  height: 100vh;
  width: 100%;
`;

export const SlugContainer = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  min-width: 130vw;
  width: max-content;
  display: flex;
  justify-content: flex-start;
`;

export const ItemContainer = styled.div`
  position: relative;
  margin-top: 14vh;
  margin-left: -18rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  padding-right: 10rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const H1 = styled.h1`
  text-transform: capitalize;
  font-size: clamp(2rem, 12vw, 24rem);
  font-family: "argentumBlack";
  line-height: 0.9;
  color: rgba(241, 241, 241, 0.7);
  text-shadow: 0 0.01rem 0.01rem rgba(0, 0, 0, 0.1),
    0 -0.1rem 0.1rem rgba(255, 255, 255, 0.5);
`;

export const P = styled.p`
  width: 50rem;
  margin-left: 20rem;
  margin-top: 7vh;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: #707070;
  line-height: 1.4;
  //word-break: break-all;
  white-space: normal;
  opacity: 0;
`;

export const SmallP = styled.p`
  width: 40rem;
  margin-left: 3rem;
  margin-top: 5vh;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  line-height: 1.4;
  white-space: normal;
  color: #8b8b8b;
  opacity: 0;
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 110rem;
  height: 100%;
  width: 100%;
`;

export const ImgTwoContainer = styled.div`
  position: absolute;
  top: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Img = styled.img`
  filter: grayscale(0%);
  &#one {
    height: 100vh;
  }
  &#two {
    opacity: 0;
    height: 50vh;
  }
  &#three {
    opacity: 0;
    margin-left: 70rem;
    height: 30vh;
    margin-top: 65vh;
    object-fit: cover;
  }
`;
