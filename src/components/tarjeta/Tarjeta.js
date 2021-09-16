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
                        
                        {
                            this.props.index !== 0 ?
                            <button className="button-17" onClick={() => this.props.swap(+this.props.index - 1,this.props.index)}><i className="fas fa-chevron-left"></i></button>
                            :
                            <b></b>
                        }
                        
                        {
                            this.props.index !== 19 ?
                            <button className="button-17" onClick={() => this.props.swap(this.props.index,+this.props.index +1)}><i className="fas fa-chevron-right"></i></button>
                            :
                            <b></b>
                        }
                        <button onClick={() => this.props.deleteCard(this.props.id)} className="button-17"><i className="far fa-window-close"></i></button>
                    </div>
                    
                </section>
                <main className="product-box_data" id={"movie"+this.props.index}>
                    <img className="product-box_image" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + this.props.image} alt=""/>
                    <h3>{this.props.title}</h3>
                    <p className="description">{this.props.descripcion}</p>
                    <button className="button-17" id={"button"+this.props.id} onClick={() => this.props.moreInfo(this.props.id)}>Ver más</button>
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