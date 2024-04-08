import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../store/auth/auth';
const Protected = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return <Navigate to="/register" replace />;
  }
  return children;
};

export default Protected;
