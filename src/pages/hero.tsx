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
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.addEventListener('load', AOS.refresh);
        return () => window.removeEventListener('load', AOS.refresh);
    }, []);

   

    // VANTA.WAVES effect
    useEffect(() => {
        const interval = setInterval(() => {
            if ((window as any).VANTA && (window as any).THREE && !vantaEffect.current) {
                vantaEffect.current = (window as any).VANTA.WAVES({
                    el: vantaRef.current,
                    THREE: (window as any).THREE,
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
            if (vantaEffect.current) vantaEffect.current.destroy();
            clearInterval(interval);
        };
    }, []);

    const openWhatsAppWithMessage = () => {
        const encodedMessage = encodeURIComponent(userMessage || 'Olá, gostaria de mais informações!');
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setUserMessage('');
        setShowChat(false);
    };

    return (
        <section
            ref={vantaRef}
            className="hero-section d-flex align-items-center min-vh-100 py-5"
            style={{
                position: 'relative',
                overflow: 'hidden',
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            ></div>

            <canvas
                className="background"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            ></canvas>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                        <h1 style={{ color: 'white' }} className="display-5 fw-bold mb-4">
                            Conecte sua empresa ao <span className="text-primary">Futuro</span> das empresas do Mundo
                        </h1>
                        <p style={{ color: 'white' }} className="lead mb-4">
                            Descubra um novo jeito de crescer, inovar e construir juntos com tecnologia e colaboração.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                            <Link to="/register" className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm">
                                Criar Conta
                            </Link>
                            <Link to="/login" className="btn btn-outline-primary btn-lg px-4 rounded-pill">
                                Entrar
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center mb-4 mb-lg-0" data-aos="fade-left">
                        <img
                            src={heroImage}
                            alt="Futuro da construção"
                            className="img-fluid"
                            style={{ maxHeight: '450px' }}
                        />
                    </div>
                </div>
            </div>

            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 999 }}>
                {showChat && (
                    <div className="bg-white p-3 rounded shadow" style={{ width: 300, marginBottom: 10 }}>
                        <div className="bg-light p-2 mb-2 rounded" style={{ fontSize: '0.9rem', color: '#333', borderLeft: '4px solid #25D366' }}>
                            👋 Olá! Como podemos ajudar?
                        </div>
                        <textarea
                            className="form-control mb-2"
                            rows={3}
                            placeholder="Digite sua mensagem..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                        ></textarea>
                        <button className="btn btn-success w-100" onClick={openWhatsAppWithMessage}>
                            Enviar via WhatsApp
                        </button>
                    </div>
                )}
                <button className="btn btn-outline-light rounded-circle" onClick={() => setShowChat(!showChat)}>
                    <img src={whatsappIcon} alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
