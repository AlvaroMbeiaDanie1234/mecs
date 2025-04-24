// src/pages/dashboard/components/dashboard.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o token de autenticação existe no localStorage
    const token = localStorage.getItem('authToken');

    if (!token) {
      // Se não houver token, redireciona para a página de login
      navigate('/login');
    } else {
      // Se o token existir, continua carregando o dashboard
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao painel de controle!</p>
      {/* Aqui você pode adicionar o conteúdo do seu dashboard */}
    </div>
  );
};

export default Dashboard;
