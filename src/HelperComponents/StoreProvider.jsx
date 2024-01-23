import React, { useState, createContext, useContext, useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";


import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
}
  from "firebase/auth";

const cartContext = createContext(null)
export const useStore = () => useContext(cartContext);

const firebaseConfig = {
  apiKey: "AIzaSyBM9EXGr69l71CsaPmmtPYTEpZ4KVzXszE",
  authDomain: "ecommerce-5a3ef.firebaseapp.com",
  projectId: "ecommerce-5a3ef",
  storageBucket: "ecommerce-5a3ef.appspot.com",
  messagingSenderId: "501399458164",
  appId: "1:501399458164:web:74e4440be2a61d85995c21"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export default function StoreProvider(props) {

  var loginData = JSON?.parse(localStorage.getItem('loggedInUser'))

  const [loginUser, setLoginUser] = useState(loginData || null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUser(user)
        localStorage.setItem("loggedInUser", JSON.stringify(user))
      } else {
        setLoginUser(null)
        localStorage.setItem("loggedInUser", null)
      }
    });
  })

  var data = localStorage.getItem('Allproduct')
  if (data)
    var pData = JSON?.parse(localStorage.getItem('Allproduct'))  // to convert data from stringify
  const [cartData, setCartData] = useState(pData || [])

  const addProduct = (data) => {
    setCartData([...cartData, data])
    var arr = cartData
    arr.push(data)
    localStorage.setItem("Allproduct", JSON.stringify(arr))
  }

  const removeProduct = (id) => {
    var newData = cartData.filter((d) => (d.id != id))
    setCartData(newData)
    localStorage.setItem("Allproduct", JSON.stringify(newData))
  }

  const signupNewUser = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      return user;
    } catch (error) {
      return error.message
    }

  }

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      setLoginUser(res.user)
      return res.user;
    } catch (error) {
      return error.message
    }
  }

  const logout = () => {
    signOut(auth);
    localStorage.setItem("loggedInUser", null)

  }


  const myProfile = async () => {
    const docRef = doc(db, "userDetails", loginUser?.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }


  const updateUserProfile = async (uid, name, phone, address) => {
    try {
      await setDoc(doc(db, "userDetails", uid), {
        name,
        phone,
        address
      });
      return "Profile Updated Suucessfully"
    } catch (error) {
      console.error("Error adding document: ", error);
      return error.message;
    }
  }

  return (

    <cartContext.Provider value={{
      cartData,
      setCartData,
      addProduct,
      removeProduct,
      signupNewUser,
      loginUser,
      logout,
      login,
      myProfile,
      updateUserProfile,
    }}>
      {props.children}
    </cartContext.Provider>
  )
}
