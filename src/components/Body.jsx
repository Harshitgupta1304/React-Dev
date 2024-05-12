import RestaurantCard from "./RestaurantCard";
import Data from './../utils/data.json'
import { useState } from "react";
const Body =() =>{
  const [topRestaurants, setTopRestaurants] = useState(Data?.data?.restaurants)
  console.log(topRestaurants)
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