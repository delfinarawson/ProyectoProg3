import React, { Component } from "react";
import Pelis from "../../components/Pelis/Pelis";
//import "./styles.css";
//import "https://kit.fontawesome.com/ed388a348f.js"; 
class Results extends Component{
    constructor(){
        super()
        this.state={
           busqueda: this.props.match.params.search,
           resultados: []
    }
   
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.busqueda}?api_key=75196a6b12119e0621f7373e3de1a94a`)
            .then( res => res.json())
            .then(data=> this.setState({
                resultados: data,
            }))
            .catch()

      
    };

    render(){
        return(
        <React.Fragment>
        <section className="contenedor">

        <button role="boton" id="flecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
        <article className="contenedor-peliculas">
            <h2 className="titulo">Resultados de Peliculas</h2>
            <div className="galeria">
                {
                    this.state.resultados.map((resultados, indx)=>
               <Pelis datosPop={resultados}/>)
    }
            </div>
        </article>
        <button role="boton" id="flecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>
        
        </React.Fragment>
        )
    }
    
}
export default Results;