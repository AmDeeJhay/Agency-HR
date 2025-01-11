import { useState } from 'react';
import { getChatResponse } from '../utils/api/chatService';

export const useChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendChatRequest = async ({ jobTitle, skills, experience }) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getChatResponse({
        job_title: jobTitle,
        skills,
        experience,
      });
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendChatRequest,
    loading,
    error,
  };
};
