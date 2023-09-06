import React, {Component} from "react";
import {Link} from "react-router-dom";
import FontAwesomeIcon from "https://fontawesome.com/icons/heart?f=classic&s=solid";

class Pelis extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
        <div className = "pelicula"> 
				<img src={`https://image.tmdb.org/t/p/w500${this.props.datosUp.poster_path}`} alt="pelis"/>
				<h4 className="titulos-peliculas">{this.props.datosUp.title}</h4>
				<p className="fechas">{this.props.datosUp.release_date}</p>
                <button className="boton-heart"><FontAwesomeIcon icon="fa-solid fa-heart"/></button>
                <p className="fechas">Ver más</p>
                <Link to='' className="detalle">Ver detalle</Link>
        </div>
        )
    }
}

export default Pelis;