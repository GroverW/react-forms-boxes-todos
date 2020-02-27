import React from 'react';
import './Box.css';

const Box = ({ id, backgroundColor, width, height, removeBox, testid}) => {
  const style = {
    backgroundColor,
    width,
    height
  }

  return (
    <div className="Box" data-testid = "TEST">
      <div style={style} className="Box-box">
        <button className="Box-remove" onClick={() => removeBox(id)}>X</button>
      </div>

    </div>
  );
};

export default Box;