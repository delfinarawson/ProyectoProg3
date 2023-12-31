import React, { Component } from "react";
import Pelis from "../../components/Pelis/Pelis";
//import "https://kit.fontawesome.com/ed388a348f.js";
import Filtrado from "../../components/Filtrado/Filtrado";

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
            {
            this.state.populares.length > 0 ?
            <section className="contenedor">
                <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="fa-solid fa-angle-left"></i></button>
                <article className="contenedor-peliculas">
                <h2 className="titulo">Todas las películas populares</h2>
                <div className="galeria">
                    {this.state.populares.map((peli, idx)=> <Pelis key={peli + idx} datosPop={peli}/>)}
                </div>
                </article>
                <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="fa-solid fa-angle-right"></i></button>
            </section>:
            
            <h3 className="loading">Loading...</h3>}

            <button onClick={() => this.traerMas(this.state.populares)} className="boton tmas"><i className="fa-solid fa-ticket"></i>Traer Más</button>


        </React.Fragment>
        )
    }
    
}
export default Popular;