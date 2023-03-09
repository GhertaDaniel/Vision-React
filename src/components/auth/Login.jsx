import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { fetchAuth, selectIsAuth } from '../../store/auth/auth';

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'vanea@mail.ru',
      password: '123456',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      alert('cant login');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page__container">
      <div className="login">
        <div className="login__wrapper">
          <div className="login__logo">
            <img src="auth/logo.png" alt="" />
            VISION
          </div>
          <form role="form" id="formLogin" onSubmit={handleSubmit(onSubmit)}>
            <div className="login__name">Log in</div>
            <div className="login__descr">Please sign in to continue</div>
            <div className="form-group">
              <input type="email" id="emailLogin" placeholder="Email.." {...register('email')} />
              <input
                type="password"
                name=""
                id="passLogin"
                placeholder="Password.."
                {...register('password')}
              />
            </div>
            <button className="login__btn" type="submit">
              Log in
            </button>
          </form>
          <p>
            Haven't registered? <Link to="/register">Sign up</Link>
          </p>
        </div>
        <div>
          <img src="auth/login.png" alt="" className="register__img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
