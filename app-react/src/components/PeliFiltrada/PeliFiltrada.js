
function PeliFiltrada (props){

    return(
        <div class="sub-container">
            <img src={props.datosPeli.poster_path} className="imagen" alt={props.datosPeli.poster_path}/>
            <div className="letras">
                <h2 className= "titulo">{props.datosPeli.title}</h2>
                <div className="titulos espacio">FECHA DE ESTRENO</div>
                <div className="espacio estreno">{props.datosPeli.release_date}</div>

                <button className="boton-heart"><i className="icon-heart"></i></button>
            </div>
        </div>

    )

}

export default PeliFiltrada;