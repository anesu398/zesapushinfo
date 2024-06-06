const { db } = require('./firebase');
console.log(db); // Add this line to see what `db` contains

const addData = async () => {
  const endpoints = [
    { name: 'Get User Data' },
    { name: 'Create New User' },
    { name: 'Update User Data' },
    { name: 'Delete User' },
    { name: 'List All Users' },
  ];

  for (const endpoint of endpoints) {
    await db.collection('endpoints').add(endpoint);
  }

  console.log('Data added');
};

addData();
