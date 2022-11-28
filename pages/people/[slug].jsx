import { useEffect, useRef } from "react";
import path from "path";
import fs from "fs/promises";
import { sine, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  SlugWrapper,
  SlugContainer,
  P,
  Img,
} from "/components/peopleSection/slugPage/styles";
import { HeaderAnimation } from "/components/animations/headerAnimation";
import { HeaderAnimation2 } from "/components/animations/headerAnimation2";
import {
  ImageContainer,
  ImgTwoContainer,
  ItemContainer,
  SmallP,
  TextContainer,
} from "../../components/peopleSection/slugPage/styles";

gsap.registerPlugin(ScrollTrigger);

const PeopleDetails = (props) => {
  const { loadedPerson } = props;
  const containerRef = useRef();
  const contentContainer = useRef();
  let descRef = useRef();
  let detailsRef = useRef();
  let imgTwo = useRef();
  let imgThree = useRef();

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(imgTwo, 3, { opacity: 1, ease: sine }, 0.7);
    tl.to(descRef, 1, { opacity: 1 }, "+.25");
    tl.to(detailsRef, 1, { opacity: 1 }, "+.25");
    tl.to(imgThree, 2, { opacity: 1, ease: sine }, "-=2.4");
  }, []);

  // Horizontal scroll
  useEffect(() => {
    containerRef.current = window.innerWidth;
    gsap.to(contentContainer.current, {
      x: window.innerWidth - contentContainer.current.offsetWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
      },
    });
  }, []);

  if (!loadedPerson) {
    return <p>Loading...</p>;
  }

  return (
    <SlugWrapper className="container" ref={containerRef}>
      <SlugContainer className="contentContainer" ref={contentContainer}>
        <Img id="one" src={loadedPerson.src} alt={loadedPerson.title} />
        <ItemContainer>
          <TextContainer>
            <HeaderAnimation title={loadedPerson.firstName} />
            <HeaderAnimation2 title={loadedPerson.lastName} />
            <P ref={(e) => (descRef = e)}>{loadedPerson.description}</P>
          </TextContainer>
        </ItemContainer>
        <ImageContainer>
          <ImgTwoContainer>
            <Img
              id="two"
              src={loadedPerson.src2}
              alt={loadedPerson.title}
              ref={(el) => {
                imgTwo = el;
              }}
            />
            <SmallP ref={(e) => (detailsRef = e)}>
              {loadedPerson.details1}
            </SmallP>
          </ImgTwoContainer>
          <Img
            id="three"
            src={loadedPerson.src3}
            alt={loadedPerson.title}
            ref={(el) => {
              imgThree = el;
            }}
          />
        </ImageContainer>
      </SlugContainer>
    </SlugWrapper>
  );
};

/** Get Data **/
const getData = async () => {
  const filePath = path.join(process.cwd(), "utils", "data", "peopleData.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const peopleId = params.slug;
  const data = await getData();
  const person = data.peoples.find((person) => person.id === peopleId);

  if (!person) {
    return { notFound: true };
  }

  return {
    props: {
      loadedPerson: person,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const ids = data.peoples.map((person) => person.id);
  const pathsWithParams = ids.map((id) => ({ params: { slug: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default PeopleDetails;
