import { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ data, isActive, onShow }) => {
  const openCloseAccordion = () => {
    onShow();
  };

  
  //console.log("Category list item is", data.itemCards);
  return (
    <div
      className="my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
      onClick={openCloseAccordion}
    >
      <div className=" flex justify-between">
        <span className="font-bold text-lg mb-2">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-right">🔽</span>
      </div>
      {isActive && <CategoryItemList data={data.itemCards}></CategoryItemList>}
    </div>
  );
};

export default RestaurantCategory;
