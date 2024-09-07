import React, { useState } from 'react';
import { useKeystrokeDynamics } from '../hooks/useKeystrokeDynamics';
import { login } from '../services/api';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { collectData } = useKeystrokeDynamics();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const keystrokeData = collectData();
    try {
      const response = await login(email, password, keystrokeData);
      console.log('Login response:', response);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;