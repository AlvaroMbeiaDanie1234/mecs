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
        return <div>Loading...</div>;
    }

    
};

export default Dashboard;
