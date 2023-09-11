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
            <label htmlFor="">Texto a filtrar:</label>
            <input type="text" name="filtro" onChange={(e) => this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
            <button type="button">Filtrar </button>
        </form>
        </div>
        )
    }
}

export default Filtrado