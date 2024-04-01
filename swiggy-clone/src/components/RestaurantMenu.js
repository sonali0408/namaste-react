import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [activeIndex, setActiveIndex] = useState(null);

  if (resInfo === null) {
    return <ShimmerComponent></ShimmerComponent>;
  } else {
    const { name, cuisines, costForTwoMessage, avgRating } =
      resInfo?.cards[0]?.card?.card?.info;
    const categories =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    }

    const resCatData = categories.map((category, index) => {
      return (
        <RestaurantCategory
          data={category?.card?.card}
          isActive={activeIndex === index}
          key={category?.card?.card?.title}
          onShow={() => handleClick(index)}
        ></RestaurantCategory>
      );
    });

    return (
      <div className="body mx-[100px]">
        <div className="menu-container w-9/12 mx-auto">
          <h1>{name}</h1>
          <h2>
            {cuisines.join(",")} - {costForTwoMessage}
          </h2>

          {resCatData}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
