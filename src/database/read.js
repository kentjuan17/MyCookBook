import { db } from "./config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

/**
 * Loads all documents from Recipes collection
 * @returns
 *  Array with the recipes
 */
export async function load(id) {
  const q = query(collection(db, "recipes"), where("userId", "==", id));
  try {
    const qSnap = await getDocs(q);
    const data = [];
    qSnap.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    return data;
  } catch (error) {
    throw new Error("Failed to load database", error);
  }
}

/**
 * Load a single post from the database
 * @param {*} id
 *  post id
 * @returns
 *  single post data
 */
export async function loadById(id) {
  console.log("Load by ID:", id);
  try {
    const docRef = doc(db, "recipes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    throw new Error("failed to load the post");
  }

  return null;
}
