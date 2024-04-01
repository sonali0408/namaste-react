import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  //console.log(props);
  const { resObj } = props;
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
    areaName,
  } = resObj.info;
  const { header, subHeader } = resObj.info.aggregatedDiscountInfoV3
    ? resObj.info.aggregatedDiscountInfoV3
    : "";
  return (
    <div
      className="restaurant-card w-56 h-72 m-5 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:opacity-80"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="restaurant-image-container">
        <img
          className="restaurant-logo w-[100%] h-[150px]"
          alt="restaurant-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <div className="restaurant-header">
          {header} {subHeader}
        </div>
      </div>
      <div className="card-content mx-2.5 text-base">
        <div className="restaurant-name text-lg font-bold">{name}</div>
        <div className="restaurant-card-subtext-container">
          <div>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </div>
          <div className="restaurant-rating-eta">
            <span>{avgRating}</span>
            <span>
              <FontAwesomeIcon icon={faCircle} className="fa-circle" />
            </span>
            <span>{sla.slaString}</span>
          </div>
        </div>
        <div className="restaurant-cuisine overflow-hidden break-words tracking-tight">
          {cuisines.join(",")}
        </div>
        <div className="restaurant-area">{areaName}</div>
        <div className="restaurant-cost">{costForTwo}</div>
      </div>
    </div>
  );
};

// Higher Order Component
/**  Input - restaurantCard & Output - promoted restaurant card */
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-5 rounded-3xl px-4 z-10">Promoted</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
