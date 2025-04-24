import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from '../../firebaseConfig';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Empresa = {
  nome: string;
  email: string;
  contacto: string;
  website: string;
};

const Empresas = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  
    const fetchEmpresas = async () => {
      const querySnapshot = await getDocs(collection(db, 'empresas'));
      const listaEmpresas: Empresa[] = [];
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        listaEmpresas.push({
          nome: data.nomeEmpresa,
          email: data.emailEmpresa,
          contacto: data.contacto,
          website: data.website,
        });
      });
  
      setEmpresas(listaEmpresas);
    };
  
    fetchEmpresas();
  
    // Inicializa o efeito de partículas com o particles.js do CDN
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: {
            type: ["circle"],
            stroke: { width: 0, color: "#000000" },
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 40,
              opacity_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  
    return () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {});
      }
    };
  }, []);
  

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5" style={{ background: '#f8f9fa', height: '100vh' }}>
      <div  className="container">
        <h3
          className="text-center fw-bold mb-5"
          data-aos="fade-down"
          style={{ fontSize: '2rem' }}
        >
          Galeria de Empresas Parceiras 🏢✨
        </h3>

        <div className="empresa-slider-container">
          <Slider {...settings}>
            {empresas.map((empresa, index) => (
              <div
                key={index}
                className="p-3"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="bg-white p-4 rounded-4 shadow-sm empresa-card"
                  style={{
                    transition: 'transform 0.3s ease-in-out',
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <h5 className="fw-bold text-primary mb-3">
                    <i className="bi bi-building me-2"></i>
                    {empresa.nome}
                  </h5>
                  <p className="mb-2 text-muted">
                    <i className="bi bi-envelope-fill me-2 text-danger"></i>
                    {empresa.email}
                  </p>
                  <p className="mb-2 text-muted">
                    <i className="bi bi-telephone-fill me-2 text-success"></i>
                    {empresa.contacto}
                  </p>
                  <p className="text-muted">
                    <i className="bi bi-globe me-2 text-info"></i>
                    <a
                      href={empresa.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {empresa.website}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <p className="text-muted small">
            Total de empresas na galeria: <strong>{empresas.length}</strong> 🚀
          </p>
        </div>
      </div>

      <style>{`
        .empresa-card:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .empresa-card {
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Empresas;
