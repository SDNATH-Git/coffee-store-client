import React from 'react';
import { AuthContexts } from './AuthContexts';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser,
        singInUser,

    }

    return (
        <AuthContexts value={userInfo}>
            {children}
        </AuthContexts>
    );
};

export default AuthProvider;