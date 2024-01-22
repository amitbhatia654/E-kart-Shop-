import React, { useState, createContext, useContext } from 'react'


const cartContext = createContext(null)

export const useStore = () => useContext(cartContext);

export default function StoreProvider(props) {
  const [cartData, setCartData] = useState([])

  const addProduct = (data) => {
    setCartData([...cartData, data])
    
  }

  const removeProduct = (id) => {
    setCartData( cartData.filter((d)=>(d.id !=id)))
  }

  return (

    <cartContext.Provider value={{
      cartData,
      setCartData,
      addProduct,
      removeProduct
    }}>
      {props.children}
    </cartContext.Provider>
  )
}
