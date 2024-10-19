import React, { useState } from "react";
import PropTypes from "prop-types";
import ItemCard from "../ItemCard/ItemCard";

const ShopCategory = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <ItemCard key={item?._id} item={item} />
        ))}
      </div>

      {/* Conditionally render Pagination Controls only if totalPages > 1 */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              } rounded`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

ShopCategory.propTypes = {
  items: PropTypes.any,
};

export default ShopCategory;
