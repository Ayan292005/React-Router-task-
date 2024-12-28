import React, { useContext } from 'react'
import { favoriteContext } from '../../../context/FavoritesContext'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { IconButton } from '@mui/material';

function Favorites() {
  let { favorites, setFavorites } = useContext(favoriteContext)

  function handleDeleteFavorite(id) {
    let deleteFavorite = favorites.filter(favorite => favorite.id !== id)
    setFavorites(deleteFavorite)
  }
  return (
    <>
      <Container>
        {
          favorites.length == 0 ? (
            <h2 style={{ textAlign: "center" }}>Your Favorites List is Empty</h2>
          ) : (
            <>
          <h1 style={{ textAlign: "center" }}>Your Favorites List</h1>
        <Row style={{ margin: '20px 0' }}>
          {favorites.map(favorite => (
            <Col lg={3} md={4} sm={6} key={favorite.id}>

              <Card style={{ marginBottom:"20px", padding: '10px 30px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <Card.Img variant="top" src={favorite.image} />
                <Card.Title>{favorite.title}</Card.Title>
                <Card.Text>{favorite.description}</Card.Text>
                <Card.Text>{favorite.author}</Card.Text>
                <Card.Text>{favorite.price}$</Card.Text>
                <IconButton onClick={() => handleDeleteFavorite(favorite.id)}><HeartBrokenIcon className='ms-auto' style={{fontSize:'30px',color:"red",cursor:"pointer"}} /></IconButton>

              </Card>
            </Col>
          ))
          }
        </Row>
        </>
          )
        }
      </Container>
    </>
  )
}

export default Favorites
