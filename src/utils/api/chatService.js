import axios from 'axios';

const API_BASE_URL = 'https://agentic-hr-api.onrender.com';

const chatApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getChatResponse = async (jobData) => {
  console.log(jobData)
  try {
    const response = await chatApi.post('/chat', jobData);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'An error occurred while processing your request';
    throw new Error(errorMessage);
  }
};

export const submitCompleteForm = async (formData) => {
  try {
    const response = await chatApi.post('/submit-form', {
      ...formData,
      timestamp: new Date().toISOString()
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'An error occurred while submitting the form';
    throw new Error(errorMessage);
  }
};
