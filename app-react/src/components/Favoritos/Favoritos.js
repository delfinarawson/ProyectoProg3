import React from "react";
import Pelis from "../Pelis/Pelis";
import React, {Component} from React
class Favoritos extends Component{
constructor(props){
    super(props);
    this.state = {
        favoritas: []
    }
}
componentDidMount(){
    let favs = [];
    let recuperoStoragePelis = localStorage.getItem("favoritos")
    if(recuperoStoragePelis != null){
        let pelisArray = JSON.parse(recuperoStoragePelis);
        favs = pelisArray
    }
    favs.map((id)=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=75196a6b12119e0621f7373e3de1a94a`)
        .then(response => response.json())
        .then( favs =>{
            let pelisLista = this.state.favoritas
            pelisLista.push(favs);
            this.setState({favoritas: pelisLista})
        })
        .catch(error => console.log(error))
    })
}
render(){
    return(
        <React.Fragment>
        <h3 className="seleccion">Selección de favoritos</h3>
        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
                <div className="galeria">{
                    this.state.favs.map(
                        (peliFav, idx) => <Pelis key={peli + idx} datosPop={peliFav}/>
                    )
                }
                    
                </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>

        </React.Fragment>
    )
}
}
export default Favoritos;