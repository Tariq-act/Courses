import { db } from '../config/firebase-config';
import { getDocs, collection, getDoc, doc } from 'firebase/firestore';
import { allCourses } from '../store/actions/coursesSlice';
import { Dispatch } from 'redux';

export const fetchCourses = async (dispatch: Dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'courses'));
    const coursesData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));

    dispatch(allCourses(coursesData));
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};


export const getSingleCourse = async (collectionName: string, documentId: string) => {
  const documentRef = doc(db, collectionName, documentId);
  try {
    const docSnapshot = await getDoc(documentRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw error;
  }
}