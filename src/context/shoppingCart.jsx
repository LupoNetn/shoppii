import React, { createContext,useState } from "react";

export const cartContext = createContext();

const shoppingCart = ({children}) => {
  const [cart, setCart] = useState([]);
  const cartLength = cart.length

  const addToCart = async (id) => {
    //check if Item exists
    const existingItem = cart.find((c) => c.id === id);

    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setCart((prev) => [
        ...prev,
        {
          ...data,
          quantitiy: data.quantity + 1,
        },
      ]);
    }
    console.log('added to cart' + id)
  };

  const deleteFromCart = async (id) => {
     setCart(prev => prev.filter(item => item.id != id))

  }

  return (
    <cartContext.Provider value={{ cart,cartLength, addToCart,deleteFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default shoppingCart;
