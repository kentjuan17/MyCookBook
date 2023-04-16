import { useState, useEffect, createContext } from "react";
import { auth, db } from "../database/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({});

  // get Logged in user data
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      // Loads user data
      if (user) {
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef)
          .then((doc) => {
            doc.exists && setUserData(doc.data());
          })
          .catch((err) => console.log(err));
      }
      setCurrentUser(user);

      // for delete
      console.log(user);
    });

    return () => unsub();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log("Sign out failed");
      });
  };

  const value = {
    currentUser,
    userData,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
