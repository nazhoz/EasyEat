import React, { useContext, useMemo, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import Category from "./Category";
import List from "./List";

const ProductList = () => {
  const { products } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    if (query) {
      const suggestions = products
        .filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((product) => product.name);
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSearchSuggestions([]);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.categories === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery, products]);

  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    products.forEach((product) => {
      if (!counts[product.categories]) {
        counts[product.categories] = 0;
      }
      counts[product.categories] += 1;
    });
    return counts;
  }, [products]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredProducts]);
  return (
    <div className="bg-customerBackroundColor  w-[100%] flex items-center justify-start  gap-10">
      {/* <span className='text-[45px] font-bold'>Shops</span>  */}
      <div className="flex justify-between items-start w-[100%] mt-[140px] px-9 ">
        <div className="w-[80%]">
          <List
            products={paginatedProducts}
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="bg-white w-[250px] rounded-lg mt-8">
          <Category
            onCategoryClick={handleCategoryClick}
            onSearchChange={handleSearchChange}
            onSuggestionClick={handleSuggestionClick}
            searchQuery={searchQuery}
            searchSuggestions={searchSuggestions}
            categoryCounts={categoryCounts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
