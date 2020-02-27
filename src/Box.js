import React from 'react';
import './Box.css';

const Box = ({ id, backgroundColor, width, height, removeBox}) => {
  const style = {
    backgroundColor,
    width,
    height
  }

  return (
    <div className="Box">
      <div style={style} className="Box-box">
        <button className="Box-remove" onClick={() => removeBox(id)}>X</button>
      </div>
      
    </div>
  );
};

export default Box;