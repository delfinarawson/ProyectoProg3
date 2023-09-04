import React from "react";
import Buscador from "../../components/Buscador/Buscador";

function Home(props){
    this.setState({
        populares:[],
        upcoming: []
    })
    componentDidMount();{
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
    return(
        <div>
    <Buscador/>
    <section class="contenedor">
        <button role="boton" id="flecha-derecha" class="flecha-izquierda"><i class="icon-angle-left"></i></button>
        <article class="contenedor-peliculas">
            <h2 class="titulo">Películas Mejor Calificadas</h2>
            <div class="galeria">
                 <div class = "pelicula"> va el map</div>
            </div>
        </article>
        <button role="boton" id="flecha-derecha" class="flecha-derecha"><i class="icon-angle-right"></i></button>
    </section>
    </div>
    )
}
export default Home;