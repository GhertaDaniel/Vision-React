import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { fetchRegister, selectIsAuth } from '../../store/auth/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup
    .number()
    .test('len', 'Must be exactly 9 numbers', (val) => val.toString().length === 9)
    .required(),
  password: yup
    .string()
    .min(5, 'password must have at least 5 characters')
    .required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const Register = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'Vanea',
      email: 'vanea@mail.ru',
      phone: '123456789',
      password: '123456',
      confirmPassword: '123456',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      alert("can't register");
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page__container">
      <div className="register">
        <div className="register__wrapper">
          <div className="register__logo">
            <img src="auth/logo.png" alt="" />
            VISION
          </div>
          <form role="form" id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="register__name">Register</div>
            <div className="form-group">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" {...register('name')} />

                <p
                  style={{ display: errors.name ? 'block' : 'none' }}
                  className="registerform-error"
                >
                  {errors.name?.message}
                </p>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" {...register('email')} />

                <p className="registerform-error">{errors.email?.message}</p>
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" {...register('phone')} />
                <p className="registerform-error">{errors.phone?.message}</p>
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="password" name="pass" {...register('password')} />
                <p className="registerform-error">{errors.password?.message}</p>
              </div>
              <div>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirmPass" {...register('confirmPassword')} />
                <p className="registerform-error">{errors.confirmPassword?.message}</p>
              </div>
            </div>
            <button type="submit" className="register__btn signup-btn">
              Sign in
            </button>
          </form>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>{' '}
        <img src="auth/register.png" alt="" className="register__img" />
      </div>
    </div>
  );
};

export default Register;
