import { gql } from "apollo-boost";

export const GET_CAT = gql`
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
        },
        product(id:"huarache-x-stussy-le" ){
            id
            name 
            inStock
            gallery 
        },
        currencies {
            label
            symbol
        }
    }
    
`