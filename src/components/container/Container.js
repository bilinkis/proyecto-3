import React, {Component} from 'react';
import Tarjeta from '../tarjeta/Tarjeta';


class Container extends Component {

    constructor(props){ 
    super(props);
    this.state ={
        movies: []
    } 
    }

    componentDidMount(){
        fetch('https://developers.themoviedb.org/3/movies/get-popular-movies')

        .then(function(response){
            return response.json
        })        
        .then(function(data){
            console.log(data);
            this.setState({
                movies: data.results           
            })
        })
        .catch(function(error){
            return console.log(error);
        })
}


    render(){
        
        return (
            <React.Fragment>
              {this.state.movies.map ( (movies, index) =>{
                  return <Tarjeta key = {index} title= {movies.title}></Tarjeta> 
              })}

            </React.Fragment>
        );
}
}
export default Container;
