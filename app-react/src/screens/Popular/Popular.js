import React, { Component } from "react";
import Pelis from "../../components/Pelis/Pelis";
import "./styles.css";
//import "https://kit.fontawesome.com/ed388a348f.js";
import Filtrado from "../../components/Filtrado/Filtrado";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Popular extends Component{
    constructor(){
        super()
        this.state={
            populares:[],
            page:1
           
    }
   
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a&page="+this.state.page)
            .then( res => res.json())
            .then(data=> this.setState({
                populares: data.results,
                page: this.state.page+1
            }))
            .catch()
      
    };

    filtrarPopulares(peliAFiltrar){
        //que deje solo las pelis en donde el texto a filtrar este incluido en el nombre. 
        let pelisFiltradas = this.state.populares.filter(function(peli){
            return peli.title.includes(peliAFiltrar) //includes retorna true o false
        })
        console.log(pelisFiltradas);
        this.setState({
            populares: pelisFiltradas,
        })
    };

    traerMas(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a&page="+this.state.page)
            .then( res => res.json())
            .then(data=> this.setState({
                populares: this.state.populares.concat(data.results),
                page: this.state.page+1
            }))
            .catch()
    }

    render(){
        return(
        <React.Fragment>
            <Filtrado filtrar={(texto)=> this.filtrarPopulares(texto)}/>
            <section className="contenedor">
                <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i class="fa-solid fa-angle-left"></i></button>
                <article className="contenedor-peliculas">
                <h2 className="titulo">Todas las películas populares</h2>
                <div className="galeria">
                    {this.state.populares.map((peli, idx)=> <Pelis key={peli + idx} datosPop={peli}/>)}
                </div>
                </article>
                <button role="boton" id="flecha-derecha" className="flecha-derecha"><i class="fa-solid fa-angle-right"></i></button>
            </section>

            <button onClick={() => this.traerMas(this.state.populares)}>Traer Más</button>


        </React.Fragment>
        )
    }
    
}
export default Popular;