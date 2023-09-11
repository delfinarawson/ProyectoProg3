import React, { Component } from "react";
import PelisUp from "../../components/PelisUp/PelisUp.js";
import "./styles.css";
//import "https://kit.fontawesome.com/ed388a348f.js";
import Filtrado from "../../components/Filtrado/Filtrado.js"

class Upcoming extends Component{
    constructor(){
        super()
        this.state={
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

    filtrarUpcoming(peliAFiltrar){
        //que deje solo las pelis en donde el texto a filtrar este incluido en el nombre. 
        let pelisFiltradas = this.state.upcoming.filter(function(peliup){
            return peliup.title.includes(peliAFiltrar) //includes retorna true o false
        })
        console.log(pelisFiltradas);
        this.setState({
            upcoming: pelisFiltradas,
        })
    }

    render(){
        return(
        <React.Fragment>
        <Filtrado filtrar={(texto)=> this.filtrarUpcoming(texto)}/>
        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i class="fa-solid fa-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Todas las películas próximas a estrenarse</h2>
            <div className="galeria">
                 {this.state.upcoming.map((peliup, idx)=> <PelisUp key={peliup + idx} datosUp={peliup}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i class="fa-solid fa-angle-right"></i></button>
        </section>
        </React.Fragment>
        )
    }
    
}
export default Upcoming;