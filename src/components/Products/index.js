import React from "react"
import Product from "./Product"

const productsData = [
  {
    id : 1,
    title: 'Сухий корм Club 4 Paws',
    price: 360, 
    picture:"https://content1.rozetka.com.ua/goods/images/big/13523300.jpg",
    amount: 5
  },
  {
    id: 2,
    title:"Сухий корм Royal Canin", 
    price: 693, 
    picture: "https://content.rozetka.com.ua/goods/images/big/262364161.jpg",
    amount: 8
  },
  {
    id:3,
    title:"Сухий корм Optimeal",
    price:933, 
    picture:"https://content2.rozetka.com.ua/goods/images/big/12155116.jpg",
    amount:0
  },
  {
    id:4,
    title:"Сухий корм для дорослих котів Purina Cat Chow",
    price:299, 
    picture:"https://content.rozetka.com.ua/goods/images/big/320302332.jpg",
    amount:2
  },
  {
    id:5,
    title:"Сухий корм для дорослих кішок Royal Canin British Shorthair",
    price:299, 
    picture:"https://content2.rozetka.com.ua/goods/images/big/262364075.jpg",
    amount:0
  }

]
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData.map( product => ({...product}))
    };
  }

  render() {

    const { products } = this.state;
    const renderProducts = products.map( product =>
      <Product
        key={ product.id }
        title={ product.title }
        price= {product.price }
        picture= { product.picture }
        amount= { product.amount }
      />
    );

    return (
      <div className="product-container">
        { renderProducts }
      </div>
    )
  }
}

export default Products