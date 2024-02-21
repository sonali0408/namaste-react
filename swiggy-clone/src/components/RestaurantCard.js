import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    const { resObj } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resObj.info;
    return (
        <div className='restaurant-card' style={{ backgroundColor: '#fff' }}>
            <img className='restaurant-logo' alt='restaurant-logo'
                src={CDN_URL + cloudinaryImageId}></img>
            <div>{name}</div>
            <div>{cuisines.join(',')}</div>
            <div>{avgRating}</div>
            <div>{costForTwo}</div>
            <div>{sla.deliveryTime}</div>
        </div>
    )
}

export default RestaurantCard;