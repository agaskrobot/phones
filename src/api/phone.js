import axios from 'axios/index';

// Get all phones
export const getPhoneList = () => axios.get('http://localhost:8080/api/v1/phones');

// Get phone
export const getPhone = (phoneId) => axios.get(`http://localhost:8080/api/v1/phones/${phoneId}`);

// Delete phone
export const deletePhone = (phoneId) => axios.delete(`http://localhost:8080/api/v1/phones/${phoneId}`);

// Update existing phone
export const updatePhone = (phoneId, data) => axios.put(`http://localhost:8080/api/v1/phones/${phoneId}`, data);

// Create new phone
export const addPhone = (data) => axios.post('http://localhost:8080/api/v1/phones/', { name: data });
