import React, {Component} from 'react';
import Tarjeta from '../tarjeta/Tarjeta';
import Buscador from '../buscador/Buscador';
import Carousel from '../carousel/Carousel';
import _ from 'underscore';


class Container extends Component {

    constructor(props){ 
    super(props);
    this.state ={
        movies: [],
        page:1,
        filterBuscador: []
    }


    }

    fetchData = (page) => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0ef54cf87594d6b6ca72ab2de24ffdc0&page='+page)

        .then((response)=>{
            return response.json();
        })        
        .then((data)=>{
            console.log(data);
            this.setState({
            movies:data.results,
            filterBuscador: data.results 
        })
        
          
        })
        .catch((error)=>{
            return console.log(error);
        })
    }
    deleteCard = (id) =>{
        console.log(id);
        let filteredMovies = this.state.movies.filter(movies => movies.id !== id);
        if(this.state.filterBuscador !== []){
            this.setState({filterBuscador:filteredMovies, movies:filteredMovies})
        } else{
            this.setState({movies:filteredMovies})
        }
        console.log(filteredMovies);
        
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
        document.getElementById('movie-container').style.flexDirection="column";
    }
    row = () => {
        if(document.getElementById('movie-container').style.flexDirection === "row"){
            document.getElementById('movie-container').style.flexDirection = "column";
        }
        else{
            document.getElementById('movie-container').style.flexDirection = "row";
        }
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
        
       /* if(document.getElementById('movie-container').style.flexDirection === 'row'){
            document.getElementById('columns').style = 'display:inline-flex';
            document.getElementById('rows').style = 'display:none';
        }
        else {
            document.getElementById('rows').style = 'display:inline-flex';
            document.getElementById('columns').style = 'display:none';
        }*/
}
componentDidUpdate(){
    console.log(document.getElementById('movie-container').style.flexDirection)
}

filtrarBuscador(infoAFiltrar){

    let moviesFiltrado= this.state.movies.filter(
        movies => movies.title.toLowerCase().includes(infoAFiltrar.toLowerCase())
    )
        if(infoAFiltrar===''){
            this.setState({
                filterBuscador : this.state.movies
            })
        }else{
            this.setState({
                filterBuscador : moviesFiltrado
            })
        }
   

}


    render = () => {
        
        return (
            <React.Fragment>
            <div style={{textAlign:"center"}}>
                <h3>Buscador</h3>
                <Buscador filtrarBuscador={(infoAFiltrar)=> this.filtrarBuscador(infoAFiltrar)}/>
            </div>
            
            <div>

                <Carousel movies={this.state.movies}/>
  
</div>
                
                <img src="./img/banner.jpg" className="banner" alt="banner"/>
            <h3 className="page-title">Página {this.state.page}</h3>
            <div className="buttonContainer">
            <button class="button-17" onClick={this.orderByRatingDesc}>Ordenar por rating (desc)</button>
            <button class="button-17" onClick={this.orderByRatingAsc}>Ordenar por rating (asc)</button>
            <button class="button-17" onClick={this.orderByNameDesc}>Ordenar por título (desc)</button>
            <button class="button-17" onClick={this.orderByNameAsc}>Ordenar por título (asc)</button>
            <button class="button-17" id="rows" onClick={this.row}>Cambiar display</button>
           
            
            
            </div>
            <div className='contenedor-pelis' id="movie-container" style={{flexDirection:'row'}}>
                
                 {this.state.movies === [] ? //si array de Movies vacío

                <h2>Cargando...</h2> //Imprimir mensaje de cargando
                : //sino
              this.state.filterBuscador.map ( (movies, index) => { //devolver la info de la
                  return <Tarjeta className="card-movies" key = {index} index = {index}id={movies.id} title= {movies.title} rating = {movies.vote_average} image = {movies.poster_path} descripcion= {movies.overview} adult={movies.adult} release_date={movies.release_date} deleteCard={this.deleteCard} moreInfo={this.moreInfo} swap={this.swapPositions}/> 
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
            
            
            </React.Fragment>
        );
}
}
export default Container;
