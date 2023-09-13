
import Pelis from "../../components/Pelis/Pelis";
import React, {Component} from "react"
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
    if(recuperoStoragePelis !== null){
        let pelisArray = JSON.parse(recuperoStoragePelis);
        favs = pelisArray
        let pelisLista = []
    
        favs.forEach((id)=> {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=75196a6b12119e0621f7373e3de1a94a`)
            .then(response => response.json())
            .then( favs =>{
                pelisLista.push(favs);
                this.setState({favoritas: pelisLista})
            })
            .catch(error => console.log(error))
        })
    }
}
render(){
    console.log(this.state);
    return(
        <React.Fragment>
        {
            this.state.favoritas.length > 0 ?
        <section className="contenedor">
            <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
            <article className="contenedor-peliculas">
            <h2 className="titulo tituloFavs">Selección de películas favoritas</h2>
                <div className="galeria">{
                    this.state.favoritas.map(
                        (peliFav, idx) => <Pelis key={peliFav + idx} datosPop={peliFav}/>
                    )
                }
                </div>
            </article>
            <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>: 
        <h3 className="loading">Loading...</h3>}

        </React.Fragment>
    )
}
}
export default Favoritos;