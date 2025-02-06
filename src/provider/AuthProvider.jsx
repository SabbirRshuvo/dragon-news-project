/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegistar = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      setLoading(true);
    });
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setLoading(true);
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("logout");
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const name = "sabbir";
  const authInfo = {
    name,
    handleRegistar,
    handleSignIn,
    user,
    handleSignOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
