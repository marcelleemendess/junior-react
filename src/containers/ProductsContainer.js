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
      <h1 className="title">{data.categories[0].name}</h1>
      <ul className="card-product">
        {data.categories[0].products.map((product) => ( 
          <li className="card-info" key={product.id}>
            <img className="image" src={product.gallery[0]} alt={product.name} />
            <div className="card-footer">
              <p>{product.name}</p>
              <p>${product.prices[0].amount}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsContainer; 