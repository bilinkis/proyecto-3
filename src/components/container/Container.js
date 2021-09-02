import React, {Component} from 'react';
import Tarjeta from '../tarjeta/Tarjeta';


class Container extends Component {

    constructor(props){ 
    super(props);
    this.state ={
        movies: [],
        page:1,
    } 
    }
    fetchData = (page) => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0ef54cf87594d6b6ca72ab2de24ffdc0&page='+page)

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
    deleteCard = (id) =>{
        console.log(id);
        let filteredMovies = this.state.movies.filter(movies => movies.id !== id);
        console.log(filteredMovies);
        this.setState({movies:filteredMovies})
    }
    loadPage = (page) =>{

        let number = page.target.getAttribute('data-page');
        this.setState({page:number})
        this.fetchData(number);
        window.scrollTo(0, 0);
    }
    componentDidMount(){
        this.fetchData(1);
}


    render = () => {
        return (
            <div>
            <h3>Página {this.state.page}</h3>
            <div className='contenedor-pelis'>
                
                 {this.state.movies === [] ? //si array de Movies vacío

                <h2>Cargando...</h2> //Imprimir mensaje de cargando
                : //sino
              this.state.movies.map ( (movies, index) => { //devolver la info de la
                  return <Tarjeta className="card-movies" key = {index} id={movies.id} title= {movies.title} rating = {movies.vote_average} image = {movies.poster_path} descripcion= {movies.overview} deleteCard={this.deleteCard}/> 
              })}
            </div>
            <div className="pagesContainer">
            <ul className="pages">
                {this.state.page>1 ?
                <div>
                <li><button onClick={this.loadPage} data-page={+this.state.page -1}>{+this.state.page -1}</button></li> 
                <li><button onClick={this.loadPage} data-page={+this.state.page}>{this.state.page}</button></li> 
                <li><button onClick={this.loadPage} data-page={+this.state.page + +1}>{+this.state.page + +1}</button></li>
                <li><button onClick={this.loadPage} data-page={+this.state.page + +2}>{+this.state.page + +2}</button></li> 
                <li><button onClick={this.loadPage} data-page={+this.state.page + +3}>{+this.state.page + +3}</button></li>
                <li><button onClick={this.loadPage} data-page={+this.state.page + +4}>{+this.state.page + +4}</button></li>   
                </div>
                :
                <div>
                <li><button onClick={this.loadPage} data-page={+this.state.page + +1}>{+this.state.page + +1}</button></li> 
                <li><button onClick={this.loadPage} data-page={+this.state.page + +2}>{+this.state.page + +2}</button></li>
                <li><button onClick={this.loadPage} data-page={+this.state.page + +3}>{+this.state.page + +3}</button></li>
                <li><button onClick={this.loadPage} data-page={+this.state.page + +4}>{+this.state.page + +4}</button></li>
                <li><button onClick={this.loadPage} data-page={+this.state.page + +5}>{+this.state.page + +5}</button></li>    
                </div>
                }
            
            
                 
            </ul>
            </div>
            
            </div>
        );
}
}
export default Container;
