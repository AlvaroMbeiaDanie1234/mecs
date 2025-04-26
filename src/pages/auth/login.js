import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loginImage from '../../assets/login.svg';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        const interval = setInterval(() => {
            if (window.VANTA && window.THREE && !vantaEffect.current) {
                vantaEffect.current = window.VANTA.WAVES({
                    el: vantaRef.current,
                    THREE: window.THREE, // explicitamente garante que use o THREE global
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x3f51b5
                });
                clearInterval(interval);
            }
        }, 100); // tenta a cada 100ms até encontrar
        return () => {
            if (vantaEffect.current)
                vantaEffect.current.destroy();
            clearInterval(interval);
        };
    }, []);
    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            // Realiza o login
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Obtém o token de ID do usuário
            const token = await user.getIdToken();
            // Armazena o token no localStorage
            localStorage.setItem('authToken', token);
            // Redireciona para a página home
            navigate('/dashboard');
        }
        catch (error) {
            setError(error.message);
        }
    };
    return (_jsxs("div", { className: "min-vh-100 d-flex flex-lg-row flex-column bg-light", children: [_jsx("div", { className: "d-none d-lg-flex align-items-center justify-content-center w-50 p-5", "data-aos": "fade-right", style: { background: 'linear-gradient(135deg, #3f51b5, #5a55ae)', color: 'white' }, children: _jsx("img", { src: loginImage, alt: "Ilustra\u00E7\u00E3o Login", className: "img-fluid", style: { maxHeight: '500px' } }) }), _jsxs("div", { className: "d-flex align-items-center justify-content-center w-100 w-lg-50 p-4 position-relative overflow-hidden", children: [_jsxs("div", { className: "card shadow-sm border-0 px-5 py-4 w-100", "data-aos": "fade-up", style: { maxWidth: '850px', borderRadius: '10px', zIndex: 1 }, children: [_jsxs("div", { className: "text-center mb-4", children: [_jsx("h2", { className: "fw-bold", style: { fontSize: '1.8rem' }, children: "Bem-vindo de volta \uD83D\uDC4B" }), _jsx("p", { className: "text-muted mb-0", style: { fontSize: '1rem' }, children: "Entre para continuar" })] }), error && _jsx("div", { className: "alert alert-danger", children: error }), _jsxs("form", { className: "row g-4", onSubmit: handleLogin, children: [_jsxs("div", { className: "col-md-12 mb-3", children: [_jsx("label", { className: "form-label text-muted small", children: "Email" }), _jsx("input", { type: "email", className: "form-control border-0 border-bottom rounded-0 shadow-none", placeholder: "seu@email.com", required: true, value: email, onChange: (e) => setEmail(e.target.value) })] }), _jsxs("div", { className: "col-md-12 mb-3", children: [_jsx("label", { className: "form-label text-muted small", children: "Senha" }), _jsx("input", { type: "password", className: "form-control border-0 border-bottom rounded-0 shadow-none", placeholder: "Digite sua senha", required: true, value: password, onChange: (e) => setPassword(e.target.value) })] }), _jsx("div", { className: "col-12 d-grid mt-4", children: _jsx("button", { type: "submit", className: "btn btn-primary fw-semibold py-2", children: "Entrar" }) }), _jsxs("p", { className: "text-center text-muted mt-3", children: ["N\u00E3o tem uma conta?", ' ', _jsx("a", { href: "#", className: "fw-semibold text-decoration-none", children: "Criar conta" })] })] })] }), _jsx("div", { ref: vantaRef, className: "position-absolute top-0 start-0 w-100 h-100", style: { zIndex: 0 } })] })] }));
}
