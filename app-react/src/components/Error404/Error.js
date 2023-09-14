import React from "react";

//import {Link} from "react-router-dom";

function Error404(props){
    return(
        <div> 
            <h1 className="error"><i className="fa-solid fa-triangle-exclamation"></i> Error 404: la ruta ingresada no existe. </h1>
            <h2 className="titulo error2">Asegurate de ingresar una ruta válida.</h2>
        </div>
    )
}
export default Error404;