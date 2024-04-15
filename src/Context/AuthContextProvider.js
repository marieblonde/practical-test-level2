import React, { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthContextProvider({children }) {
 const [currentUser, setCurrentUser] = useState('');

 const updateUser = (users)=> {
  setCurrentUser(users)
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
