import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loginImage from '../../assets/login.svg'; // Ilustração moderna

export default function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Inicializar particles.js
    if (window.Particles) {
      const particlesOptions: any = {
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

  return (
    <div className="min-vh-100 d-flex flex-lg-row flex-column bg-light">
      {/* ILUSTRAÇÃO - ESQUERDA (desktop only) */}
      <div
        className="d-none d-lg-flex align-items-center justify-content-center w-50 p-5"
        data-aos="fade-right"
        style={{
          background: 'linear-gradient(135deg, #3f51b5, #5a55ae)',
          color: 'white',
        }}
      >
        <img
          src={loginImage}
          alt="Ilustração Login"
          className="img-fluid"
          style={{ maxHeight: '500px' }}
        />
      </div>

      {/* FORMULÁRIO - DIREITA */}
      <div className="d-flex align-items-center justify-content-center w-100 w-lg-50 p-4">
        <div
          className="card shadow-sm border-0 px-5 py-4 w-100"
          data-aos="fade-up"
          style={{
            maxWidth: '850px', // Ajuste da largura
            borderRadius: '10px',
            minHeight: 'auto',
            position: 'relative',
            zIndex: 1 // Para garantir que o card fique acima das partículas
          }}
        >
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ fontSize: '1.8rem' }}>Bem-vindo de volta 👋</h2>
            <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>Entre para continuar</p>
          </div>

          <form className="row g-4">
            <div className="col-md-12 mb-3">
              <label className="form-label text-muted small">Email</label>
              <input
                type="email"
                className="form-control border-0 border-bottom rounded-0 shadow-none"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <label className="form-label text-muted small">Senha</label>
              <input
                type="password"
                className="form-control border-0 border-bottom rounded-0 shadow-none"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="col-12 d-grid mt-4">
              <button type="submit" className="btn btn-primary fw-semibold py-2">
                Entrar
              </button>
            </div>

            <p className="text-center text-muted mt-3">
              Não tem uma conta?{' '}
              <a href="#" className="fw-semibold text-decoration-none">Criar conta</a>
            </p>
          </form>
        </div>

        {/* Canvas para as partículas */}
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
      </div>
    </div>
  );
}