import React, {Component} from 'react';
import Tarjeta from '../tarjeta/Tarjeta';


class Container extends Component {

    constructor(props){ 
    super(props);
    this.state ={
        movies: [],
    } 
    }
    fetchData = () => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0ef54cf87594d6b6ca72ab2de24ffdc0')

        .then((response)=>{
            return response.json();
        })        
        .then((data)=>{
            
            this.setState({movies:data.results})
        })
        .catch((error)=>{
            return console.log(error);
        })
    }
    componentDidMount(){
        this.fetchData();
}


    render = () => {
        return (
            <div className='contenedor-pelis'> {this.state.movies === [] ? //si array de Movies vacío

                <h2>Cargando...</h2> //Imprimir mensaje de cargando
                : //sino
              this.state.movies.map ( (movies, index) => { //devolver la info de la
                  return <Tarjeta key = {index} title= {movies.title} rating = {movies.vote_average} descripcion= {movies.overview}/> 
              })}
            </div>
        );
}
}
export default Container;
