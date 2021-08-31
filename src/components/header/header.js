import React from 'react';

function Header () {
        
        return (
            <React.Fragment>
              <header>
        <h1>Cuevona</h1>
        <section className= 'header-ordenado'>
            <div className= 'categorias-header'>
            <p>Más vistas</p>
            <p>Novedades</p>
            </div>
            <form className = 'form-busqueda' action="">
                <input type="text" name="search" className="busqueda" placeholder="Search"/>
                <button type="submit" className= 'busqueda'><i class="fas fa-search"></i></button>
            </form>
        </section>
        <img src="../public/img/banner.jpeg" alt=""/>

    </header>
            </React.Fragment>
        )



}

export default Header;