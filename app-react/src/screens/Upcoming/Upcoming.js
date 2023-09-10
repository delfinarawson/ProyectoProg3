import React, { Component } from "react";
import PelisUp from "../../components/PelisUp/PelisUp.js";
import "./styles.css";
//import "https://kit.fontawesome.com/ed388a348f.js";

class Upcoming extends Component{
    constructor(){
        super()
        this.state={
            populares: [],
            upcoming:[],
    }
   
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=75196a6b12119e0621f7373e3de1a94a")
            .then( res => res.json())
            .then(data=> this.setState({
                upcoming: data.results,
             }))
            .catch()
    };

    render(){
        return(
        <React.Fragment>

        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Todas las películas próximas a estrenarse</h2>
            <div className="galeria">
                 {this.state.upcoming.map((peliup, idx)=> <PelisUp key={peliup + idx} datosUp={peliup}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>

        <form className="lupita" action="./busqueda.html" method="get">
            <input className="lupita" type="text" name="filtro" placeholder="¿Qué filtro desea aplicar?" value=""></input>
            <button type="submit" className="button">filtrar</button>
            <p className="aviso"></p>
        </form>
       
        
        </React.Fragment>
        )
    }
    
}
export default Upcoming;