import { NavLink } from 'react-router-dom'

const Nav = (props) =>{
 return(
   <nav className="nav-container">
        <i className="fa-solid fa-compass-drafting"></i>
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/">home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/work">work</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/about">about</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active": undefined} to="/contact">contact</NavLink></li>
        </ul>
   </nav>
 );
}

export default Nav;