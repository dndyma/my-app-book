import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
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

export async function loginGoogle(data: any, callback: Function) {
  const q = query(
    collection(firestore, 'users'),
    where('email', '==', data.email)
  );
  const snapshot = await getDocs(q);
  const userData: any = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  if (userData.length > 0) {
    data.role = userData[0].role;
    await updateDoc(doc(firestore, 'users', userData[0].id), data).then(() => {
      callback({ status: true, data: data });
    });
  } else {
    data.role = 'member';
    return await addDoc(collection(firestore, 'users'), data).then(() => {
      callback({ status: true, data: data });
    });
  }
}

export async function retrieveDataByInput(data: any) {
  const q = query(
    collection(firestore, 'product'),
    where('Category', '==', data.Category)
  );
  const snapshot = await getDocs(q);
  const userData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  if (userData) {
    return userData;
  } else {
    return null;
  }
}
