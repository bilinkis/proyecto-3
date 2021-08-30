import React, {Component} from 'react';

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
}

    render(){
        
        return (
            <React.Fragment>
              <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            </React.Fragment>
        )
}

export default Container;
