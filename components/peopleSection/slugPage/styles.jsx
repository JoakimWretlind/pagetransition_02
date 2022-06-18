import styled, { keyframes } from 'styled-components';

export const SlugWrapper = styled.div`
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    display: flex;
`;

const imgStarter = keyframes`
    0%{
        height: 30vh;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    40%{
        height: 100vh;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    49%{
        height: 100vh;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    100%{
        height: 100vh;
        left: 0;
        transform: translateY(-50%);
    }
`

export const ImgLanding = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30vh;
    animation: ${imgStarter} 1.5s forwards;
    filter: grayscale(70%);
`;

export const NameContainer = styled.div`
    margin-top: 14vh;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
`;

export const H1 = styled.h1`
    text-transform: capitalize;
    font-size: clamp(2rem, 12vw, 24rem);
    font-family: 'argentumBlack';
    line-height: .9;
    color: rgba(238, 238, 238, .7);
`;

export const P = styled.p`
    width: 50rem;
    margin-left: 20%;
    margin-top: 7vh;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: .1rem;
    color: #707070;
    line-height: 1.4;
    word-break: break-all;
    white-space: normal;
`;

export const Img1 = styled.img`
    height: 50vh;
    margin-top: 40vh;
`;

export const Img3 = styled.img`
    height: 30vh;
    object-fit: cover;
    margin-top: 0;
`;


