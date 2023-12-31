import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
function Header(props){
    return(
    <header className="header">
        <img src="/logo.png" className="logo" alt="logo"></img>
        <nav className="inicio">
            <ul className="inicio">
            <li> <Link to ="/">Home</Link></li>
            <li> <Link to ="/favoritos">Favoritos</Link></li>
            <li> <Link to ="/popular">Populares</Link></li>
            <li> <Link to ="/upcoming">Upcoming</Link></li>
            </ul>
        </nav> 
    </header>     
    )
}
export default Header;