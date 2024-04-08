import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { fetchAuthMe, selectIsAuth, logout } from '../../store/auth/auth';
import { useCookies } from 'react-cookie';

const Profile = () => {
  const user = useSelector((state) => state.auth.data);
  const [isEditable, setIsEditable] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [_, __, removeCookie] = useCookies();

  React.useEffect(() => {
    dispatch(fetchAuthMe);
  }, []);

  const logOut = () => {
    removeCookie('login-token', { path: '/' });
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="page__container">
      <div className="profile">
        <div className="profile__container">
          <div className="profile__info">
            <img src="profile/profile.png" alt="" />
            <div className="profile__info-descr">
              <h3 className="profile__info-username">{user.name}</h3>
              <div className="profile__info-date">
                <label htmlFor="">Email</label>{' '}
                <input type="text" value={user.email} disabled={!isEditable} />
              </div>
              <div className="profile__info-date">
                <label htmlFor="">Contact</label>{' '}
                <input type="text" value={user.phone} disabled={!isEditable} />
              </div>
              <div className="profile__info-date">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Please enter your address" disabled={!isEditable} />
              </div>
              <div className="profile__info-wrapper">
                <button
                  className="profile__btn btn-edit"
                  onClick={() => setIsEditable(!isEditable)}
                >
                  {!isEditable ? 'Edit' : 'Save'}
                </button>
                <button className="profile__btn btn-logout" onClick={() => logOut()}>
                  Log out
                </button>
              </div>
            </div>
          </div>
          <div className="profile__wrapper">
            <div className="profile__block">
              <div className="profile__title">Purchase history</div>
              <div className="profile__content">
                <div className="profile__content-item item">
                  <div className="item__wrapper">
                    <div className="item__img">
                      <img src="images/sunglasses/sunglasses-1.png" alt="" />
                    </div>
                    <div className="item__box">
                      <div className="item__name">Premium Square Sunglasses</div>
                      <div className="item__price">$32.95</div>
                      <div className="item__date">14th February 2023</div>
                    </div>
                  </div>
                </div>
                <div className="profile__content-item item">
                  <div className="item__wrapper">
                    <div className="item__img">
                      <img src="images/sunglasses/prescription-2.png" alt="" />
                    </div>
                    <div className="item__box">
                      <div className="item__name">Premium Square Sunglasses</div>
                      <div className="item__price">$32.95</div>
                      <div className="item__date">14th February 2023</div>
                    </div>
                  </div>
                </div>
                <div className="profile__content-item item">
                  <div className="item__wrapper">
                    <div className="item__img">
                      <img src="images/sunglasses/protective-3.png" alt="" />
                    </div>
                    <div className="item__box">
                      <div className="item__name">Premium Square Sunglasses</div>
                      <div className="item__price">$32.95</div>
                      <div className="item__date">14th February 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__block">
              <div className="profile__title">wishlist</div>
              <div className="profile__content wish">
                <div className="wish__wrapper">
                  <div className="wish__img">
                    <img src="img/sunglasses/sun1 1.png" alt="" />
                  </div>
                  <div className="wish__box">
                    <div className="wish__name">Premium Sunglasses</div>
                    <div className="wish__price">$32.95</div>
                  </div>
                  <div className="wish__cart">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="profile__content wish">
                <div className="wish__wrapper">
                  <div className="wish__img">
                    <img src="img/sunglasses/sun1 1.png" alt="" />
                  </div>
                  <div className="wish__box">
                    <div className="wish__name">Premium Sunglasses</div>
                    <div className="wish__price">$32.95</div>
                  </div>
                  <div className="wish__cart">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="profile__content wish">
                <div className="wish__wrapper">
                  <div className="wish__img">
                    <img src="img/sunglasses/sun1 1.png" alt="" />
                  </div>
                  <div className="wish__box">
                    <div className="wish__name">Premium Sunglasses</div>
                    <div className="wish__price">$32.95</div>
                  </div>
                  <div className="wish__cart">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
