import { Route } from 'react-router-dom';
import { lazy } from 'react';
import AuthLayout from '../layouts/AuthLayout';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  </>
);

export default publicRoutes;
