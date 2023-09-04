import React from "react";
import {Link} from "react-router-dom";
function Header(props){
    return(
        <nav>
            <img alt="logo"></img>
            <ul className="main-nav">
            <li> <Link to ="/">Home</Link></li>
            <li> <Link to ="/favoritos">Favoritos</Link></li>
            <li> <Link to ="/vertodas">Ver todas</Link></li>
        </ul>
    </nav>      
    )
}
export default Header;