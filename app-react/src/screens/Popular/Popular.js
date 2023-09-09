import React, { Component } from "react";
import Pelis from "../../components/Pelis/Pelis";
import "./styles.css";
//import "https://kit.fontawesome.com/ed388a348f.js";
import Filtrado from "../../components/Filtrado/Filtrado";
import PeliFiltrada from "../../components/PeliFiltrada/PeliFiltrada";

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

    filtrarPopulares(peliAFiltrar){
        //que deje solo las pelis en donde el texto a filtrar este incluido en el nombre. 
        let pelisFiltradas = this.state.populares.filter(function(peli){
            return peliAFiltrar.includes(peli.title) //includes retorna true o false
        })

        this.setState({
            pelis: pelisFiltradas,
        })
    }

    render(){
        return(
        <React.Fragment>
        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Todas las películas populares</h2>
            <div className="galeria">
                {this.state.populares.map((peli, idx)=> <Pelis key={peli + idx} datosPop={peli}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>


        <section>
            <Filtrado filtrar={(texto)=> this.filtrarPopulares(texto)}/>
            {
                this.state.populares.map(function(peli){
                    return <PeliFiltrada key={peli.id} datosPeli={peli} />
                })
            }
        </section>

        </React.Fragment>
        )
    }
    
}
export default Popular;