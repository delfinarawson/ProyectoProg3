import React from "react";
function Header(props){
    return(
        <nav>
            <img alt="logo"></img>
            <ul className="main-nav">
            <li>Home</li>
            <li>Favoritos</li>
            <li>Ver todas</li>
        </ul>
    </nav>      
    )
}
export default Header;