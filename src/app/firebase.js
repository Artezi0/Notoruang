import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAH2EpU0xyDblLKysSFVMGBDuITlLwpevM",
  authDomain: "notoruang-ad8c8.firebaseapp.com",
  projectId: "notoruang-ad8c8",
  storageBucket: "notoruang-ad8c8.appspot.com",
  messagingSenderId: "470575970150",
  appId: "1:470575970150:web:c6c60fb6231e391a8c7aa7"
})

export const db = getFirestore(firebaseConfig)