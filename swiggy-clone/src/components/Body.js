import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons';
import restaurantList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

//let listOfRestaurants = restaurantList;

const Body = () => {
    // State variable - Superpowerful 
    let [listOfRestaurants, setListOfRestaurants]= useState(restaurantList);
    return (
        <div className='body'>
            <div className='search-container'>
                <input type='text' placeholder="Search.." name="search" className='search-box'></input>
                <button type="submit" classN>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className='filter'>
                <button className='fiter-btn' onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
                    setListOfRestaurants(filteredList)
                    console.log(filteredList)
                }}>
                    <FontAwesomeIcon icon={faFilter} />
                    Filter
                </button>
            </div>
            <hr></hr>
            <h2>Top Restaurants near me</h2>
            <div className='restaurant-container'>
                {listOfRestaurants.map((res) => (
                    <RestaurantCard
                        key={res.info.id} resObj={res}></RestaurantCard>
                ))}
            </div>
        </div>
    )
}

export default Body;