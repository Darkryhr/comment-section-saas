import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { auth } from './firebase';
import { createUser } from './db';
import Cookies from 'js-cookie';

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export function AuthProvider({ children }) {
  const authData = useProvideAuth();
  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async rawUser => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      createUser(user.uid, userWithoutToken);
      setUser(user);
      Cookies.set('comment-section-auth', true, {
        expires: 1,
      });
      return user;
    } else {
      setUser(false);
      Cookies.remove('comment-section-auth');
      return false;
    }
  };

  const signinWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then(res => {
      handleUser(res.user);

      Router.push('/sites');
    });
  };

  const signinWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, new GithubAuthProvider()).then(res => {
      handleUser(res.user);
    });
  };

  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider()).then(res => {
      handleUser(res.user);
    });
  };

  const signout = () => {
    Router.push('/');

    signOut(auth).then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithEmail,
    signinWithGithub,
    signinWithGoogle,
    signout,
  };
}

const formatUser = async user => {
  const token = await user.getIdToken();

  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
  };
};
