import React from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import { fetchAuthMe, selectIsAuth } from './store/auth/auth';
import { Home, Category, Location, Faq, Cart, Profile } from './components/pages/index';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Protected from './components/auth/Protected';
import Product from './components/elements/Product';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
    if (pathname === '/') {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 750);
    }
  }, []);

  return (
    <div className="App">
      {isLoading && pathname === '/' && (
        <div className="pre-loader">
          <div className="pre-loader__text">Hello darkness!</div>
        </div>
      )}
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/location" element={<Location />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/glasses/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </main>
      {/* <main className="container">
        <Outlet />
      </main> */}
      <Footer />
    </div>
  );
}
