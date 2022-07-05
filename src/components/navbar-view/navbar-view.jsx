import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar-view.scss'

export function NavbarView({ user }) {
    function onLoggedOut() {
        localStorage.clear()
        window.open('/', '_self')
    }

    const isAuth = () => {
        if (typeof window == 'undefined') {
            return false
        }
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token')
        } else {
            return false
        }
    }

    return (
        <Navbar id="navbar" fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">BollyFlix Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {isAuth() && (
                            <Link to={`/users/${user}`} className="nav-link">
                                Profile
                            </Link>
                        )}
                    </Nav>
                    {isAuth() && (
                        <Button variant="link" onClick={this.onLoggedOut}>
                            Logout
                        </Button>
                    )}
                    {!isAuth() && (
                        <Link to="/" className="nav-link">
                            Login
                        </Link>
                    )}
                    {!isAuth() && <Nav.Link href="/register">Sign-Up</Nav.Link>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
