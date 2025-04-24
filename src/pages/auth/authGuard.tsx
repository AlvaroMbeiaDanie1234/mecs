// src/components/PrivateRoute.tsx
import { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const token = localStorage.getItem('authToken');
  const location = useLocation();

  // Se não houver token, redireciona para a página de login e guarda a localização
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Se o token existir, renderiza o elemento (Dashboard ou outra página protegida)
  return element;
};

export default PrivateRoute;
