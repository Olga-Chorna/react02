import React from 'react'

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, price, picture, amount} = this.props;
    const styles = {border: (amount === 0)? '2px solid red' : '2px solid gray'};

    return (
      <div className='productCard' style={styles}>
        <h3>{title}</h3>
        <div className='info'>
          <p>{price} грн</p>
          <p>{(amount === 0)? 'товар не доступний' : (amount + ' грн')}</p>
        </div>
        <img src={picture} alt="Product Image"/>
      </div>
    )
  }
}

export default Product;