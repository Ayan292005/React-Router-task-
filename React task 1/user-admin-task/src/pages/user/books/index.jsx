import React, { useEffect, useState } from 'react'
import axios from "axios"
let DBurl="http://localhost:4000/books"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';      

function UserProducts() {
    let [data, setData] = useState([])
    let [modalProduct, setModalProduct] = useState(null)

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)

      })
  }

  useEffect(() => {
    getData()
  }, [])

  function deleteData(id) {
    let dataId = data.filter(el => el.id !== id)
    setData(dataId)

    axios.delete(`${DBurl}/${id}`)
      .then(() => {
        getData()
      })
  }

  function handleModalClose() {
    setModalProduct(null)
  }
  return (
    <>
      
            <Card style={{  width: "80%", margin: "0 auto", marginTop:'20px',padding:'10px' }}>

            {data && data.map(product => (
              <div className="">
                 <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.author}</Card.Text>
              <Card.Text>{product.price}$</Card.Text>
              <Button className='btn btn-danger'  onClick={() => deleteData(product.id)}>Delete</Button>  
              <Button  className="btn btn-info" style={{color:'white'}} onClick={() =>setModalProduct(product)}>Details</Button>
              <Button className='btn btn-success'>Basket</Button>
              <Button className='btn' style={{backgroundColor:'palevioletred',color:'white'}}>Favorites</Button>
              
              </div>
             
          ))
            }
          
          </Card>
      

      {modalProduct && (
        <div className='modal'>
          <div className='modal-content '>
            <h2>Product Details</h2>
            <p><strong>title:</strong> {modalProduct.title}</p>
            <p><strong>description:</strong> {modalProduct.description}</p>
            <p><strong>author:</strong> {modalProduct.author}</p>
            <p><strong>price:</strong> {modalProduct.price}$</p>
            <button className='custom-button' onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )} 
    </>
  )
}

export default UserProducts
