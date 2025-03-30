import React, { useState, useEffect } from 'react';
import '';

const CardSkill = () => {
  const [isBackEndActive, setIsBackEndActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    // Simuler la récupération des boîtes depuis le DOM ou une API
    const initialBoxes = [
      { id: 1, className: 'boxBackEnd', content: 'BackEnd Box 1' },
      { id: 2, className: 'boxFrontEnd', content: 'FrontEnd Box 2' },
      { id: 3, className: 'boxBackEnd', content: 'BackEnd Box 3' },
      { id: 4, className: 'boxFrontEnd', content: 'FrontEnd Box 4' },
      { id: 5, className: 'boxBackEnd', content: 'BackEnd Box 5' },
      { id: 6, className: 'boxFrontEnd', content: 'FrontEnd Box 6' },
    ];
    setBoxes(initialBoxes);
  }, []);

  const handleSwitchClick = () => {
    setIsBackEndActive(!isBackEndActive);
  };

  const handleArrowClick = (direction) => {
    const groupSize = 3;
    const totalGroups = Math.ceil(boxes.length / groupSize);
    setCurrentIndex((prevIndex) =>
      (prevIndex + direction + totalGroups) % totalGroups
    );
  };

  const filteredBoxes = boxes.filter((box) =>
    isBackEndActive ? box.className.includes('boxBackEnd') : box.className.includes('boxFrontEnd')
  );

  const startIndex = currentIndex * 3;
  const endIndex = startIndex + 3;
  const displayedBoxes = filteredBoxes.slice(startIndex, endIndex);

  return (
    <div className="App">
      <button className={`btnswitch ${isBackEndActive ? 'btnSwitchActive' : ''}`} onClick={handleSwitchClick}>
        Switch
      </button>
      <div className="containerSwitch">
        <div className="containBtnSwitch">
          <div className="arrow left" onClick={() => handleArrowClick(-1)}>
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </div>
          <div className="ArrayCard">
            {displayedBoxes.map((box) => (
              <div key={box.id} className={`box ${box.className}`}>
                {box.content}
              </div>
            ))}
          </div>
          <div className="arrow right" onClick={() => handleArrowClick(1)}>
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkill;
