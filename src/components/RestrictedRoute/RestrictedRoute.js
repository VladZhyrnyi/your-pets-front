// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/Auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;

  return Component;
};

export default RestrictedRoute;
