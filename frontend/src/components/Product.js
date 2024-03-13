import React from 'react';
import './Product.css';

function Product({header, image, price}) {
  return (
    <div className="Product">
      <img src={image} />
      <h1>{header}</h1>
      <p>{price} руб</p>
      <button>В корзину</button>
      <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.Product)}>+</div>
    </div>
  );
}

export default Product;