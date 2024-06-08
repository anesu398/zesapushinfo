import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8800/api',
});

export const getLoadsheddingStatuses = async () => {
  try {
    const response = await api.get('/loadshedding-status');
    return response.data;
  } catch (error) {
    console.error('Error fetching loadshedding statuses:', error);
    throw error;
  }
};

export const searchArea = async (query) => {
  try {
    const response = await api.get('/search-area', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching area:', error);
    throw error;
  }
};
