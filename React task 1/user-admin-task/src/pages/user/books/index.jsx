import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:4000/books"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { favoriteContext } from '../../../context/FavoritesContext';
import { IconButton } from '@mui/material';
import { basketContext } from '../../../context/BasketContext';


function UserProducts() {
  let [data, setData] = useState([])
  let [originalData,setOriginalData]=useState([])
  let [modalProduct, setModalProduct] = useState(null)
  let { favorites, setFavorites } = useContext(favoriteContext)
  let { basket, setBasket } = useContext(basketContext)


  function handleAddFavorite(product) {
    let findFavorite = favorites.find(favorite => favorite.id == product.id)
    if (findFavorite) {
      alert("you already add this item")
    } else {
      setFavorites([...favorites, product])
    }
  }

  function handleAddBasket(product) {
    let findBasket = basket.find(item => item.id == product.id)
    if (findBasket) {
      findBasket.count++
      setBasket([...basket])
    } else {
      setBasket([...basket, { ...product, count: 1 }])

    }
  }

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)
        setOriginalData(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])



  function handleModalClose() {
    setModalProduct(null)
  }

  function handleSearch(e) {
     if(e.target.value==""){
        setData(originalData)
     }else{
      let filteredBooks = data.filter(book =>
        book.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
      setData(filteredBooks)
     }
  }

  function handleSortByName() {
    let sortedBooks=data.sort((a,b)=>a.title.localeCompare(b.title))
    setData([...sortedBooks])

}


function handleSortByPrice() {
  let sortedBooks=data.sort((a,b)=>(a.price-b.price))

  setData([...sortedBooks])

}

  return (
    <>
      
      <Container>
        <div  className='search'>
        <input type="search" name="" id="" placeholder='Search' onChange={(e)=>handleSearch(e)}/>
        <div style={{display:"flex",gap:"10px"}}>
        <Button className="btn btn-info" onClick={handleSortByName}>Sort by name</Button>
        <Button className="btn btn-info" onClick={handleSortByPrice}>Sort by price</Button>
        <Button className="btn btn-info" onClick={getData}>Reset</Button>
        </div>
       
        {/* <select name="" id="" onChange={(e)=>handleSelect(e)}>
          <option value="" defaultValue={data}>default</option>
          <option value=""  onChange={handleSortByName}>Sort by name</option>
          <option value="" onChange={handleSortByPrice}>Sort by price</option>
        </select> */}
        </div>
        <Row style={{ margin:"30px 0"}}>
          {data && data.map(product => (
            <Col lg={3} md={4} sm={6} key={product.id}>
              <Card style={{ marginBottom: "20px", padding: '10px 30px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.author}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <div className='btn-holder'>
                  <Button className="btn btn-info" style={{ color: 'white' }} onClick={() => setModalProduct(product)}>Details</Button>
                  <div>
                    <LocalMallIcon onClick={() => handleAddBasket(product)} style={{ fontSize: '30px', color: "green", cursor: "pointer" }}></LocalMallIcon>
                    <IconButton onClick={() => handleAddFavorite(product)}><FavoriteBorderIcon style={{ fontSize: '30px', color: "red", cursor: "pointer" }}></FavoriteBorderIcon></IconButton>
                  </div>
                </div>



              </Card>
            </Col>


          ))
          }
        </Row>
      </Container>






      {modalProduct && (
        <div className='modal'>
          <div className='modal-content '>
            <img src={modalProduct.image} alt="" style={{ height: '200px', objectFit: 'contain' }} />
            <p><strong>title:</strong> {modalProduct.title}</p>
            <p><strong>description:</strong> {modalProduct.description}</p>
            <p><strong>author:</strong> {modalProduct.author}</p>
            <p><strong>price:</strong> {modalProduct.price}$</p>
            <p><strong>pages count:</strong> {modalProduct.pagesCount}</p>
            <p><strong>genre:</strong> {modalProduct.genre}</p>
            <p><strong>published year:</strong> {modalProduct.publishedYear}</p>
            <p><strong>language:</strong> {modalProduct.language}</p>
            <button className='custom-button' style={{ display: "flex", alignSelf: "end" }} onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default UserProducts
