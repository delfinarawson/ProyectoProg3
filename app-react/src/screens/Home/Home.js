import React, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
import Pelis from "../../components/Pelis/Pelis"
import PelisUp from "../../components/PelisUp/PelisUp.js"

class Home extends Component{
    constructor(props){
        super(props)
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
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=75196a6b12119e0621f7373e3de1a94a")
            .then( res => res.json())
            .then(data=> this.setState({
                upcoming: data.results,
             }))
            .catch()
    };

    render(){
        return(
            <div>
        <Buscador/>
        {this.state.populares.map((peli, idx)=> <Pelis name={peli.results[idx].original_title} descripcion={peli.results[idx].overview} imagen={peli.results.poster_path}/>)}
        {this.state.upcoming.map((peliup, idx)=> <PelisUp name={peliup.results[idx].original_title} descripcion={peliup.results[idx].overview} imagen={peliup.results.poster_path}/>)}
        
        </div>
        )
    }
    
}
export default Home;