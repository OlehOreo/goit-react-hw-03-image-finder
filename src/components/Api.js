import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImageGallery = async (value, currentPage) => {
  const params = new URLSearchParams({
    key: '39225656-142513377f0af9cf63747c703',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: currentPage,
  });

  const response = await axios.get(`/?${params}`);
  return response.data.hits;
};
