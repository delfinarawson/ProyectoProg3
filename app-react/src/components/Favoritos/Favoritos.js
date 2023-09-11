import React from "react";
import Pelis from "../Pelis/Pelis";

function Favoritos(){

    return(
        <React.Fragment>
        <h3 className="seleccion">Selección de favoritos</h3>
        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
                <div className="galeria">
                    <Pelis/>
                </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>

        </React.Fragment>
    )
}

export default Favoritos;