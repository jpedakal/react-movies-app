import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Amazon Shopping Cart</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="ml-auto">
                            <Nav.Link href='/cart'><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Nav.Link>
                            <Nav.Link href='/login'><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
