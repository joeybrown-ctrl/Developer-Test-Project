import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return(
        <>
            <nav className="navbar navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">Developer-Test-Store</a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Products</a></li>
                                <li><a className="dropdown-item" href="/categories">Categories</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Nav;