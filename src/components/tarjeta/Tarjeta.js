import React, {Component} from 'react';

class Tarjeta extends Component{
        
    constructor(props){
        super(props)
    }

render (){ 
        return (
            <React.Fragment>
              <article className= 'tarjeta'>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>{this.props.title}</h3>
                    <p className="description">{this.props.descripcion}</p>
                    <section className="aditional-info">
                        <p>Rating: {this.props.rating}</p>
                    </section>
                    {/* <a href="">Ver más</a> */}
                </main>
            </article>
            </React.Fragment>
        )}
}

export default Tarjeta;