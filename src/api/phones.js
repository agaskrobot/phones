import axios from 'axios/index';

// Get all contacts
export const getPhoneList = () => axios.get('http://localhost:1337/api/v1/posts');

// Delete contact
export const deleteContact = (contact) => axios.delete(`https://jsonplaceholder.typicode.com/users/${contact.id}`);

// Update existing contact
export const updateContact = (contact) =>
  axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);

// Create new contact
export const addContact = (contact) => axios.post('https://jsonplaceholder.typicode.com/users', contact);
