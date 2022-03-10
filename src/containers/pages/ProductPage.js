import React, { Component } from "react";
import './ProductPage.css';
import { Query } from "react-apollo";
import { GET_CAT } from "../itemQuery";
// import axios from "axios";


class ProductPage extends Component {
   
    render() {
        // const { data } = this.props
        return (
            <Query query={GET_CAT}>
                {
                    
                }
            </Query>
        )
    }
}

export default ProductPage;

