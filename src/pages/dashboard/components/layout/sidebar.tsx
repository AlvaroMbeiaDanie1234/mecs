import { FaHome, FaUser, FaCog, FaBell, FaEnvelope } from 'react-icons/fa';

interface SidebarProps {
  setCurrentPage: (page: string) => void;
}

const Sidebar = ({ setCurrentPage }: SidebarProps) => {
  return (
    <nav className="sidebar d-none d-md-block col-md-3 p-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('home')}>
            <FaHome /> Início
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('profile')}>
            <FaUser /> Perfil
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('notifications')}>
            <FaBell /> Notificações
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('messages')}>
            <FaEnvelope /> Mensagens
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('settings')}>
            <FaCog /> Configurações
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
