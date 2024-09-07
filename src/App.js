import React from 'react';
import { KeystrokeDynamicsProvider } from './context/KeystrokeDynamicsContext';
import KeystrokeDynamicsTracker from './components/KeystrokeDynamicsTracker';
import Form from './components/Form';

function App() {
  return (
    <KeystrokeDynamicsProvider>
      <div className="App">
        <h1>Keystroke Dynamics Demo</h1>
        <KeystrokeDynamicsTracker>
          <Form />
        </KeystrokeDynamicsTracker>
      </div>
    </KeystrokeDynamicsProvider>
  );
}

export default App;