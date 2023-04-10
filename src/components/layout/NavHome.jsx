import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import BurgerNav from './BurgerNav';

const NavBarHome = (props) =>{
  const [clicked , setClicked] = useState(false)
  const handleClick = ()=>{
  // Cuando esta en true lo pasa a false
    setClicked(!clicked)
  }
 return(
  <>
   <div className="nav-container-home">
        <i className="fa-solid fa-compass-drafting"></i>
        <ul className={`links-home ${clicked ? 'activee': ''}`}>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/">home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/work">work</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/about">about</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/contact">contact</NavLink></li>
        </ul>
          <div className='burger'>
            <BurgerNav clicked={clicked} handleClick={handleClick} ></BurgerNav>
          </div>
   </div>
  </>
 );
}

export default NavBarHome;