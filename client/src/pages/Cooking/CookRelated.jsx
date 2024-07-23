import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CookRelated = ({ category }) => {
    const { products } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [trigger, setTrigger] = useState(0);
    const navigate = useNavigate();
  
    const getRandomRelatedProducts = () => {
      const filteredProducts = products.filter(
        (product) => product.categories === category
      );
      const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());
      return shuffledProducts.slice(0, 4);
    };
  
    useEffect(() => {
      setRelatedProducts(getRandomRelatedProducts());
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, products, trigger]);
  
    const handleProductClick = (id) => {
      navigate(`/cookview/${id}`);
      setTrigger((prev) => prev + 1);
      window.scroll({
          top: 0,
          behavior: "instant"
      });
    };
  return (
    <div className="flex flex-col justify-around items-center h-[70vh]">
    <div>
      <h1 className="text-[40px] font-bold text-white">Related Products</h1>
      <hr className="border-white border-2" />
    </div>
    <div className="flex w-[100%] justify-around gap-4">
      {relatedProducts.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          className="flex flex-col items-center justify-evenly bg-gray-200 w-[300px] h-[250px] rounded-lg"
        >
          <img
            className="w-[150px] h-[150px] object-cover mb-2"
            src={`http://localhost:1145/${product.images}`}
            alt={product.name}
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CookRelated