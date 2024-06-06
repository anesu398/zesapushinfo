const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAYXCyWEi12xsCzDp3ihsBpmfJCnocJehI",
  authDomain: "shedsense-api-explorer.firebaseapp.com",
  projectId: "shedsense-api-explorer",
  storageBucket: "shedsense-api-explorer.appspot.com",
  messagingSenderId: "684625648068",
  appId: "1:684625648068:web:14f435eb97ecf68495ac91",
  measurementId: "G-JF88JGLB2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
module.export={ db };
