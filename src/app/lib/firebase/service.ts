import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import bcrypt from 'bcrypt';
import app from './init';
const firestore = getFirestore(app);
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc: any) => {
    return { ...doc.data(), id: doc.id };
  });
  return data;
}
export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function registerData(data: any) {
  const q = query(
    collection(firestore, 'users'),
    where('email', '==', data.email)
  );
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  if (users.length > 0) {
    return { status: false, statusCode: 400, message: 'Email already exists' };
  } else {
    data.role = 'admin';
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, 'users'), data);
      return {
        status: true,
        statusCode: 200,
        message: 'Registration Successful',
      };
    } catch (error) {
      return {
        status: false,
        statusCode: 400,
        message: 'Registration Failed',
      };
    }
  }
}

export async function loginData(data: any) {
  const q = query(
    collection(firestore, 'users'),
    where('email', '==', data.email)
  );
  const snapshot = await getDocs(q);
  const userData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  if (userData) {
    return userData[0];
  } else {
    return null;
  }
}
