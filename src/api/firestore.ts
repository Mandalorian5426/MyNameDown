import {
  doc, getFirestore, setDoc,
} from 'firebase/firestore';
import firebaseApp from './firebase';

export const initialiseFirestore = () => getFirestore(firebaseApp);
export const db = initialiseFirestore();

export enum Collections {
  USER_ACCOUNT = 'UserAccount',
}

const firestore = {
  db,
  addOrUpdate: <T>(id: string, path: string, data: T) => setDoc(doc(db, path, id), data),
};

export default firestore;
