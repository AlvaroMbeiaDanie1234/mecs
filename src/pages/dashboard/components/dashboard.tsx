
import './dashboard.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './layout/header.tsx'
import Sidebar from './layout/sidebar.tsx'

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      navigate('/login')
    } else {
      setLoading(false)
    }
  }, [navigate])

  if (loading) {
    return <div className="loading-screen">Carregando...</div>
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <h1>Dashboard</h1>
          <p>Bem-vindo ao painel de controle moderno!</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
