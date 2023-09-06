import React, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
import Pelis from "../../components/Pelis/Pelis";
import PelisUp from "../../components/PelisUp/PelisUp.js";
import "./styles.css";

class Home extends Component{
    constructor(){
        super()
        this.state={
            populares:[],
            upcoming:[],
    }
   
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a")
            .then( res => res.json())
            .then(data=> this.setState({
                populares: data.results,
            }))
            .catch()
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
        <Buscador/>

        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Películas mejor calificadas</h2>
            <div className="galeria">
                {this.state.populares.map((peli, idx)=> <Pelis key={peli + idx} datosPop={peli}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>

        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Películas próximas a estrenarse</h2>
            <div className="galeria">
                 {this.state.upcoming.map((peliup, idx)=> <PelisUp nkey={peliup + idx} datosUp={peliup}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>


       
       
        
        </React.Fragment>
        )
    }
    
}
export default Home;