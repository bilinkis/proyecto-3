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
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=<<0ef54cf87594d6b6ca72ab2de24ffdc0>>&language=en-US&page=1')

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
