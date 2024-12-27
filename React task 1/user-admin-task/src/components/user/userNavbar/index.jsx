import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

function UserNavbar() {
  return (
    <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink className='mx-2' to="/" style={{textDecoration:"none",color:"white",fontSize:"40px"}}>Navbar</NavLink>
          <Nav className="me-auto">
            <NavLink className='mx-2' to="/home" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Home</NavLink>
            <NavLink className='mx-2' to="/books" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Books</NavLink>
            <NavLink className='mx-2' to="/admin" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Admin</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default UserNavbar