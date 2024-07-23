import React from "react";

const CookCategory = ({
  onCategoryClick,
  onSearchChange,
  onSuggestionClick,
  searchQuery,
  searchSuggestions,
  categoryCounts,
}) => {
  const categories = [
    "burger",
    "pizza_&_pastas",
    "hotdog_and_snacks",
    "meat_&_fish",
    "popular_dishes",
    "Thai_dishes",
    "coffees",
    "teas",
  ];
  return (
    <div className="flex flex-col items-center justify-around h-[390px]">
      <div className="h-[40px] w-[230px] rounded-md flex items-center justify-center border-2">
        <input
          type="text"
          placeholder="Search Products"
          className="border-none outline-none bg-transparent"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchSuggestions.length > 0 && (
          <div className="absolute w-[250px] bg-white border border-gray-200 rounded-md h-[350px] overflow-y-scroll mt-[400px] custom-scrollbar">
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => onSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" w-[230px] h-[300px] flex flex-col items-center justify-evenly">
        <span>Categroies</span>
        <div className="flex flex-col justify-evenly w-[230px] h-[230px] px-5">
          {categories.map((category) => (
            <div className="flex  items-center justify-between px-1">
              <button
                key={category}
                className="text-start hover:text-customerBackroundColor "
                onClick={() => onCategoryClick(category)}
              >
                {category}
              </button>
              <span className="text-red-500">
                ({categoryCounts[category] || 0})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookCategory;
