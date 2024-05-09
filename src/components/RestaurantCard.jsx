const RestaurantCard = ({RestaurantData}) =>{
    const FoodImgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"
    const {name,avgRating, cuisines, costForTwo, cloudinaryImageId} = RestaurantData
    return(
      <div className='card'>
        <img className='card-img' src={FoodImgUrl+cloudinaryImageId} />
        <p>{avgRating}/5 stars</p>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4> {costForTwo}</h4>    
      </div>
    )
  }
export default RestaurantCard;
