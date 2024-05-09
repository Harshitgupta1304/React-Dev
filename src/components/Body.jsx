import RestaurantCard from "./RestaurantCard";
import Data from './../utils/data.json'
const Body =() =>{

    return(
      <div className='container'>
        <div className='search-bar'>Search</div>
        <div className='card-container'>
          {Data.data.restaurants.map((restaurant)=>{
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