import React from 'react'
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input'
import './navbar-view.scss'

export function NavbarView({ user }) {
    const onLoggedOut = () => {
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
                        <Form className="filterBar">
                            <VisibilityFilterInput />
                        </Form>
                        {isAuth() && (
                            <Link to={`/users/${user}`} className="nav-link">
                                Profile
                            </Link>
                        )}
                    </Nav>
                    {isAuth() && (
                        <Button
                            variant="link"
                            onClick={() => {
                                onLoggedOut()
                            }}
                        >
                            Logout
                        </Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
