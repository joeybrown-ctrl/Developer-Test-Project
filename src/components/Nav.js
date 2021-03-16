import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

    function Nav() {
        return (
            <>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="/">Developer-Test-Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Products</Nav.Link>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                        </Nav>
                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }

export default Nav;