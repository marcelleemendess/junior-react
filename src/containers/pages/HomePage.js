import './HomePage.css';
import React, { Component } from "react";
import { Query } from "react-apollo";
// import { gql } from "apollo-boost";
import { GET_CAT } from "../itemQuery";
import Product from "../Product";
import Spinner from "../Spinner";

class HomePage extends Component {
    render() {
        return (
            <Query query={GET_CAT}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <Spinner/>;
                        if (error) return `Error! ${error.message}`;
                        
                        return (
                            <div className="homepage">
                                <div className="homepage-products">
                                    <h1>All</h1>
                                    {
                                        data.categories[0].products.map((product) =>
                                            <Product
                                                key={product.id}
                                                productId={product.id}
                                                productName={product.name}
                                                price={product.price}
                                                gallery={product.gallery[0]}
                                                category={product.category}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </Query>
        )
    }
} 

export default HomePage;

