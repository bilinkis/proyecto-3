import React, { Component } from "react";

export default class Buscador extends Component{
    constructor(){
        super();
        //Valor inicial del estado
        this.state ={
            valor: ""

        }
    }

    prevenirSubmit(event){
        event.preventDefault();
    }

    capturarInfo(event){
    console.log(event.target.value)
    this.setState({
    valor: event.target.value
},
() => this.props.filtrarBuscador(this.state.valor)
)
    }

    render(){
        return(
            <form onSubmit={(event)=> this.prevenirSubmit(event)}>
                <input onChange={(event)=> this.capturarInfo(event)}type="text"/>
                <input type="submit" />
            </form>
        )
    }
}
