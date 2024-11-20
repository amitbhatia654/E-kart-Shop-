import React, { useState, createContext, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const cartContext = createContext(null);
export const useStore = () => useContext(cartContext);

const firebaseConfig = {
  apiKey: "AIzaSyDbMXEtLj2WjBlNEVwUR56XAgCKdlVWAVk",
  authDomain: "shoppingcart-db4c8.firebaseapp.com",
  projectId: "shoppingcart-db4c8",
  storageBucket: "shoppingcart-db4c8.firebasestorage.app",
  messagingSenderId: "582839786976",
  appId: "1:582839786976:web:ac04659951941677c15f85",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function StoreProvider(props) {
  var loginData = JSON?.parse(localStorage.getItem("loggedInUser"));

  const [loginUser, setLoginUser] = useState(loginData || null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
      } else {
        setLoginUser(null);
        localStorage.setItem("loggedInUser", null);
      }
    });
  });

  var data = localStorage.getItem("Allproduct");
  if (data) var pData = JSON?.parse(localStorage.getItem("Allproduct")); // to convert data from stringify
  const [cartData, setCartData] = useState(pData || []);

  const addProduct = (data) => {
    setCartData([...cartData, data]);
    var arr = cartData;
    arr.push(data);
    localStorage.setItem("Allproduct", JSON.stringify(arr));
  };

  const removeProduct = (id) => {
    var newData = cartData.filter((d) => d.id != id);
    setCartData(newData);
    localStorage.setItem("Allproduct", JSON.stringify(newData));
  };

  const removeAllItems = () => {
    setCartData([]);
    localStorage.setItem("Allproduct", []);
  };

  const signupNewUser = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return user;
    } catch (error) {
      return error.message;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setLoginUser(res.user);
      return res.user;
    } catch (error) {
      return error.message;
    }
  };

  const logout = () => {
    signOut(auth);
    localStorage.setItem("loggedInUser", null);
  };

  const myProfile = async () => {
    const docRef = doc(db, "userDetails", loginUser?.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  const updateUserProfile = async (uid, name, phone, address, email) => {
    try {
      await setDoc(doc(db, "userDetails", uid), {
        name,
        phone,
        address,
        email,
      });
      return "Profile Updated Suucessfully";
    } catch (error) {
      console.error("Error adding document: ", error);
      return error.message;
    }
  };

  const addOrderDetails = async (productDetails, orderBy) => {
    try {
      await addDoc(collection(db, "orders"), {
        productDetails,
        orderBy,
        createdAt: new Date(),
      });
      return "Ordered Successfully";
    } catch (error) {
      console.error("Error adding document: ", error);
      return error.message;
    }
  };

  const fetchOrdersByOrderBy = async (orderByValue) => {
    try {
      // Create a reference to the 'orders' collection
      const ordersRef = collection(db, "orders");

      // Create a query to filter documents where 'orderBy' matches the provided value
      const q = query(ordersRef, where("orderBy", "==", orderByValue));

      // Fetch the documents matching the query
      const querySnapshot = await getDocs(q);

      // Process the results
      const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document data
      }));

      return orders; // Return the fetched orders
    } catch (error) {
      console.error("Error fetching orders: ", error);
      return error.message;
    }
  };

  return (
    <cartContext.Provider
      value={{
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
        removeAllItems,
        addOrderDetails,
        fetchOrdersByOrderBy,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
