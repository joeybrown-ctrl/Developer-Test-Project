import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return(
        <>
            <nav className="navbar navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    
                    <a className="navbar-brand text-light" href="/">Developer-Test-Store</a>
                    <div className="row justify-content-right">
                        <a className="navbar-brand text-light" href="/">Products</a>
                        <a className="navbar-brand text-light" href="/categories">Categories</a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;