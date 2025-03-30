import styled from 'styled-components';
import React, { useState, useEffect } from 'react';



const CardSkill = ({ img, numberPourcent, description, category }) => {
    return (
      <CardSkillContainer id="box" className="boxBackEnd">
        <span id="containCard" className="cardComptence">
          <CardSkillImage id="elementsLogo2" className="effect bg" style={{ backgroundImage: `url(${img})` }} alt={category} />
          <div id="elementschiffre2" className="effect Img">
            <div className="pourcent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <CardSkillNumber className="numberPourcent">
                <h2>{numberPourcent}<span>%</span></h2>
              </CardSkillNumber>
            </div>
            <div className="texts">{category}</div>
          </div>
          <CardSkillDescription id="elementDiscipt2" className="elementDiscipt effect">
            <p>{description}</p>
          </CardSkillDescription>
        </span>
      </CardSkillContainer>
    );
  };

  export default CardSkill;