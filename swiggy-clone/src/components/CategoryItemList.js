import { DISH_IMG_API } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareCaretUp,
  faCircleStop,
} from "@fortawesome/free-regular-svg-icons";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CategoryItemList = (props) => {
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    //console.log(item);
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {props?.data?.map((item) => (
        <div key={item.card.info.id}>
          <div className="normal-dish-item-container">
            <div className="normal-dish-item">
              <div className="dishItemDetailsContainer">
                <div>
                  <FontAwesomeIcon
                    icon={
                      item.card.info.itemAttribute.vegClassifier === "NONVEG"
                        ? faSquareCaretUp
                        : faCircleStop
                    }
                    className={
                      item.card.info.itemAttribute.vegClassifier === "NONVEG"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  />
                </div>
                <div>
                  <h3 className="dish-item-recipeName">
                    {item.card.info.name}
                  </h3>
                </div>
                <div>
                  <span className="dish-item-price">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                    {item.card.info.price / 100}
                  </span>
                  <span class="dish-item-discountdetails">
                    <span class="dish-item-discountdetails_tagTitle">
                      20% OFF
                    </span>
                    <span> | USE SWIGGYIT</span>
                  </span>
                </div>
                <div className="dish-item-description">
                  {item.card.info.description}
                </div>
              </div>
              <div className="menuItemImageContainer">
                <div>
                  <button className="styles_itemImageBtn">
                    <img
                      alt="Moroccan Mint Green Tea"
                      className="styles_itemImage"
                      width="256"
                      src={DISH_IMG_API + item.card.info.imageId}
                    ></img>
                  </button>
                </div>
                <div className="styles_itemAddButton">
                  <div className="main_buttonInner">
                    <div className="_1RPOp" onClick={() => addItemToCart(item)}>
                      ADD +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 border-b border-gray-400"></div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
