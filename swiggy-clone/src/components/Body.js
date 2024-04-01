import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
//import restaurantList from '../utils/mockData';
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//let listOfRestaurants = restaurantList;

const Body = () => {
  // State variable - Superpowerful
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchStr, setSearchStr] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser, setUserName} = useContext(UserContext);

  // Use Effect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enable d=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResData = await data.json();

    setListOfRestaurants(
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  function searchRestaurant() {
    let searchFilterData = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchStr.toLowerCase());
    });

    setFilteredRestaurants(searchFilterData);
  }

  let resContainer;
  //console.log(listOfRestaurants);
  if (listOfRestaurants.length === 0) {
    resContainer = <ShimmerComponent />;
  } else {
    resContainer = filteredRestaurants.map((res) => (
      <Link
        to={"/restaurants/" + res.info.id}
        key={res.info.id}
        className="resNameLink"
      >
        {res.info.promoted ? (
          <RestaurantCardPromoted resObj={res}></RestaurantCardPromoted>
        ) : (
          <RestaurantCard resObj={res}></RestaurantCard>
        )}
      </Link>
    ));
  }

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }

  return (
    <div className="body mx-[100px]">
      <div className="search-filter flex justify-center items-center">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="search-box w-64 py-2.5 px-5 border-solid border border-black"
            value={searchStr}
            onChange={(e) => {
              setSearchStr(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="p-2.5 border-solid border border-black border-l-0"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => {
                searchRestaurant();
              }}
            />
          </button>
          {/** Setting userContext using UserContext.Provider */}
          <input
            type="text"
            placeholder="Search.."
            name="changeUserName"
            className="search-box w-40 ml-4 py-2.5 px-5 border-solid border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
        <div className="filter ml-4 px-5 py-2.5 border border-black bg-white">
          <button
            className="fiter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <hr className="mt-8 mb-4"></hr>
      <h2 className="text-2xl font-semibold">Top Restaurants near me</h2>
      <div className="restaurant-container flex flex-wrap text-left">
        {resContainer}
      </div>
    </div>
  );
};

export default Body;
