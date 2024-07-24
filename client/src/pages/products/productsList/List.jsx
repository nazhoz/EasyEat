import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const List = ({
  products,
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/productview/${id}`);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-around w-[100%] gap-3 py-8">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg p-6 shadow-2xl justify-between items-center h-[30%] gap-4 bg-white"
              >
                <Skeleton width={250} height={230} />
                <div className="flex flex-col items-center gap-3">
                  <Skeleton width={150} height={20} />
                  <Skeleton width={100} height={20} />
                </div>
              </div>
            ))
          : products.length > 0
          ? products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-lg p-6 shadow-2xl justify-between items-center h-[30%] gap-4 bg-white"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  className="w-[250px] h-[230px] object-cover bg-gray-200 rounded-lg"
                  src={`http://localhost:1145/${product.images}`}
                  alt={product.name}
                />
                <div className="flex flex-col items-center gap-3">
                  <span className="text-lg">{product.name}</span>
                  <span className="text-md text-slate-600">
                    $ {product.price}
                  </span>
                </div>
              </div>
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg p-6 shadow-2xl justify-between items-center h-[30%] gap-4 bg-white"
              >
                <Skeleton width={250} height={230} />
                <div className="flex flex-col items-center gap-3">
                  <Skeleton width={150} height={20} />
                  <Skeleton width={100} height={20} />
                </div>
              </div>
            ))}
      </div>
      <div className="flex justify-center py-6">
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

export default List;
