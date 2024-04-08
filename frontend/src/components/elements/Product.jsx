import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import favoriteIcon from '../../assets/images/icons/favorite.png';
import { clearItems, fetchGlasses } from '../../store/glasses';
import { addItem } from '../../store/cart/cart';

export default function Product({}) {
  const product = useSelector((state) => state.glasses.items);
  const dispatch = useDispatch();

  const [mainPhoto, setMainPhoto] = React.useState(product.image);
  const [count, setCount] = React.useState(1);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchGlasses(id));
    setMainPhoto(product.image);
  }, []);

  const onClickAdd = () => {
    const item = {
      id: parseInt(id),
      name: product.name,
      price: product.price,
      image: product.image,
      count,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__wrapper">
          <div className="product__block-img">
            <div className="product__img">
              <img src={`../${mainPhoto || product.image}`} alt="" />
            </div>
            <div className="product__img-container">
              <div className="product__img_small">
                <div
                  className="product__img-abs"
                  onClick={() => setMainPhoto(`../${product.image}`)}
                >
                  <img src={`../${product.image}`} alt="" />
                </div>
              </div>
              <div className="product__img_small">
                <div
                  className="product__img-abs"
                  onClick={() => setMainPhoto('../images/sunglasses/sun1 1 sideview.png')}
                >
                  <img src="../images/sunglasses/sun1 1 sideview.png" alt="" />
                </div>
              </div>
              <div className="product__img_small">
                <div
                  className="product__img-abs"
                  onClick={() => setMainPhoto('../images/sunglasses/sun1 1 diagonalview.png')}
                >
                  <img src="../images/sunglasses/sun1 1 diagonalview.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product__block">
            <div className="product__name" id="prodName">
              {product.name}
            </div>
            <div className="product__price" id="prodPrice">
              ${product.price}
            </div>
            <div className="product__qnt">
              <button
                disabled={count === 1}
                className="product__btn"
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </button>
              <div className="product__qnt-number">{count}</div>
              <button className="product__btn" onClick={() => setCount((prev) => prev + 1)}>
                +
              </button>
              <div className="product__wish">
                <img src={favoriteIcon} className="card__icon" alt="" />
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="addCart"
                  onClick={() => {
                    onClickAdd();
                  }}
                >
                  <path
                    d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                    fill="#000"
                  />
                </svg>
              </div>
            </div>
            <div className="product__descr">
              <div className="product__descr-title">Description</div>
              <div className="product__descr-text">
                Using advanced edging technology and high-quality materials, our premium sunglasses
                have a luxurious feel with subtly curved lenses. Made with lightweight TR90 plastic,
                these large square sunglasses have a striking layered design. The matte translucent
                front rim features a dark tortoiseshell overlay and dark tortoiseshell temple arms.
                A metal brow bar adds a modern touch. Please note, the actual pattern on eyeglasses
                may vary slightly from the one pictured.
              </div>
            </div>
            <div className="product__details">
              <div className="product__details-available">Available: Yes</div>
              <div className="product__details-model">Model No: 1116615</div>
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="product__info-title">More Info</div>
          <div className="product__info-wrapper">
            <div className="product__info-block">
              <div className="product__info-subtitle">SPECIFICATIONS</div>
              <div className="product__info-container">
                <div className="product__info-text">
                  <p>PD Range: 55-75 </p>
                  <p>Prescription Range: -6.00 ~ +2.00 </p>
                  <p>Available as</p>
                  <p>Progressive / Bifocal : No </p>
                  <p>Readers: No </p>
                </div>
                <div className="product__info-text">
                  <p>Rim: Full Rim</p>
                  <p>Shape: Square</p>
                  <p>Material: TR</p>
                  <p>Feature: Custom engraving , Lightweight</p>
                </div>
              </div>
            </div>
            <div className="product__info-block">
              <div className="product__info-subtitle">Frame size</div>
              <div className="product__info-container">
                <div className="product__info-text">
                  <p>Frame Width: 146 mm</p>
                  <p>Lens Width: 52 mm</p>
                  <p>Bridge: 20 mm</p>
                </div>
                <div className="product__info-text">
                  <p>Temple Length: 142 mm</p>
                  <p>Lens Height: 46 mm</p>
                  <p>Frame Weight: 17 grams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
