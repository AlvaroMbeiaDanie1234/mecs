import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import registerImage from '../../assets/login.svg'; // imagem SVG

export default function Register() {
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
      {/* Lado da ilustração */}
      <div
        className="d-none d-lg-flex align-items-center justify-content-center w-50 p-5"
        data-aos="fade-right"
        style={{
          background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
          color: 'white',
        }}
      >
        <img
          src={registerImage}
          alt="Ilustração Registro"
          className="img-fluid"
          style={{ maxHeight: '500px' }}
        />
      </div>

      {/* Formulário */}
      <div className="d-flex align-items-center justify-content-center w-100 w-lg-50 p-4">
        <div
          className="card shadow-sm border-0 px-5 py-4 w-100"
          data-aos="fade-up"
          style={{
            maxWidth: '850px',
            borderRadius: '10px',
            minHeight: 'auto',
            position: 'relative',
            zIndex: 1 // Para garantir que o card fique acima das partículas
          }}
        >

          <form className="row g-4">
            {[
              { label: 'Nome da Empresa' },
              { label: 'NIF' },
              { label: 'Email da Empresa', type: 'email' },
              { label: 'Contacto', type: 'tel' },
              { label: 'Endereço' },
              { label: 'Tipo de Serviço' },
              { label: 'Representante Legal' },
              { label: 'Website', type: 'url' },
              { label: 'Número de Funcionários', type: 'number' },
            ].map((field, index) => (
              <div className="col-md-6" key={index}>
                <label className="form-label text-muted small">{field.label}</label>
                <input
                  type={field.type || 'text'}
                  className="form-control border-0 border-bottom rounded-0 shadow-none"
                  placeholder=""
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#ccc',
                  }}
                  required
                />
              </div>
            ))}

            <div className="col-12">
              <label className="form-label text-muted small">Descrição da Empresa</label>
              <textarea
                className="form-control border-0 border-bottom rounded-0 shadow-none"
                rows={2}
                placeholder=""
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#ccc',
                  resize: 'none',
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted small">Logo da Empresa</label>
              <input
                type="file"
                className="form-control form-control-sm"
                accept="image/*"
              />
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-dark fw-semibold py-2">
                Registrar Empresa
              </button>
            </div>

            <p className="text-center text-muted mt-3">
              Já possui conta?{' '}
              <a href="#" className="fw-semibold text-decoration-none">Fazer login</a>
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
