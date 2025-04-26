import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from '../assets/hero.svg';
import backgroundImage from '../assets/background.jpg';
import whatsappIcon from '../assets/whatsapp.png';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
const phoneNumber = '244923456789';
const Hero = () => {
    const [showChat, setShowChat] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.addEventListener('load', AOS.refresh);
        return () => window.removeEventListener('load', AOS.refresh);
    }, []);
    // VANTA.WAVES effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.VANTA && window.THREE && !vantaEffect.current) {
                vantaEffect.current = window.VANTA.WAVES({
                    el: vantaRef.current,
                    THREE: window.THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x3f51b5,
                });
                clearInterval(interval);
            }
        }, 100);
        return () => {
            if (vantaEffect.current)
                vantaEffect.current.destroy();
            clearInterval(interval);
        };
    }, []);
    const openWhatsAppWithMessage = () => {
        const encodedMessage = encodeURIComponent(userMessage || 'Olá, gostaria de mais informações!');
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setUserMessage('');
        setShowChat(false);
    };
    return (_jsxs("section", { ref: vantaRef, className: "hero-section d-flex align-items-center min-vh-100 py-5", style: {
            position: 'relative',
            overflow: 'hidden',
            height: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }, children: [_jsx("div", { style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                } }), _jsx("canvas", { className: "background", style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                } }), _jsx("div", { className: "container", style: { position: 'relative', zIndex: 2 }, children: _jsxs("div", { className: "row align-items-center flex-column-reverse flex-lg-row", children: [_jsxs("div", { className: "col-lg-6 text-center text-lg-start", "data-aos": "fade-right", children: [_jsxs("h1", { style: { color: 'white' }, className: "display-5 fw-bold mb-4", children: ["Conecte sua empresa ao ", _jsx("span", { className: "text-primary", children: "Futuro" }), " das empresas do Mundo"] }), _jsx("p", { style: { color: 'white' }, className: "lead mb-4", children: "Descubra um novo jeito de crescer, inovar e construir juntos com tecnologia e colabora\u00E7\u00E3o." }), _jsxs("div", { className: "d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap", children: [_jsx(Link, { to: "/register", className: "btn btn-primary btn-lg px-4 rounded-pill shadow-sm", children: "Criar Conta" }), _jsx(Link, { to: "/login", className: "btn btn-outline-primary btn-lg px-4 rounded-pill", children: "Entrar" })] })] }), _jsx("div", { className: "col-lg-6 text-center mb-4 mb-lg-0", "data-aos": "fade-left", children: _jsx("img", { src: heroImage, alt: "Futuro da constru\u00E7\u00E3o", className: "img-fluid", style: { maxHeight: '450px' } }) })] }) }), _jsxs("div", { className: "position-fixed bottom-0 end-0 p-3", style: { zIndex: 999 }, children: [showChat && (_jsxs("div", { className: "bg-white p-3 rounded shadow", style: { width: 300, marginBottom: 10 }, children: [_jsx("div", { className: "bg-light p-2 mb-2 rounded", style: { fontSize: '0.9rem', color: '#333', borderLeft: '4px solid #25D366' }, children: "\uD83D\uDC4B Ol\u00E1! Como podemos ajudar?" }), _jsx("textarea", { className: "form-control mb-2", rows: 3, placeholder: "Digite sua mensagem...", value: userMessage, onChange: (e) => setUserMessage(e.target.value) }), _jsx("button", { className: "btn btn-success w-100", onClick: openWhatsAppWithMessage, children: "Enviar via WhatsApp" })] })), _jsx("button", { className: "btn btn-outline-light rounded-circle", onClick: () => setShowChat(!showChat), children: _jsx("img", { src: whatsappIcon, alt: "WhatsApp", style: { width: '30px', height: '30px' } }) })] })] }));
};
export default Hero;
