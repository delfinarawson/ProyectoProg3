import React, { Component } from "react";
import Pelis from "../../components/Pelis/Pelis";
import "./styles.css";
//import "https://kit.fontawesome.com/ed388a348f.js";

class Popular extends Component{
    constructor(){
        super()
        this.state={
            populares:[],
            upcoming:[]
           
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
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo">Todas las películas populares</h2>
            <div className="galeria">
                {this.state.populares.map((peli, idx)=> <Pelis key={peli + idx} datosPop={peli}/>)}
            </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>
        <form className="lupita" action="" method="get">
            <input className="lupita" type="text" name="filtro" placeholder="¿Qué filtro desea aplicar?" value=""></input>
            <button type="submit" className="button">filtrar</button>
            <p className="aviso"></p>
        </form> 
        </React.Fragment>
        )
    }
    
}
export default Popular;