import React, {Component} from 'react';

class Tarjeta extends Component{
        
    constructor(props){
        super(props)
    }

render (){ 
        return (
            <React.Fragment>
              <article className= 'card'>
                <section className="navigation">
                    <div className='iconos-card'>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <button onClick={() => this.props.deleteCard(this.props.id)}><i className="far fa-window-close"></i></button>
                </section>
                <main>
                    <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + this.props.image} alt=""/>
                    <h3>{this.props.title}</h3>
                    <p className="description">{this.props.descripcion}</p>
                    <section className="aditional-info">
                        <p>Rating: {this.props.rating}</p>
                    </section>
                     <a href="">Ver más</a>
                </main>
            </article>
            </React.Fragment>
        )}
}

export default Tarjeta;