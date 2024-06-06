import { db } from './firebase';

const addData = async () => {
  const endpoints = [
    { name: 'Get User Data' },
    { name: 'Create New User' },
    { name: 'Update User Data' },
    { name: 'Delete User' },
    { name: 'List All Users' },
  ];

  endpoints.forEach(async endpoint => {
    await db.collection('endpoints').add(endpoint);
  });

  console.log('Data added');
};

addData();
