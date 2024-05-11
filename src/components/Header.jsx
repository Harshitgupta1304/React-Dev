import { appLogo } from "../utils/constant";
const Header = ()=>{
    return (
      <div className='header'>
        <div className='headerLogo'>
         <img className="logo" alt="food App logo" src={appLogo} /> 
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