import "./sidebar.css"
import { NavLink} from "react-router-dom"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
               
                <ul className="sidebarList">
                    <li>
                        <NavLink 
                            to="/"
                            className="sidebarLink"
                            activeClassName="active">
                                <i className="fa-solid fa-house-user"></i>
                                Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/users"
                        className="sidebarLink"
                        activeClassName="active">
                           <i class="fa-solid fa-users"></i>
                           Listado de usuarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/products"
                        className="sidebarLink"
                        activeClassName="active">
                           <i class="fa-solid fa-shop"></i>
                           Listado de productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/categories" 
                        className="sidebarLink"
                        activeClassName="active">
                           <i class="fa-sharp fa-solid fa-list-ul"></i>
                           Listado de categorías
                        </NavLink>
                    </li>
                </ul>
                </div>
        </div>
    </div>
    );
}
