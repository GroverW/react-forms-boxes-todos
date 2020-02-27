import React, { useState } from 'react';

const INITIAL_STATE = {
  backgroundColor: "",
  width: "",
  height: ""
}

const BoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(formData => INITIAL_STATE)

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <div className="BoxForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input id="backgroundColor"
          name="backgroundColor"
          type="text"
          value={formData.backgroundColor}
          onChange={handleChange} />

        <label htmlFor="width">Width:</label>
        <input id="width"
          name="width"
          type="text"
          value={formData.width}
          onChange={handleChange} />

        <label htmlFor="height">Height:</label>
        <input id="height"
          name="height"
          type="text"
          value={formData.height}
          onChange={handleChange} />

        <button>Add Box</button>
      </form>
    </div>
  );
};

export default BoxForm;