import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39898871-04cb208ea2f2df61877868841';

export const getImage = async initialParams => {
  const response = await axios.get(`?key=${API_KEY}`, {
    params: initialParams,
  });
  return response.data;
};
