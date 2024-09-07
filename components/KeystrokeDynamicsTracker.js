import React, { useCallback } from 'react';
import { useKeystrokeDynamics } from '../hooks/useKeystrokeDynamics';

const KeystrokeDynamicsTracker = ({ children }) => {
  const { handleKeyDown, handleKeyUp } = useKeystrokeDynamics();

  const handleKeyDownCallback = useCallback((e) => {
    handleKeyDown(e.key);
  }, [handleKeyDown]);

  const handleKeyUpCallback = useCallback((e) => {
    handleKeyUp(e.key);
  }, [handleKeyUp]);

  return (
    <div onKeyDown={handleKeyDownCallback} onKeyUp={handleKeyUpCallback}>
      {children}
    </div>
  );
};

export default KeystrokeDynamicsTracker;
