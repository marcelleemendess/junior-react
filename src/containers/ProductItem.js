import React, { Component } from "react";

class ProductItem extends Component {
    render () {
        return (
            <div className="product-item">
                <div className='image'>
                    image
                </div>
                <div className="product-footer">
                    <span className="name">name</span>
                    <span className="price">price</span>
                </div>
                <button>
                    Add to cart
                </button>
            </div>
        )
    }
}

export default ProductItem;