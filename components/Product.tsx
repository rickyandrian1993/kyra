"use client";

import { affiliateLinks } from "@/data/affiliateLinks";
import Image from "next/image";
import { useState } from "react";
import Search from "./Search";

const ITEMS_PER_PAGE = 6;

export default function Product() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  // 🔍 Apply search filter first
  const filteredLinks = affiliateLinks.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔄 Apply pagination to filtered results
  const start = page * ITEMS_PER_PAGE;
  const paginatedIcons = filteredLinks.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(filteredLinks.length / ITEMS_PER_PAGE);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
  const handleNext = () => {
    if (page + 1 < totalPages) {
      setPage((p) => p + 1);
    }
  };

  // 🔁 Reset to page 0 when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(0);
  };

  const handleProdcutClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mt-4 flex flex-col items-center w-full gap-4">
      {/* Product Card Grid */}
      <Search onSearchChange={handleSearchChange} search={search} />
      <div className="grid grid-cols-2 gap-4 w-full">
        {paginatedIcons.map((product, index) => (
          <button
            key={index}
            className="bg-[#ecebe8] rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition-all duration-200 transform hover:scale-105 hover:cursor-pointer"
            onClick={() => handleProdcutClick(product.url)}
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-24 h-24 rounded-md object-cover mb-2"
            />
            <span className="text-sm font-medium text-gray-700 hover:text-pink-500 transition line-clamp-2">
              {product.name}
            </span>
          </button>
          // <a
          //   key={index}
          //   href={product.url}
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition-all duration-200"
          // >
          //   <Image
          //     src={product.image}
          //     alt={product.name}
          //     className="w-16 h-16 rounded-md object-cover mb-2"
          //   />
          //   <span className="text-sm font-medium text-gray-700 hover:text-pink-500 transition line-clamp-2">
          //     {product.name}
          //   </span>
          // </a>
        ))}
      </div>
      {/* Pagination Controls */}
      {filteredLinks.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center gap-4 w-full mt-3 px-4">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={`text-sm px-4 py-1 rounded-lg transition ${
              page === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            ◀ Prev
          </button>
          <button
            onClick={handleNext}
            disabled={page + 1 >= totalPages}
            className={`text-sm px-4 py-1 rounded-lg transition ${
              page + 1 >= totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
}
