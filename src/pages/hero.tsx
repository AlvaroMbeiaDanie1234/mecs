import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import heroImage from '../assets/hero.svg'; // use uma imagem vetorial futurista
import { Link } from 'react-router-dom';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Carregar o tema salvo no localStorage
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);

    AOS.init({ duration: 1000 });

    window.addEventListener('load', AOS.refresh);
    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  // Alterna entre os modos claro e escuro
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <section
      className={`hero-section d-flex align-items-center ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} min-vh-100 py-5`}
    >
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
            <h1 className="display-5 fw-bold mb-4">
              Conecte sua empresa ao <span className="text-primary">Futuro</span> da construção de Angola
            </h1>
            <p className="lead mb-4">
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

      {/* Botão para alternar entre os modos */}
      <div
        className="position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 999 }}
        onClick={toggleDarkMode}
      >
        <button className="btn btn-outline-light rounded-circle">
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </section>
  );
};

export default Hero;
