import RestaurantCard from "./RestaurantCard";
import Data from './../utils/data.json'
import { useState, useEffect } from "react";
const Body =() =>{
  const [topRestaurants, setTopRestaurants] = useState([])
  console.log(topRestaurants);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const jsonData = await data.json();
    console.log(jsonData?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants)
    setTopRestaurants(jsonData?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants)
  }
  const handleClick = () =>{
    const filteredRestaurants = topRestaurants.filter((restaurant)=>{
      return restaurant.info.avgRating >= 4
    })
    setTopRestaurants(filteredRestaurants)
  };
  return(
      <div className='container'>
        <div className='search-bar'>
          <button onClick={handleClick} >Top Rated Restaurants</button>
        </div>
        <div className='card-container'>
          {topRestaurants.map((restaurant)=>{
            return(
              <RestaurantCard RestaurantData={restaurant.info} key={restaurant.info.id}/>
            )
            })
          }
        </div>
      </div>
    )
  }
export default Body;