import React from "react";
//import {Link} from "react-router-dom";

function Buscador(props){
    return(
        <div className="buscador">
		<form className="lupita" action="./busqueda.html" method="get">
            <input className="lupita" type="text" name="busqueda" placeholder="¿Qué quiere ver?" value=""></input>
            <button type="submit" className="button">Buscar</button>
            <p className="aviso"></p>
        </form> 
        </div>
    )
}
export default Buscador;


