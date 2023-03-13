import { Link } from 'react-router-dom'

const Nav = (props) =>{
 return(
   <nav className="nav-container">
        <i className="fa-solid fa-compass-drafting"></i>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/work">work</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
   </nav>
 );
}

export default Nav;