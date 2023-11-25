import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../core.mjs'
import ProductDetailCard from './ProductDetailCard'

const ListingDetail = () => {

  const { listing_id } = useParams()
  const [product, setProduct] = useState()

  useEffect(()=>{

    getProduct(listing_id)

  },[listing_id])


  const getProduct = async(productId)=>{

    try{

      const response = await axios.get(`${baseUrl}/api/v1/product/${productId}`)
      setProduct(response.data);

    }catch(error){
      console.error(error);
    }

  }

  console.log(product);

  return (
    <div>
      {
        product 
        ?
        <ProductDetailCard data={product} />
        :
        <div className='loader'></div>
      }
    </div>
  )
}

export default ListingDetail

