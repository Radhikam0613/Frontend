import React, { createContext, useState } from 'react';

export const KeystrokeDynamicsContext = createContext();

export const KeystrokeDynamicsProvider = ({ children }) => {
  const [keystrokeData, setKeystrokeData] = useState({});

  return (
    <KeystrokeDynamicsContext.Provider value={{ keystrokeData, setKeystrokeData }}>
      {children}
    </KeystrokeDynamicsContext.Provider>
  );
};