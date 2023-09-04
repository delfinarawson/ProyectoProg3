import React from "react";
import {Link} from "react-router-dom";
function Header(props){
    return(
    <header className="header">
        <img src="../public/logo" className="logo" alt="logo"></img>
        <nav className="inicio">
            <ul className="inicio">
            <li> <Link to ="/">Home</Link></li>
            <li> <Link to ="/favoritos">Favoritos</Link></li>
            <li> <Link to ="/populares">Populares</Link></li>
            <li> <Link to ="/upcoming">Upcoming</Link></li>
            </ul>
        </nav> 
    </header>     
    )
}
export default Header;