import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
const Body =() =>{
  const [topRestaurants, setTopRestaurants] = useState([])
  const [searchText, setSearchText] =useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  console.log(topRestaurants);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    console.log(data)
     const jsonData = await data.json();
    console.log(jsonData?.data)
    setFilteredRestaurants(jsonData?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants)
    setTopRestaurants(jsonData?.data?.cards[4].card.card.gridElements?.infoWithStyle?.restaurants)
  }
  const handleClick = () =>{
    const filteredRestaurants = filteredRestaurants.filter((restaurant)=>{
      return restaurant.info.avgRating >= 4
    })
    setFilteredRestaurants(filteredRestaurants)
  };
  const handleSearch = () =>{
   console.log(searchText)
    setFilteredRestaurants(topRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))
  }
  return(
    
      <div className='container'>
        <div className='search-bar'>
          <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={handleSearch}>Search </button>
          <button onClick={handleClick} >Top Rated Restaurants</button>
        </div>
        {topRestaurants.length === 0  ? ( <Shimmer />) : ( 
        <div className='card-container'>
          {filteredRestaurants.map((restaurant)=>{
            return(
              <RestaurantCard RestaurantData={restaurant.info} key={restaurant.info.id}/>
            )
            })
          }
        </div>
        )}
      </div>
        
    )
  }
export default Body;