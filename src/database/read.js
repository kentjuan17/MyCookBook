import { db } from "./config";
import { collection, getDocs, query, where } from "firebase/firestore";

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
