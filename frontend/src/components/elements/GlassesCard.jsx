import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import favoriteIcon from '../../assets/images/icons/favorite.png';
import favoriteActive from '../../assets/images/icons/favorite_active.png';
import { addItem } from '../../store/cart/cart';

const GlassesCard = ({ id, name, price, category, image }) => {
  const [toggled, setToggled] = useState(false);

  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      image,
      count: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="glasses__card card">
      <div className="card__img">
        <Link to={`/glasses/${id}`}>
          <img src={image} alt="glasses" />
        </Link>
      </div>
      <div className="card__descr">
        <div className="card__model">{name}</div>
        <div className="card__price">${price}</div>
      </div>
      <div className="card__button">
        <div className="card__favorite">
          <img
            src={toggled ? favoriteActive : favoriteIcon}
            alt="favorite"
            className="card__icon"
            onClick={() => setToggled((toggle) => !toggle)}
          />
        </div>
        <div className="card__add" onClick={() => {}}>
          <svg
            width="31"
            height="27"
            viewBox="0 0 31 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
              fill="#fff"
            />
          </svg>
          <button onClick={() => onClickAdd()}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default GlassesCard;
