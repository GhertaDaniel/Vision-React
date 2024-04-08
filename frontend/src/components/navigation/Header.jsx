import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/icons/profile.png';
import { selectIsAuth } from '../../store/auth/auth';

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  const [active, setActive] = React.useState(false);
  const { pathname } = useLocation();
  const isMounted = React.useRef(false);
  const userData = useSelector((state) => state.auth.data);
  const isAuth = useSelector(selectIsAuth);

  const headerRef = React.useRef(null);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setActive(false);
      }
    }
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items]);

  return (
    <div ref={headerRef} className={`header ${active ? 'menu-open' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          VISION
        </div>
        <ul className="header__list">
          <li>
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) => (isActive ? 'header__link_active' : 'header__link')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) => (isActive ? 'header__link_active' : 'header__link')}
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              className={({ isActive }) => (isActive ? 'header__link_active' : 'header__link')}
            >
              Location
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? 'header__link_active' : 'header__link')}
            >
              FAQ
            </NavLink>
          </li>
          {!isAuth ? (
            <NavLink to="/register" className="signup-btn">
              {pathname === '/register' ? 'Sign In' : 'Sign Up'}
            </NavLink>
          ) : (
            <>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? 'header__link_active' : 'header__link')}
                >
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => (isActive ? 'header__link_active' : 'header__link')}
                >
                  <svg
                    id="user"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13.5" cy="13.5" r="12" stroke="#7A7A7A" strokeWidth="3" />
                    <path
                      d="M13.369 13.7622C11.3005 13.7622 9.62417 12.0897 9.62417 10.0267C9.62417 7.96377 11.3005 6.29129 13.369 6.29129C15.4374 6.29129 17.1138 7.96377 17.1138 10.0267C17.1138 12.0897 15.4374 13.7622 13.369 13.7622ZM11.8857 15.163H14.8523C17.6518 15.163 19.9224 17.4276 19.9224 20.2204C19.9224 20.7789 19.4683 21.2322 18.9083 21.2322H7.829C7.26904 21.233 6.81557 20.7807 6.81557 20.2204C6.81557 17.4276 9.08585 15.163 11.8857 15.163Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <button type="button" className="icon-menu" onClick={() => setActive((prev) => !prev)}>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
