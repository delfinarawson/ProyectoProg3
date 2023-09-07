import React, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
import Pelis from "../../components/Pelis/Pelis";
import "./styles.css";
//import "https://kit.fontawesome.com/ed388a348f.js";

class Popular extends Component{
    constructor(){
        super()
        this.state={
            populares:[],
           
    }
   
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a")
            .then( res => res.json())
            .then(data=> this.setState({
                populares: data.results,
            }))
            .catch()
      
    };

    render(){
        return(
        <React.Fragment>

        <section className="contenedor">
            <article className="contenedor-peliculas">
            <h2 className="titulo">Películas Populares</h2>
            <div className="galeria">
                {this.state.populares.map((peli, idx)=> <Pelis key={peli + idx} datosPop={peli}/>)}
            </div>
            </article>
        </section>
        
        </React.Fragment>
        )
    }
    
}
export default Popular;