import React from "react";
import "./style.css";
//import {Link} from "react-router-dom";

function Error404(props){
    return(
        <div> 
            <h1 className="error"> Error 404: la ruta ingresada no existe. Asegurate de ingresar una ruta válida.</h1>
        </div>
    )
}
export default Error404;