import React, { useState } from 'react';
import { useKeystrokeDynamics } from '../hooks/useKeystrokeDynamics';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const { collectData } = useKeystrokeDynamics();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keystrokeData = collectData();
    console.log('Collected keystroke data:', keystrokeData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;