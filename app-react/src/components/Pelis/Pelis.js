import React, {Component} from "react";
import {Link} from "react-router-dom";
//import FontAwesomeIcon from "https://fontawesome.com/icons/heart?f=classic&s=solid";

class Pelis extends Component{
    constructor(props){
        super(props)
        this.state={ 
            view: false, 
            textoBoton: "Agregar a favoritos"
         }
    }
    visibilidad = () => {
       this.setState({ view: !this.state.view });
    };

    componentDidMount(){
        let recuperoStorage = localStorage.getItem ("favoritos");
        
        if (recuperoStorage !== null) {
            let favoritos = JSON.parse (recuperoStorage);
            console.log(favoritos.includes(this.props.datosPop.id));
            if (favoritos.includes(this.props.datosPop.id)){
                this.setState ({
                    textoBoton: "Quitar de favoritos"
                })
            }
        }

    }

    agregarYSacarDeFavs (id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem ("favoritos");

        if (recuperoStorage !== null) {  
            favoritos = JSON.parse(recuperoStorage);
        }

        if (favoritos.includes (id)){ 
            favoritos = favoritos.filter (unId => unId !== id )
            this.setState ({
                textoBoton: "Agregar a favoritos"
            })

         } else {
            favoritos.push (id);
            this.setState ({
                textoBoton: "Quitar de favoritos",
            })
         }


        let favoritostoString= JSON.stringify(favoritos);
        localStorage.setItem ("favoritos", favoritostoString);
        
    
    }

    render(){
        console.log(this.props);
        return(
        <div className = "pelicula"> 
				<img src={`https://image.tmdb.org/t/p/w500${this.props.datosPop.poster_path}`} alt="pelis"/>
				<h4 className="titulos-peliculas">{this.props.datosPop.title}</h4>
                <button onClick={()=> this.agregarYSacarDeFavs(this.props.datosPop.id)} type="button" className="boton"> {this.state.textoBoton} </button>
				<p className="fechas">{this.props.datosPop.release_date}</p>
                <button onClick={this.visibilidad} type="button" className="boton mas"><i className="fa-solid fa-play"></i>Ver más</button>
                {this.state.view && (
                <p className="fechas">{this.props.datosPop.overview}</p>
                )} 
                <Link to={`/detalle/${this.props.datosPop.id}`} className="boton det"><i className="fa-solid fa-circle-info"></i>Ver detalle</Link>
        </div>
        )
    }
}

export default Pelis;