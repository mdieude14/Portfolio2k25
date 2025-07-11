import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SkillCard } from "../../data/data/dataSkillCard";
import { Tilt } from "react-tilt";
import {
  ArrowBackCircleOutline,
  ArrowForwardCircleOutline,
} from "react-ionicons";
import { IonIcon } from "@ionic/react";

const data = SkillCard;
console.log(data);

// Styled Components de la section wrapperSkill
const WrapperSkillContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  height: 100%;
  background: #4444445b;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;
const LegendWappep = styled.h4`
  font-size: 1.6rem;
  color: #fefefe;
`;

const ContainerSwitch = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  justify-content: space-around;
  height: 80px;
  line-height: 80px;
  z-index: 111;
  background: linear-gradient(to bottom, #444, #222);

  &.containerSwitchAct {
    background: linear-gradient(to bottom, #aeaeae, #f9f9f9);
  }

  > h3 {
    font-size: 1.6rem;
    color: #f3f5f8;
    letter-spacing: 3px;
  }

  .hFront {
    opacity: 0;
  }

  &.containerSwitchAct .hFront {
    color: #444;
    opacity: 1;
  }

  &.containerSwitchAct .hBack {
    opacity: 0;
  }
`;

const ContainBtnSwitch = styled.div`
  position: relative;
  left: 8%;
  display: block;
  width: 187px;
  height: 83px;
  border-radius: 160px;
  background: #222;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
    inset 0 8px 8px rgba(0, 0, 0, 0.1), inset 0 -4px 4px rgba(0, 0, 0, 0.1);
  transform: translateX(-60%);

  &.containSBtnActive {
    background: #fff;
    box-shadow: inset 0 2px 60px rgba(0, 0, 0, 0.1),
      inset 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 -4px 8px rgba(0, 0, 0, 0.1);
  }

  .btnswitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 89px;
    height: 100%;
    background: linear-gradient(to bottom, #444, #222);
    border-radius: 50%;
    transform: scale(0.9);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5),
      inset 0 4px 4px rgba(255, 255, 255, 0.2),
      inset 0 -4px 4px rgba(255, 255, 255, 0.2);
    transition: 0.5s;

    &.btnSwitchActive {
      background: linear-gradient(to bottom, #aeaeae, #f9f9f9);
      left: 52%;
    }
  }
`;

const BtnSwitch = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 89px;
  height: 100%;
  background: linear-gradient(to bottom, #444, #222);
  border-radius: 50%;
  transform: scale(0.9);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5),
    inset 0 4px 4px rgba(255, 255, 255, 0.2),
    inset 0 -4px 4px rgba(255, 255, 255, 0.2);
  transition: 0.5s;

  &.btnSwitchActive {
    background: linear-gradient(to bottom, #aeaeae, #f9f9f9);
    left: 52%;
  }
`;
const WrapperCompetence = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  max-width: 90vw;
  height: 40vw;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 25px 45px rgb(0 0 0 / 10%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(25px);

  @media (max-width: 768px) {
    height: auto;
    min-height: 500px;
    padding: 20px 10px;
  }
`;

const WapperCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 80px;
  width: 90px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.05);
  transform-style: preserve-3d;

  &.left {
    margin-right: 10px;
  }

  &.right {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;

    &.left {
      left: 0;
      margin-right: 0;
    }

    &.right {
      right: 0;
      margin-left: 0;
    }
  }
`;

// styled components de la section cardSkill
const CardSkillContainer = styled.div`
  position: relative;
  width: 360px;
  margin: 0 10px 5px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 300px;
    margin: 0;
  }
`;

const CardComptence = styled.span`
  display: flex;
  position: relative;
  width: 300px;
  height: 420px;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.05);
  transform-style: preserve-3d;
  cursor: pointer;
  transition: 0.5s;
  opacity: 1;

  &:hover {
    .effect.Img > * {
      opacity: 1;
    }

    .pourcent > * {
      opacity: 1;
    }

    .texts {
      transition-delay: 0s, 0.5s, 0.5s, 0s;
      bottom: -70px;
      transform: translateX(-50%) translateY(-50px);
      padding: 10px 20px 10px;
    }

    .elementDiscipt.effect {
      opacity: 1;
    }
  }
`;
const Effect = styled.div`
  position: absolute;
  top: 20px;
  left: -25px;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  transform: translateZ(80px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.05);
  opacity: 1;

  &.Img {
    z-index: 20;
    top: -20px;
    right: -5px;
    width: 150px;
    height: 150px;
    padding: 10px;
    transform: translateZ(120px);
    transform: translateX(90%);
    backdrop-filter: blur(10px);
  }
`;

const CardSkillImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateZ(80px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.05);
  opacity: 1;
  background-image: ${(props) => `url(${props.img})`};
  object-fit: cover;
  background-size: cover;
  background-position: center;
`;

const Pourcent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${(props) => props.color};

  .numberPourcent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    svg {
      circle {
        stroke: ${(props) => props.color};
      }
    }
    h2 {
      color: #fff;
      font-weight: 700;
      font-size: 60px;
     

      span {
        font-size: 24px;
      }
    }
  }
`;

const Category = styled.div`
  opacity: 0;
  position: absolute;
  bottom: -42px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 30px 20px 10px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 1;
  text-transform: uppercase;
  pointer-events: none;
  transition: bottom 0.5s, transform 0.5s, padding 0.5s;
  transition-delay: 0.5s, 0.5s, 0s, 0.5s;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.02);
  color: #fff;
  background-color: ${(props) => props.color};
`;

const CardSkillDescription = styled.div`
  opacity: 0;
  top: 235px;
  height: 30%;
  left: initial;
  right: 0;
  width: 100%;
  padding: 10px;
  transform: translateZ(100px);
  background: transparent;
  backdrop-filter: blur(0px);
  border: none;
  box-shadow: none;
`;

const CardSkill = ({
  img,
  numberPourcent,
  description,
  category,
  name,
  color,        
}) => {
  return (
    <Tilt>
    <CardSkillContainer id="box" className="boxBackEnd">
        <CardComptence id="containCard" className="cardComptence">
          <Tilt>
            <Effect id="elementsLogo2" className="effect bg">
              <CardSkillImage img={img} alt={category} />
            </Effect>
          </Tilt>
          <Tilt>
            <Effect id="elementschiffre" className="effect Img">
              <Pourcent className="pourcent" color={color}>
            <svg>
                  <circle cx="70" cy="70" r="70" style={{ stroke: color }}></circle>
                  <circle cx="70" cy="70" r="70" style={{ stroke: color }}></circle>
            </svg>
                <div className="numberPourcent" >
              <h2>
                {numberPourcent}
                <span>%</span>
              </h2>
          </div>
              </Pourcent>
              <Category className="texts" style={{ backgroundColor: color }}>
                {name}
              </Category>
            </Effect>
          </Tilt>
          <Tilt>
        <CardSkillDescription
          id="elementDiscipt2"
          className="elementDiscipt effect"
        >
          <p>{description}</p>
        </CardSkillDescription>
          </Tilt>
        </CardComptence>
    </CardSkillContainer>
    </Tilt>
  );
};

const WrapperSkill = () => {
  const [isBackEndActive, setIsBackEndActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const initialBoxes = SkillCard.map((card) => ({
      ...card,
      id: card.id || Math.random(),
      className: `box${
        card.category.charAt(0).toUpperCase() + card.category.slice(1)
      }`,
    }));
    setBoxes(initialBoxes);
  }, []);

  const handleSwitchClick = () => {
    setIsBackEndActive(!isBackEndActive);
  };

  const handleArrowClick = (direction) => {
    const groupSize = isMobile ? 2 : 3;
    const totalBoxes = filteredBoxes.length;
    
    if (totalBoxes === 0) return;

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + direction;
      
      if (direction > 0 && (nextIndex * groupSize) >= totalBoxes) {
        return 0;
      }
      
      if (direction < 0 && nextIndex < 0) {
        return Math.ceil(totalBoxes / groupSize) - 1;
      }
      
      return nextIndex;
    });
  };

  const getDisplayedBoxes = () => {
    const groupSize = isMobile ? 2 : 3;
    const startIndex = currentIndex * groupSize;
    let endIndex = startIndex + groupSize;
    
    if (endIndex > filteredBoxes.length) {
      endIndex = filteredBoxes.length;
    }
    
    if (startIndex >= filteredBoxes.length) {
      setCurrentIndex(0);
      return filteredBoxes.slice(0, groupSize);
    }
    
    return filteredBoxes.slice(startIndex, endIndex);
  };

  const filteredBoxes = boxes.filter((box) => {
    if (!box || !box.category) return false;
    return isBackEndActive
      ? box.category.toLowerCase() === "frontend"
      : box.category.toLowerCase() === "backend";
  });

  const displayedBoxes = getDisplayedBoxes();

  return (
    <WrapperSkillContainer id="Skills">
      <LegendWappep className="appear">
        Langage Back-end && front-end
      </LegendWappep>
      <ContainerSwitch
        className={`containerSwitch ${
          isBackEndActive ? "containerSwitchAct" : ""
        }`}
      >
        <h3 className="hBack">compétences: back-end</h3>
        <ContainBtnSwitch
          className={`containBtnSwitch ${
            isBackEndActive ? "containSBtnActive" : ""
          }`}
        >
          <BtnSwitch
            className={`btnswitch ${isBackEndActive ? "btnSwitchActive" : ""}`}
            onClick={handleSwitchClick}
          ></BtnSwitch>
        </ContainBtnSwitch>
        <h3 className="hFront">compétences: Front-end</h3>
      </ContainerSwitch>
      <WrapperCompetence>
        <WapperCardContainer>
          <Arrow className="left" onClick={() => handleArrowClick(-1)}>
            <IonIcon
              icon={ArrowBackCircleOutline}
              style={{
                color: "#000000",
                height: isMobile ? "60px" : "100px",
                width: isMobile ? "60px" : "100px",
              }}
              title="fleche gauche"
            />
          </Arrow>
          {displayedBoxes.map((card, index) => (
            <CardSkill key={card.id || index} {...card} />
          ))}
          <Arrow className="right" onClick={() => handleArrowClick(1)}>
            <IonIcon
              icon={ArrowForwardCircleOutline}
              style={{
                color: "#000000",
                height: isMobile ? "60px" : "100px",
                width: isMobile ? "60px" : "100px",
              }}
              title="fleche droite"
            />
          </Arrow>
        </WapperCardContainer>
      </WrapperCompetence>
    </WrapperSkillContainer>
  );
};

export default WrapperSkill;
