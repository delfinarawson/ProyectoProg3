import React from "react";
import {Link} from "react-router-dom";
function Pelis(props){
    return(
        <section className="contenedor">
        <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
        <article className="contenedor-peliculas">
            <h2 className="titulo">Películas Mejor Calificadas</h2>
            <div className="galeria">
            <div className = "pelicula"> 
                
                </div>
            </div>
        </article>
        <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
    </section>
      
    )
}
export default Pelis;