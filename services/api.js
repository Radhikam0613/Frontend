const API_URL = 'ithe api endpoint ch url jato';

export const sendKeystrokeData = async (data) => {
  try {
    const response = await fetch(`${API_URL}/keystroke-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Error sending keystroke data:', error);
    throw error;
  }
};