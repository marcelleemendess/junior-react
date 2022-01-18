import React from "react";
import { gql, useQuery } from "@apollo/client";
import './ProductsContainer.css';
import Spinner from "./Spinner"

const GET_PRODUCTS = gql`
    {
      categories {
        name
        products {
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          brand
        }
      }
    }
`

function ProductsContainer() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Spinner/>;
  if (error) return `Error! ${error.message}`;
  
  return (
    <div className="cards-container">
      <div className="title">
        <h1>{data.categories[0].name}</h1>
      </div>
      {data.categories[0].products.map((product) => (
        <div className="card-product" key={product.id}>
          <div className="card-image">
            <img className="image"src={product.gallery[0]} alt={product.name} />
          </div>
          <div className="card-footer">
            <span className="name">{product.name}</span>
            <span className="price">${product.prices[0].amount}</span>
          </div>
        </div>
      ))} 
    </div>
  )
}

export default ProductsContainer;