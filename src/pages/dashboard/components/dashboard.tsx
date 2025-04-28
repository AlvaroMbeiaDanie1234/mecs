import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaEnvelope, FaCog } from 'react-icons/fa'; // Importando ícones do React Icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import './dashboard.css';
import Header from './layout/header.tsx';
import Sidebar from './layout/sidebar.tsx';
import Home from '../menu/home.tsx';
import Perfil from '../menu/perfil.tsx';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home'); // Estado para armazenar a página atual
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return <div className="loading-screen">Carregando...</div>;
  }

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar setCurrentPage={setCurrentPage} />  {/* Passando a função para o Sidebar */}
        
        <main className="main-content container-fluid">

          {/* Renderizando o conteúdo da página de acordo com o estado `currentPage` */}
          {currentPage === 'home' && <Home />}
          {/* Adicione mais condições para outras páginas */}
          {currentPage === 'profile' && <Perfil />}
          {currentPage === 'notifications' && <div>Notificações</div>}
          {currentPage === 'messages' && <div>Mensagens</div>}
          {currentPage === 'settings' && <div>Configurações</div>}
        </main>

        <aside className="right-content d-none d-md-block">
          <div className="card mb-4">
            <div className="card-header">
              <FaBell /> Notificações
            </div>
            <div className="card-body">
              <p>Você tem 5 novas notificações.</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <FaEnvelope /> Mensagens
            </div>
            <div className="card-body">
              <p>Você tem 2 novas mensagens.</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <FaCog /> Configurações
            </div>
            <div className="card-body">
              <p>Acesse as configurações da sua conta.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
