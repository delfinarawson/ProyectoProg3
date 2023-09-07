import React, {Component} from "react";
import {Link} from "react-router-dom";
class Detail extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div class="sub-container">
            <img class="imagen" src="" alt="no respires"/>
            <div class="letras">
                <h2 className= "titulo">{this.props.titulo}</h2>
                <div class="titulos espacio">FECHA DE ESTRENO</div>
                <div class="espacio estreno">{this.props.fecha}</div>
                <div class="titulos espacio">GÉNERO</div>
                <div class="espacio genero">{this.props.genero}</div>
                <div class="titulos espacio">DURACIÓN</div>
                <div class="espacio duracion">{this.props.duracion}</div>
                <div class="titulos espacio">RATING</div>
                <div class="espacio rate">{this.props.calificacion}</div>
              
                <button class="boton-heart"><i class="icon-heart"></i></button>
            
            </div>
            </div>
        )
    }
}

export default Detail;
