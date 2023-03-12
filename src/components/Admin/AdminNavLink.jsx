import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function AdminNavLink() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{
            position: "fixed",
            width: "100%",
            zIndex: "1",

        }}>
            <Container>
                <Navbar.Brand href="/admin/">Admin Home </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/admin/" >Registration List</Nav.Link>
                        <Nav.Link href="/admin/ViewUser" >Users</Nav.Link>
                        <Nav.Link href="#pricing">Lawyers</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"> Separated link </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Update</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Log Out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
