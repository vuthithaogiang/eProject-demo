import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    console.log('auth context: ', auth);
    console.log(auth.id);
    const [currentAccount, setCurrentAccount] = useState(false);

    useEffect(() => {
        if (auth.id) {
            setCurrentAccount(true);
        } else {
            setCurrentAccount(false);
        }
    }, [auth]);

    const loginAccount = () => {};

    return (
        <AuthContext.Provider value={{ auth, setAuth, currentAccount, setCurrentAccount }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
