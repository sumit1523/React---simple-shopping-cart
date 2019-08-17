import React, { Component } from 'react';

import Product from './Product';
import ProductForm from './ProductForm';
import Total from './Total';

class ProductList extends Component {
    state = {
        total: 0,
        productList: ""
    };

    componentDidMount = () => {
        let productList = [
            { name: "android", price: 231, info: "product of google" },
            { name: "iphone", price: 784, info: "product of apple" },
            { name: "windows", price: 156, info: "product of microsoft" }
        ];
        setTimeout(() => {
            this.setState({ productList: productList });
        }, 1000);
    }

    createProduct = (product) => {
        this.setState({
            products: this.state.productList.push(product)
        });
    }

    calculateTotal = (price) => {
        this.setState({
            total: this.state.total + price
        });
        console.log(this.state.total);
    }

    showProduct = (info) => {
        console.log(info);
        alert(info);
    }

    render() {
        if (!this.state.productList) return <p>loading...!!!!</p>;
        let products = this.state.productList.map((product) => {
            return (
                <Product
                    name={product.name}
                    price={product.price}
                    info={product.info}
                    handleShow={this.showProduct}
                    handleTotal={this.calculateTotal}
                />
            );
        });

        return (
            <div>
                <ProductForm handleProduct={this.createProduct} />
                {products}
                <Total total={this.state.total} />
            </div>
        );
    }
}

export default ProductList;