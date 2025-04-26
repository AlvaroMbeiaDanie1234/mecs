import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">🚀</div>
      <nav className="sidebar-nav">
        <button onClick={() => navigate('/dashboard')}>🏠 Início</button>
        <button onClick={() => navigate('/profile')}>👤 Perfil</button>
        <button onClick={() => navigate('/settings')}>⚙️ Configurações</button>
      </nav>
    </aside>
  )
}

export default Sidebar
