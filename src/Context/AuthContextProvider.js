import React, { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthContextProvider({children }) {
 const [currentUser, setCurrentUser] = useState('');

 const updateUser = (user)=> {
  setCurrentUser(user)
 }
  return (
    <authContext.Provider
      value={{
        currentUser,
        updateUser
      }}
    >
      { children }
    </authContext.Provider>
  )
}
