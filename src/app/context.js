import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { doc, collection, onSnapshot, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'
import { v4 as uuid } from "uuid"
import { useRouter } from 'next/navigation'

const UserContext = createContext()

export function AuthContextProvider({ children }) {  
  const [ project, setProject ] = useState([])
  const [ items, setItems ] = useState([])
  const active = useRef(false)
  const router = useRouter()

  // Get Projects 
  useEffect(() => {
    onSnapshot(collection(db, 'project'), (snapShot) => {
      let list = []      
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })  
      setProject(list)
    }, 
    (error) => {
      console.warn(error)
  })}, [])

  // Create project
  async function createProject() {
    let data = {
      'name' : 'Project',
      'image' : Math.floor(Math.random() * (7 - 1)) + 1,
      'data' : { }
    }
    await setDoc(doc(db, "project", uuid()), data)
  } 

  // Delete project
  async function deleteProject(id) {
    await deleteDoc(doc(db, "project", id))
  }

  // Get active document
  function getActive() {
    let activeProject = project.find(({ id }) => id === active)
    
    return activeProject
  }

  // Create items
  function handleItems(size, asset) {
    let obj = {
      uid: uuid(),
      asset: asset,
      size: size,
      transform: ''
    }
    items.push(obj)
  }

  function savePosition(style, test) {
    let activeItems = items.filter((item) => item.uid.includes(test))
    activeItems[0].transform = style 
  }
  
  // Save project
  async function handleUpdate() {
    await updateDoc(doc(db, 'project', active.current), {
      data: items,
    })
    router.push('/')
    localStorage.removeItem('active')
    setItems([])
  }

  return (
    <UserContext.Provider 
      value={{ 
        project,
        active,
        createProject,
        deleteProject,
        getActive,
        setItems,
        items,
        handleItems,
        handleUpdate,
        savePosition,
      }}>
      {children}
    </UserContext.Provider>
  )
}

export function Context() {
  return useContext(UserContext)
}