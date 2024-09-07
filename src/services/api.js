import axios from 'axios';

const API_URL = 'http://localhost:8080/your-webapp-name';

export const sendKeystrokeData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/keystroke-data`, data, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error sending keystroke data:', error);
    throw error;
  }
};

export const login = async (email, password, keystrokeData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username: email,
      password,
      keystrokeData
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (name, email, password, contact, keystrokeData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      pass: password,
      contact,
      keystrokeData
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${API_URL}/logout`, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};