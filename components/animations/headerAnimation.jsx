import { motion } from "framer-motion";
import { H1 } from "../peopleSection/slugPage/styles";
import styled from "styled-components";

export const TitleHolder = styled.ul`
  display: flex;
`;

export const HeaderAnimation = ({ title }) => {
  const boxVariant = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0,
        delay: 0.0,
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };
  const listVariant = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <TitleHolder
      as={motion.div}
      variants={boxVariant}
      animate="visible"
      initial="hidden"
    >
      {[...title].map((header, index) => (
        <H1 key={index} as={motion.li} variants={listVariant}>
          {header}
        </H1>
      ))}
    </TitleHolder>
  );
};
