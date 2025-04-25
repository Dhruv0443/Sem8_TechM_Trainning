import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyAZsAE7Bs9qYktVsdhiunCaqKWmv01MgVw",
    authDomain: "sem8firebase.firebaseapp.com",
    projectId: "sem8firebase",
    storageBucket: "sem8firebase.firebasestorage.app",
    messagingSenderId: "426869939120",
    appId: "1:426869939120:web:06b7b22443c85cdb56d475"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Add data
export const addData = async (id, name, age) => {
  await set(ref(db, 'info/' + id), {id, name, age});
};

// Read data
export const readData = async () => {
  const snapshot = await get(ref(db, 'info/'));
  return snapshot.val();
};

// Delete data
export const deleteData = async (id) => {
  await remove(ref(db, `info/${id}`));
};

// Get data for update
export const getSingleData = async (id) => {
  const snapshot = await get(ref(db, `info/${id}`));
  return snapshot.val();
};