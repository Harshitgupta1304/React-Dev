import React from 'react';
import ReactDOM  from 'react-dom/client';
import Data from './data.json';
/**Builing a order delivering App
* Header
  -Logo 
  -Navigation Panel
* Body
  - Search
  - Restaurant Container
    - RestaurantCard
* Footer
 - copyright
 -links
 -address
 -contact details
**/
const FoodImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"
const RestaurantData = Data.data.restaurants[0].info;
console.log(RestaurantData)
const Header = ()=>{
  return (
    <div className='header'>
      <div className='headerLogo'>
       <img className="logo" alt="food App logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" /> 
      </div>
      <div className='navigation-item'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li> 772D-311D
        </ul>
      </div>
    </div>
  )
}
const RestaurantCard = ({RestaurantData}) =>{
  return(
    <div className='card'>
      <img className='card-img' src={FoodImg+RestaurantData.cloudinaryImageId} />
      <p>{RestaurantData.avgRating}/5 stars</p>
      <h3>{RestaurantData.name}</h3>
      <h4>{RestaurantData.cuisines.join(", ")}</h4>
      <h4> {RestaurantData.costForTwo}</h4>
      
    </div>
  )
}
const Body =() =>{
  return(
    <div className='container'>
      <div className='search-bar'>Search</div>
      <div className='card-container'>
        {Data.data.restaurants.map((restaurant)=>{
          return(
            <RestaurantCard RestaurantData={restaurant.info} key={restaurant.info.id}/>
          )
})}
      </div>
    </div>
  )
}
const Layout = ()=>{
  return (
  <div className='app'>
    <Header />
    <Body />
  </div>)
}

  const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.
  
  // root.render(heading);
  root.render(<Layout />);
  
  // In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.