import React from "react";
import { useNavigate } from "react-router-dom";

const CookList = ({ products, currentPage, totalPages, onPageChange }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/cookview/${id}`);
  };
  return (
    <div>
      <div className="flex flex-wrap items-center justify-around  w-[100%] gap-3 py-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-lg p-6 justify-between items-center h-[30%] gap-4 bg-white/20 backdrop-blur-md shadow-lg"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                className="w-[250px] h-[230px] object-cover"
                src={`http://localhost:1145/${product.images}`}
                alt="no images"
              />
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg">{product.name}</span>
                <span className="text-md text-slate-600">
                  $ {product.price}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
      <div className="flex justify-center  py-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } rounded`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CookList;
