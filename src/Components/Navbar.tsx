import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../ComponentsCss/Navbar.css'

export const NavBar: React.FC = () => {
  return (

    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Карточки</Nav.Link>
          <Nav.Link href="#link">Избранное</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  )
}
//#FCDDC9 - peach