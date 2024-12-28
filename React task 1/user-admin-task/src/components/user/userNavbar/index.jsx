import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { favoriteContext } from '../../../context/FavoritesContext';
import { basketContext } from '../../../context/BasketContext';



function UserNavbar() {
  let { favorites } = useContext(favoriteContext)
  let { basket } = useContext(basketContext)
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{position:"fixed",top:"0",width:"100%",zIndex:"10000"}}>
        <Container>

          <NavLink className='mx-2' to="/" style={{ textDecoration: "none", color: "white", fontSize: "40px" }}>Navbar</NavLink>
          <Nav className="me-auto">
            <NavLink className='mx-2' to="/home" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>Home</NavLink>
            <NavLink className='mx-2' to="/books" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>Books</NavLink>
            <NavLink className='mx-2' to="/basket" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}><LocalMallIcon style={{ fontSize: '25px', color: "green", cursor: "pointer" }}></LocalMallIcon><span style={{ color: "white" }}>{basket.length}</span></NavLink>
            <NavLink className='mx-2' to="/favorites" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}><FavoriteIcon style={{ fontSize: '25px', color: "red", cursor: "pointer" }}></FavoriteIcon><span style={{ color: "white" }}>{favorites.length}</span></NavLink>
          </Nav>
          <Nav className="ms-auto">
          <NavLink className='mx-2 ml-auto' to="/admin" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>Admin</NavLink>
          </Nav>

        </Container>
      </Navbar>
    </>
  )
}

export default UserNavbar