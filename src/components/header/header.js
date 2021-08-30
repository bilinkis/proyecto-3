import React from 'react';

function Header () {
        
        return (
            <React.Fragment>
              <header>
        <h1>Cuevona</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </section>
    </header>
            </React.Fragment>
        )



}

export default Header;