import React, {Component} from "react";
import {Link} from "react-router-dom";
//import FontAwesomeIcon from "https://fontawesome.com/icons/heart?f=classic&s=solid";

class Pelis extends Component{
    constructor(props){
        super(props)
        this.state={ 
            view: false, 
            textoboton: "Agregar a favoritos"
        }
    }
    visibilidad = () => {
        this.setState({ view: !this.state.view });
    };

    componentDidMount(){
        let recuperoStorage = localStorage.getItem ("favoritos");
        
        if (recuperoStorage !== null) {
            let favoritos = JSON.parse (recuperoStorage);

            if (favoritos.includes (this.props.datosUp.id)){
                this.setState ({
                    textoBoton: "Quitar de favoritos"
                })
            }
        }

    }
    
    agregarYSacarDeFavs (id){
        let favoritos = [];
        favoritos.push (id);

        let favoritostoString= JSON.stringify(favoritos);
        localStorage.setItem ("favoritos", favoritostoString);

        this.setState ({
            textoBoton: "Quitar de favoritos",
        })
    }

    render(){
        return(
        <div className = "pelicula"> 
				<img src={`https://image.tmdb.org/t/p/w500${this.props.datosUp.poster_path}`} alt="pelis"/>
				<h4 className="titulos-peliculas">{this.props.datosUp.title}</h4>
                <button onClick={()=> this.agregarYSacarDeFavs(this.props.datosUp.id)} type="button"> {this.state.textoboton} </button>
				<p className="fechas">{this.props.datosUp.release_date}</p>
                <button onClick={this.visibilidad} type="button">
                <p className="fechas">Ver más</p>
                </button>
                {this.state.view && (
                <p className="fechas">{this.props.datosUp.overview}</p>
                )}
                <Link to={`/detalle/${this.props.datosUp.id}`} className="detalle">Ver detalle</Link>
        </div>
        )
    }
}

export default Pelis;