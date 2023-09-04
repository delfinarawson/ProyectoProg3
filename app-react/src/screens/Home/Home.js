import React from "react";
import Buscador from "../../components/Buscador/Buscador";
import Pelis from "../../components/Pelis/Pelis"
import PelisUp from "../../components/PelisUp/PelisUp.js"

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
    {populares.map((peli, idx)=> <Pelis name={peli.results.title} descripcion={peli.result.overview} imagen={peli.results.poster_path}/>)}
    {upcoming.map((peliup, idx)=> <PelisUp name={peli.results.title} descripcion={peli.result.overview} imagen={peli.results.poster_path}/>)}
    
    </div>
    )
}
export default Home;