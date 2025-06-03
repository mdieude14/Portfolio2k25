//import React, { useState } from "react";
import styled from "styled-components";
import { Bio } from "../../data/data/constants";
import Typewriter from "typewriter-effect";
import IMG_profile from "../../assets/image/IMG_profile.jpeg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import pdfFile from "../../assets/image/Dieude_Martin.pdf";
import Stars from "../Canvas/Stars";
//const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;

  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;
const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  cursor: pointer;
  margin: 30%;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    margin: 0;
  }
`;
const HeroSection = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const handleDownloadCV = async () => {
    try {
      setLoader(true);
      setError("");

      // Création d'un élément <a> invisible
      const link = document.createElement("a");

      // Configuration du lien avec le PDF importé
      link.href = pdfFile;
      link.download = "Dieude_Martin.pdf"; // Nom du fichier pour le téléchargement
      link.target = "_blank"; // Ouvre dans un nouvel onglet si le téléchargement direct échoue

      // Style pour cacher le lien
      link.style.display = "none";

      // Ajout temporaire au DOM
      document.body.appendChild(link);

      // Déclenchement du téléchargement
      link.click();

      // Nettoyage après un court délai pour assurer le début du téléchargement
      setTimeout(() => {
        document.body.removeChild(link);
        setLoader(false);
      }, 100);
    } catch (error) {
      console.error("Erreur de téléchargement:", error);
      setError("Une erreur est survenue lors du téléchargement du CV");
      setLoader(false);
    }
  };

  return (
    <div id="About">
      <HeroContainer>
        {" "}
        <Stars />
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <Tilt>
                <motion.div {...headTextAnimation}>
                  <Title>
                    Bonjour, je suis <br /> {Bio.name}
                  </Title>
                  <TextLoop>
                    je suis un
                    <Span>
                    <Typewriter
                        options={{
                          strings: Bio.roles,
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </Span>
                  </TextLoop>
                </motion.div>
                <motion.div {...headContentAnimation}>
                  <SubTitle>{Bio.description}</SubTitle>
                </motion.div>
                <ResumeButton
                  onClick={handleDownloadCV}
                  disabled={loader}
                  style={{ opacity: loader ? 0.7 : 1 }}
                >
                  {loader ? "Téléchargement en cours..." : "Télécharger mon CV"}
                </ResumeButton>
                {error && (
                  <div
                    style={{
                      color: "red",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </div>
                )}
              </Tilt>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt glare={true}>
                  <Img src={IMG_profile} alt="image de profil" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

import React, { useState } from "react";
import styled from "styled-components";
import { Bio } from "../../data/data/constants";
import TypeIt from "typeit-react";
import IMG_profile from "../../assets/image/IMG_profile.jpeg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import pdfFile from "../../assets/image/Dieude_Martin.pdf";
import Stars from "../Canvas/Stars";
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;

  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;
const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  cursor: pointer;
  margin: 30%;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    margin: 0;
  }
`;
const HeroSection = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const handleDownloadCV = async () => {
    try {
      setLoader(true);
      setError("");

      // Création d'un élément <a> invisible
      const link = document.createElement("a");

      // Configuration du lien avec le PDF importé
      link.href = pdfFile;
      link.download = "Dieude_Martin.pdf"; // Nom du fichier pour le téléchargement
      link.target = "_blank"; // Ouvre dans un nouvel onglet si le téléchargement direct échoue

      // Style pour cacher le lien
      link.style.display = "none";

      // Ajout temporaire au DOM
      document.body.appendChild(link);

      // Déclenchement du téléchargement
      link.click();

      // Nettoyage après un court délai pour assurer le début du téléchargement
      setTimeout(() => {
        document.body.removeChild(link);
        setLoader(false);
      }, 100);
    } catch (error) {
      console.error("Erreur de téléchargement:", error);
      setError("Une erreur est survenue lors du téléchargement du CV");
      setLoader(false);
    }
  };

  return (
    <div id="About">
      <HeroContainer>
        {" "}
        <Stars />
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <Tilt>
                <motion.div {...headTextAnimation}>
                  <Title>
                    Bonjour, je suis <br /> {Bio.name}
                  </Title>
                  <TextLoop>
                    je suis un
                    <Span>
                      <TypeIt
                        getBeforeInit={(instance) => {
                          // Utiliser forEach pour itérer sur chaque rôle dans Bio.roles
                          Bio.roles.forEach((role, index) => {
                            // Ajouter chaque rôle avec une pause après chaque rôle sauf le dernier
                            instance.type(role);
                            if (index < Bio.roles.length - 1) {
                              instance.pause(1000).delete(role.length); // Pause de 1 seconde et effacer le rôle actuel
                            }
                          });

                          // Retourner l'instance modifiée
                          return instance;
                        }}
                        options={{
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </Span>
                  </TextLoop>
                </motion.div>
                <motion.div {...headContentAnimation}>
                  <SubTitle>{Bio.description}</SubTitle>
                </motion.div>
                <ResumeButton
                  onClick={handleDownloadCV}
                  disabled={loader}
                  style={{ opacity: loader ? 0.7 : 1 }}
                >
                  {loader ? "Téléchargement en cours..." : "Télécharger mon CV"}
                </ResumeButton>
                {error && (
                  <div
                    style={{
                      color: "red",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </div>
                )}
              </Tilt>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt glare={true}>
                  <Img src={IMG_profile} alt="image de profil" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
