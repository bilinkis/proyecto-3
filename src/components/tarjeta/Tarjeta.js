import React, {Component} from 'react';

class Tarjeta extends Component{
        
    constructor(props){
        super(props)
    }

render (){ 
        return (
            <React.Fragment>
              <article className= 'product-box'>
                <section className="navigation">
                    <div className='iconos-card'>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <button onClick={() => this.props.deleteCard(this.props.id)}><i className="far fa-window-close"></i></button>
                </section>
                <main className="product-box_data">
                    <img className="product-box_image" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + this.props.image} alt=""/>
                    <h3>{this.props.title}</h3>
                    <p className="description">{this.props.descripcion}</p>
                    <button id={"button"+this.props.id} onClick={() => this.props.moreInfo(this.props.id)}>Ver más</button>
                    <div className="extra">
                    <section className="aditional-info" id={this.props.id}>
                        <p><b>Rating:</b> {this.props.rating}</p>
                        <p>Fecha de lanzamiento: {this.props.release_date}</p>
                        {this.props.adult === false ?
                        <p>Apta para menores: Si</p>
                        :
                        <p>Apta para menores: No</p>
}
                    </section>
                    </div>
                     
                </main>
            </article>
            </React.Fragment>
        )}
}

export default Tarjeta;