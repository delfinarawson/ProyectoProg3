import React, { Component } from 'react';

class Filtrado extends Component{

    constructor(){
        super();
        this.state = {
            textoDelInput: ''
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
        return true
    }

    guardarDatosDelInput(eventoEnElInput){
        console.log(this.state.textoDelInput);
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        }, () => this.props.filtrar(this.state.textoDelInput))
        return true
    }

    render(){

        return(
        <div className="buscador">
        <form action="" className="lupita" method="GET" onSubmit={(e) => this.controlarEnvio(e)}>
            <input type="text" name="filtro" placeholder="Texto a filtrar" className="lupita" onChange={(e) => this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
            <button type="button" className="boton busq"><i className="fa-brands fa-searchengin"></i> Filtrar </button>
        </form>
        </div>
        )
    }
}

export default Filtrado