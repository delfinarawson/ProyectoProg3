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
        {
            this.state.populares.length > 0 ?
            <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="fa-solid fa-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Películas Populares</h2>
            <div className="galeria">
                {this.state.populares.slice(0,6).map((peli, idx)=> <Pelis key={peli + idx} datosPop={peli}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="fa-solid fa-angle-right"></i></button>
        </section>:
        <h3>Loading...</h3>
        
        
    }
    
    {
            this.state.upcoming.length > 0 ?
        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="fa-solid fa-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Películas próximas a estrenarse</h2>
            <div className="galeria">
                 {this.state.upcoming.slice(0,6).map((peliup, idx)=> <PelisUp nkey={peliup + idx} datosUp={peliup}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="fa-solid fa-angle-right"></i></button>
        </section>:
        <h3 className="loading">Loading...</h3>}
       
        
        </React.Fragment>
        )
    }
    
}
export default Home;