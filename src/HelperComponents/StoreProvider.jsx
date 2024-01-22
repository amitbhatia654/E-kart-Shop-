import React, { useState, createContext, useContext } from 'react'


const cartContext = createContext(null)

export const useStore = () => useContext(cartContext);

export default function StoreProvider(props) {

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
