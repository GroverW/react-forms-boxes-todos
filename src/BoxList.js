import React, { useState } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'uuid/v4';


const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    const newBox = {
      ...box,
      id: uuid()
    }
    setBoxes([
      ...boxes,
      newBox
    ])
  };

  const removeBox = (id) => {
    const newBoxes = boxes.filter(box => box.id !== id);
    setBoxes(newBoxes);
  };

  return (
    <div className="boxList">
      {boxes.map(box => (<Box
          key={box.id}
          id={box.id}
          backgroundColor={box.backgroundColor}
          width={`${box.width}px`}
          height={`${box.height}px`}
          removeBox={removeBox}
          />
      ))}
      <BoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;