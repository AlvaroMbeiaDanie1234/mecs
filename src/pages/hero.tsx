import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from '../assets/hero.svg'; // Verifique se o caminho está correto
import backgroundImage from '../assets/background.jpg';
import whatsappIcon from '../assets/whatsapp.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// O restante do seu código...
// O restante do seu código...
const phoneNumber = '244923456789'; // Coloque o número real aqui

const Hero = () => {
    const [showChat, setShowChat] = useState(false);
    const [userMessage, setUserMessage] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.addEventListener('load', AOS.refresh);
        return () => window.removeEventListener('load', AOS.refresh);
    }, []);

    // Inicializar particles.js
    useEffect(() => {
        if (window.Particles) {
            const particlesOptions = {
                selector: '.background',
                particles: {
                    number: {
                        value: 100, // Número total de partículas
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: ["circle"], // Apenas círculos
                        stroke: {
                            width: 0,
                            color: "#000000"
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: true, // Opacidade aleatória
                    },
                    size: {
                        value: 5, // Tamanho das partículas
                        random: true,
                        anim: {
                            enable: true,
                            speed: 40,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    }
                },
                retina_detect: true
            };

            window.Particles.init(particlesOptions);
        } else {
            console.error("Particles.js não está carregado.");
        }
    }, []);

    const openWhatsAppWithMessage = () => {
        const encodedMessage = encodeURIComponent(userMessage || 'Olá, gostaria de mais informações!');
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setUserMessage('');
        setShowChat(false);
    };

    return (
        <section
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
                            Conecte sua empresa ao <span className="text-primary">Futuro</span> da construção de Angola
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

            {/* Chat WhatsApp flutuante */}
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 999 }}>
                {showChat && (
                    <div className="bg-white p-3 rounded shadow" style={{ width: 300, marginBottom: 10 }}>
                        {/* Mensagem automática */}
                        <div
                            className="bg-light p-2 mb-2 rounded"
                            style={{
                                fontSize: '0.9rem',
                                color: '#333',
                                borderLeft: '4px solid #25D366',
                            }}
                        >
                            👋 Olá! Como podemos ajudar?
                        </div>

                        {/* Campo de mensagem */}
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

                <button
                    className="btn btn-outline-light rounded-circle"
                    onClick={() => setShowChat(!showChat)}
                >
                    <img src={whatsappIcon} alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
                </button>
            </div>
        </section>
    );
};

export default Hero;