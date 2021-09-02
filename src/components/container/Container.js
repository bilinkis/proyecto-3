import React, {Component} from 'react';
import Tarjeta from '../tarjeta/Tarjeta';
import _ from 'underscore';


class Container extends Component {

    constructor(props){ 
    super(props);
    this.state ={
        movies: [],
        page:1,
        busqueda:'',
    }

    

    }
    search = () => {
        let filtroBusqueda = this.state.movies.filter(movies => movies.name.includes(document.getElementById('searchquery').value));
        console.log(filtroBusqueda)
        this.setState({movies:filtroBusqueda})
    }
    fetchData = (page) => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0ef54cf87594d6b6ca72ab2de24ffdc0&page='+page)

        .then((response)=>{
            return response.json();
        })        
        .then((data)=>{
            console.log(data);
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
    moreInfo = (id) => {
        console.log(document.getElementById(id).style.display)
        if(document.getElementById(id).style.display !== "block"){
            document.getElementById(id).style.display="block";
            document.getElementById("button"+id).innerHTML = "Ver menos";
        }
        else{
            document.getElementById(id).style.display="none";
            document.getElementById("button"+id).innerHTML = "Ver más"
        }
    }
    orderByRatingDesc = () => {
        let orderedByRating = _.sortBy(this.state.movies, 'vote_average').reverse();
        
        this.setState({movies: orderedByRating});
    }
    orderByRatingAsc = () => {
        let orderedByRating = _.sortBy(this.state.movies, 'vote_average');
        
        this.setState({movies: orderedByRating});
    }
    orderByNameDesc = () => {
        let orderedByName = _.sortBy(this.state.movies, 'title').reverse();
        
        this.setState({movies: orderedByName});
    }
    orderByNameAsc = () => {
        let orderedByName = _.sortBy(this.state.movies, 'title');
        
        this.setState({movies: orderedByName});
    }
    column = () => {
        document.getElementById('movie-container').style="flex-direction:column";
    }
    row = () => {
        document.getElementById('movie-container').style="flex-direction:row"
    }
    swapPositions = (a,b) => {
        Array.prototype.swapItems = function(a, b){
            this[a] = this.splice(b, 1, this[a])[0];
            return this;
        }
        let swapped = this.state.movies.swapItems(a,b);
        this.setState({movies:swapped});
    }
    componentDidMount(){
        this.fetchData(1);
}


    render = () => {
        return (
            
            <div>
                <img src="./img/banner.jpg" className="banner" alt="banner"/>
            <h3 className="page-title">Página {this.state.page}</h3>
            <div className="buttonContainer">
            <button class="button-17" onClick={this.orderByRatingDesc}>Ordenar por rating (desc)</button>
            <button class="button-17" onClick={this.orderByRatingAsc}>Ordenar por rating (asc)</button>
            <button class="button-17" onClick={this.orderByNameDesc}>Ordenar por título (desc)</button>
            <button class="button-17" onClick={this.orderByNameAsc}>Ordenar por título (asc)</button>
            <button class="button-17" onClick={this.column}>Ver en columnas</button>
            <button class="button-17" onClick={this.row}>Ver en filas</button>
            </div>
            <div className='contenedor-pelis' id="movie-container">
                
                 {this.state.movies === [] ? //si array de Movies vacío

                <h2>Cargando...</h2> //Imprimir mensaje de cargando
                : //sino
              this.state.movies.map ( (movies, index) => { //devolver la info de la
                  return <Tarjeta className="card-movies" key = {index} index = {index}id={movies.id} title= {movies.title} rating = {movies.vote_average} image = {movies.poster_path} descripcion= {movies.overview} adult={movies.adult} release_date={movies.release_date} deleteCard={this.deleteCard} moreInfo={this.moreInfo} swap={this.swapPositions} search = {this.search}/> 
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
