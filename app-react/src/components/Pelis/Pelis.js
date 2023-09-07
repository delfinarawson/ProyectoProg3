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
				<img src={`https://image.tmdb.org/t/p/w500${this.props.datosPop.poster_path}`} alt="pelis"/>
				<h4 className="titulos-peliculas">{this.props.datosPop.title}</h4>
				<p className="fechas">{this.props.datosPop.release_date}</p>
                <p className="fechas">Ver más</p>
                <Link to='' className="detalle">Ver detalle</Link>
        </div>
        )
    }
}

export default Pelis;