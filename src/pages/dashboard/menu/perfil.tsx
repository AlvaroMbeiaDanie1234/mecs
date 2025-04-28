import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Necessário para o Bootstrap Tooltip
import fotoPerfil from '../../../assets/t1.png';

const Perfil = () => {
  const user = {
    fotoUrl: fotoPerfil,
    nome: 'CAC Engenharia e Construção',
    email: 'joao.silva@email.com',
    contacto: '+244 912 345 678',
    conexoes: 128,
  };

  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  // Inicialização do AOS para animações
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener('load', AOS.refresh);
    return () => window.removeEventListener('load', AOS.refresh);
  }, []);

  // Efeito Vanta para a foto de capa
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
          color: 0x3f51b5, // Cor do efeito (um tom de azul)
        });
        clearInterval(interval);
      }
    }, 100);

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      clearInterval(interval);
    };
  }, []);

  // Inicialização do Bootstrap Tooltip
  useEffect(() => {
    // Inicializa todos os tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new (window as any).bootstrap.Tooltip(tooltipTriggerEl, {
        html: true, // Permite HTML dentro do Tooltip
      });
    });
  }, []);

  return (
    <div className="container py-5" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Card de Perfil */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-12">
          <div
            className="card p-0 shadow-lg rounded-4"
            style={{
              width: '100%',
              zIndex: 1, // Certifica-se que o card está acima do efeito
            }}
          >
            {/* Foto de Capa com efeito Vanta */}
            <div
              ref={vantaRef}
              style={{
                height: '200px', // Altura da foto de capa (diminuída)
                backgroundColor: '#4f46e5', // Cor de fundo antes do efeito
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
                position: 'relative',
                zIndex: 0,
              }}
            ></div>

            {/* Detalhes do Usuário */}
            <div
              className="card-body"
              style={{
                background: '#f3f4f6', // Fundo do card
                color: '#111', // Texto preto
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
              }}
            >
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  {/* Tooltip para foto */}
                  <img
                    src={user.fotoUrl}
                    alt="Perfil"
                    className="rounded-circle"
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'cover',
                      border: '4px solid #fff',
                      marginTop: '-60px', // Para sobrepor o fundo
                      cursor: 'pointer',
                    }}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={
                      `<div style="width: 100%; max-width: 300px; display: flex; justify-content: center;">` +
                      `<img src="${user.fotoUrl}" style="width: 100%; height: auto; border-radius: 50%; max-width: 150px;" />` +
                      `</div>`
                    }
                  />
                </div>
                <h3 className="mt-3 fw-bold">{user.nome}</h3>
             
              </div>

              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i
                      className="bi bi-envelope-fill"
                      style={{ fontSize: '22px', color: '#4f46e5' }}
                    ></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Email</h6>
                    <small className="text-muted">{user.email}</small>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <i
                      className="bi bi-telephone-fill"
                      style={{ fontSize: '22px', color: '#4f46e5' }}
                    ></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Contacto</h6>
                    <small className="text-muted">{user.contacto}</small>
                  </div>
                </div>
              </div>

              <div className="text-center mt-5">
                <button className="btn btn-primary rounded-pill px-4">
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
