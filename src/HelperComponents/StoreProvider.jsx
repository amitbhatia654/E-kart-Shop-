import React, { useState, createContext, useContext, useEffect } from 'react'
import { initializeApp } from "firebase/app";
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


export default function StoreProvider(props) {

  const [loginUser, setLoginUser] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUser(user)
      } else {
        setLoginUser(null)
      }
    });
  })

  var data = localStorage.getItem('Allproduct')
  if (data)
    var pData = JSON?.parse(localStorage.getItem('Allproduct'))
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
    }}>
      {props.children}
    </cartContext.Provider>
  )
}
