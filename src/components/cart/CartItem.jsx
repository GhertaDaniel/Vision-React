import React from 'react';
import { useDispatch } from 'react-redux';

import { minusItem, addItem, removeItem } from '../../store/cart/cart';

const CartItem = ({ id, name, price, image, count }) => {
  const dispatch = useDispatch();

  const subtotal = price * count;

  return (
    <div className="cart__wrapper">
      <div className="cart__item">
        <div className="cart__item-container">
          <div className="cart__item-img">
            <img src={image} alt="" />
          </div>
          <div className="cart__item-box">
            <div className="cart__item-description">
              <div className="cart__item-name">
                <h3>{name}</h3>
              </div>
              <div className="cart__item-price">
                <p>${price}</p>
              </div>
              <div className="cart__item-remove">
                <button className="btn btn-remove" onClick={() => dispatch(removeItem({ id }))}>
                  Remove
                </button>
              </div>
            </div>
            <div className="cart__qnt">
              <button disabled={count === 1} onClick={() => dispatch(minusItem({ id }))}>
                -
              </button>
              <div className="cart__qnt-number">{count}</div>
              <button onClick={() => dispatch(addItem({ id }))}>+</button>
            </div>
            <div className="cart__subtotal">${subtotal.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
