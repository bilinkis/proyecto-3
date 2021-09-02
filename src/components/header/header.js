import React from 'react';

function Header () {
        
        return (
            <React.Fragment>
              <header>
            <img className="logo" src= './img/l.png' alt=""/>
        <section className= 'header-ordenado'>
            <div className= 'categorias-header'>
            <p>Más vistas</p>
            <p>Novedades</p>
            </div>
            <form className = 'form-busqueda' action="">
                <input type="text" name="search" className="busqueda" placeholder="Search"/>
                <button type="submit" className= 'busqueda'><i className="fas fa-search"></i></button>
            </form>
        </section>
        
        

    </header>
    
            </React.Fragment>
        )



}

export default Header;