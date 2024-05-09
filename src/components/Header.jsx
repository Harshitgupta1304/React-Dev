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
            <li>Cart</li> 
          </ul>
        </div>
      </div>
    )
  }
  export default Header;