import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons';

const RestaurantCard = (props) => {
    console.log(props);
    const { resObj } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId, areaName, aggregatedDiscountInfoV3 } = resObj.info;
    const { header, subHeader } = resObj.info.aggregatedDiscountInfoV3 ? resObj.info.aggregatedDiscountInfoV3 : "";
    return (
        <div className='restaurant-card' style={{ backgroundColor: '#fff' }}>
            <div className="restaurant-image-container">
                <img className='restaurant-logo' alt='restaurant-logo'
                    src={CDN_URL + cloudinaryImageId}></img>
                <div className="restaurant-header">{header}{" "}{subHeader}</div>
            </div>
            <div className="card-content">
                <div className="restaurant-name">{name}</div>
                <div className="restaurant-card-subtext-container">
                    <div><FontAwesomeIcon icon={faStar} className="star-icon" /></div>
                    <div className="restaurant-rating-eta">
                        <span>{avgRating}</span>
                        <span><FontAwesomeIcon icon={faCircle} className="fa-circle" /></span>
                        <span>{sla.slaString}</span>
                    </div>
                </div>
                <div className="restaurant-cuisine">{cuisines.join(',')}</div>
                <div className="restaurant-area">{areaName}</div>
                <div className="restaurant-cost">{costForTwo}</div>
            </div>
        </div>
    )
}

export default RestaurantCard;