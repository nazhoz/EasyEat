import React, { createContext,useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const res = await axios.get("http://localhost:1145/burgers");
            setProducts(res.data);
        }
        fetchProducts();
    },[])

  const contextValue = {
    products
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;