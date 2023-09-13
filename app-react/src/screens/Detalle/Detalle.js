//rutas parametrizadas: hacemos un fetxch de la api y guardamos la lista de .results, despues ver el doc de tuti que dice como comparar los ids y demás. 
import React, { Component } from "react";
import Detail from "../../components/Detail/Detail";


class Detalle extends Component{
    constructor(){
        super()
        this.state={
            peliculaDet: []    }
   
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=75196a6b12119e0621f7373e3de1a94a`)
            .then( res => res.json())
            .then(data=> this.setState({
                peliculaDet: data,
            }))
            .catch()

    };

    render(){
        return(
        <React.Fragment>
       <section class="info">
        <h1 class="titulo"></h1>
        <article class="bloque">
            {
                <Detail poster_path={this.state.peliculaDet.poster_path} titulo={this.state.peliculaDet.name} fecha={this.state.peliculaDet.release_date} genero={this.state.peliculaDet.genres_id} duracion={this.state.peliculaDet.runtime + " Minutos"} calificacion={this.state.peliculaDet.vote_average} />
            }
           

        </article>
    </section>

        </React.Fragment>
        )
    }
    
}
export default Detalle;