import {foodImgUrl} from './../utils/constant';
const RestaurantCard = ({RestaurantData}) =>{
    const {name,avgRating, cuisines, costForTwo, cloudinaryImageId} = RestaurantData
    return(
      <div className='card'>
        <img className='card-img' src={foodImgUrl+cloudinaryImageId} />
        <p>{avgRating}/5 stars</p>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4> {costForTwo}</h4>    
      </div>
    )
  }
export default RestaurantCard;
