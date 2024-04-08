import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import CartItem from '../cart/CartItem';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { clearAllItems } from '../../store/cart/cart';

const MySwal = withReactContent(Swal);

const Cart = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [discount, setDiscount] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);

  const showSwal = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Order Complete!',
      confirmButtonText: 'Shop More!',
      confirmButtonColor: 'transparent',
      customClass: {
        confirmButton: 'gradient-button',
        title: 'modal-text',
      },
    }).then((res) => {
      if (res.isConfirmed) {
        navigate('/');
        dispatch(clearAllItems());
      }
    });
  };

  const invalidSwal = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Add some Items First!',
      confirmButtonText: 'Go Home',
      confirmButtonColor: 'transparent',
      customClass: {
        confirmButton: 'gradient-button',
        title: 'modal-text',
      },
    }).then((res) => {
      if (res.isConfirmed || res.isDismissed) {
        navigate('/');
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      inputValue == 'nepal2023' ? setDiscount(10) : setDiscount(0);
      setInputValue('');
    }
  };

  if (!items || items.length == 0) {
    return (
      <div className="page__items">
        <h1 className="page__items-text">No Items Yet</h1>
        <Link to="/" className="page__items-button">
          Buy Something
        </Link>
      </div>
    );
  }

  return (
    <div className="page__container" id="pageContainer">
      <div className="cart__container">
        <div className="cart" id="cart">
          <h2 className="cart__title">Your orders</h2>
          <div className="cart__header">
            <div className="cart__items">Items</div>
            <div className="cart__quantity">Quantity</div>
            <div className="cart__name">Subtotal</div>
          </div>

          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="cart__total">
            <div className="cart__total-wrapper">
              <div className="cart__total-box-discount">
                <form onSubmit={handleSubmit} className="cart__total-form">
                  <label htmlFor="" className="cart__total-name">
                    Discount
                  </label>
                  <input
                    type="text"
                    className="cart__total-input"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                  />
                  <button type="submit" className="cart__total-button" id="applyCode">
                    Apply Code
                  </button>
                </form>
              </div>

              <div className="cart__total-box">
                <div className="cart__total-calc">
                  <div className="cart__total-subtotal">Subtotal</div>
                  <div className="cart__total-subtotal">Shipping</div>
                  {discount && <div className="cart__total-subtotal cartDiscount">Discount</div>}
                  <div className="cart__total-subtotal">Total</div>
                </div>
                <div className="cart__total-calc">
                  <div className="cart__total-sum" id="cartSubtotal">
                    ${totalPrice.toFixed(2)}
                  </div>
                  <div className="cart__total-sum">$6</div>
                  {discount && (
                    <div className="cart__total-sum cartDiscount">
                      {discount == 10 && '-'}${discount}
                    </div>
                  )}
                  <div className="cart__total-sum" id="cartTotal">
                    ${(totalPrice + 6 - discount).toFixed(2)}
                  </div>
                </div>
                <div></div>
                <button
                  className="cart__total-checkout"
                  onClick={() => {
                    if (!items || items.length == 0) {
                      invalidSwal();
                    } else setSidemenu(!sidemenu);
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="cart__payment">
            <div className="cart__payment-method">PAYMENT METHOD</div>
            <label className="payment-container">
              Digital payment
              <input type="radio" name="payment" className="cart__payment-type" />
              <span className="checkmark"></span>
            </label>

            <label className="payment-container">
              Cash on payment
              <input type="radio" name="payment" className="cart__payment-type" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="overlay" style={sidemenu ? { display: 'block' } : null}></div>
      <div className={'side-menu' + (sidemenu ? ' side-menu_active' : '')} id="sideMenu">
        <button id="closeButton" onClick={() => setSidemenu(!sidemenu)}>
          ✖
        </button>
        <h1 className="side-menu__title">Billing details</h1>
        <div className="side-menu__details">Please fill the details carefully.</div>
        <form
          action=""
          className="side-menu__form"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div className="side-menu__wrapper">
            <div>
              <label>FirstName*</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Lastname*</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Country/region*</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">state/zone*</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Town/city*</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">contact*</label>
              <input type="text" />
            </div>
          </div>

          <div className="side-menu__detail">
            <label htmlFor="">street address</label>
            <input type="text" />
          </div>
          <div className="side-menu__detail">
            <label htmlFor="">Email*</label>
            <input type="text" />
          </div>
        </form>
        <label htmlFor="" className="terms-container">
          <input type="checkbox" />
          Terms and Conditions
        </label>

        <div className="side-menu__policy">
          Please go through our company policy in FAQ. Our company thoroughly checksand is strict on
          claims regading returns and exchange. Goods cannot be resold. If you agree these
          conditions please tick out the checkbox.
        </div>
        <span className="side-menu__link">Our Policy</span>

        <div className="side-menu__btn" onClick={showSwal}>
          Place order
        </div>
      </div>
    </div>
  );
};

export default Cart;
