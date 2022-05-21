import { NavLink } from "react-router-dom"
import '../App.css';

const Footer = () => {
   return (
      <div className="Nevigation">
         <NavLink className="link" to='/news'>Новости</NavLink>
         <NavLink className="link" to='/themes'>Темы</NavLink>
      </div>
   )

}

export default Footer