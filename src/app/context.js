import { createContext, useContext, useEffect, useState } from 'react'
import { doc, collection, onSnapshot, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'

const UserContext = createContext()

export function AuthContextProvider({ children }) {  
  const [ project, setProject ] = useState([])
  
  

  return (
    <UserContext.Provider 
      value={{ project }}>
      {children}
    </UserContext.Provider>
  )
}

export function Context() {
  return useContext(UserContext)
}