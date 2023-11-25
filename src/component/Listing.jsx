import React, { useEffect, useState } from 'react'
import axios from "axios"
import { baseUrl } from "../../core.mjs"
import ProductCard from './ProductCard'
import '../css/Product.css'

const Listing = () => {

  const [products, setProducts] = useState()
  console.log(products)

  useEffect(() => {

    getProducts()

  }, [])

  const getProducts = async () => {
    try {

      const response = await axios.get(`${baseUrl}/api/v1/products`)

      setProducts(response.data)

    } catch (error) {
      console.log(error.data);
    }
  }

  return (

    <>
      <div className='cards'>
        {
          products ?
            products.map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard image={product.image} title={product.title} price={product.price} id={product._id} />
                </div>
              )
            }
            )
            : <div className="loader"></div>
        }
      </div>
    </>

  )
}

export default Listing