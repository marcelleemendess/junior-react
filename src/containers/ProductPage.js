import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductPage extends Component {
    render () {
        const { name, products } = this.props
        return (
            <div>
                {products.map((product, index) =>
                    <ProductItem key={index} name={name}/>
                )}
               
            </div>
        )
    }
}

export default ProductPage;