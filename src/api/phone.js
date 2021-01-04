import axios from 'axios/index';

const baseUrl = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_URL_PREFIX + '/phones';

// Get all phones
export const getPhoneList = () => axios.get(baseUrl);

// Get phone
export const getPhone = (phoneId) => axios.get(`${baseUrl}/${phoneId}`);

// Delete phone
export const deletePhone = (phoneId) => axios.delete(`${baseUrl}/${phoneId}`);

// Update existing phone
export const updatePhone = (phoneId, data) => axios.put(`${baseUrl}/${phoneId}`, data);

// Create new phone
export const addPhone = (data) => axios.post(baseUrl, { name: data });
