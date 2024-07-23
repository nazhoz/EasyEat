import React from "react";

const Skelton = () => {
  return (
    <div className="animate-pulse flex space-x-4 py-4">
      <div className="rounded-md bg-gray-200 w-24 h-24"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="flex space-x-2">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Skelton;
