import axios from 'axios/index';

// Get all phones
export const getPhoneList = () => axios.get('http://localhost:1337/api/v1/phones');

// Delete phone
export const deletePhone = (phone) => axios.delete(`http://localhost:1337/api/v1/phones/${phone.id}`);

// Update existing phone
export const updatePhone = (phone) => axios.put(`http://localhost:1337/api/v1/phones/${phone.id}`, phone);

// Create new phone
export const addPhone = (phone) => axios.post('http://localhost:1337/api/v1/phones/', phone);
