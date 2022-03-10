import React, { Component }  from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


class Product extends Component {
    render() {
        const { productId, name, price, gallery, category} = this.props
        return (
            <Link to={`/${category}/${productId}`}>
                <div className="product">
                    <img
                        src={gallery}
                        alt={name}
                    />
                    <div className="product-info">
                        <p className="product-name">{name}</p>
                        <p className="product-price">{price}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Product;
