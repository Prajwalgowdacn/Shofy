import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Compoments/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Compoments/ProductDisplay/ProductDisplay'
import "bootstrap/dist/css/bootstrap.min.css";
import { RelatedProducts } from '../Compoments/RelatedProducts/RelatedProducts'
// import Description from '../Compoments/Description/Description'


export const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId}= useParams()
  const product = all_product.find((e)=>e.id=== Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
      {/* <Description/> */}
    </div>
  )
}
