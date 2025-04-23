// src/components/testemunhas.tsx

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import testemunha from '../assets/t1.png'; // Imagem de exemplo, substitua pelo caminho correto

const Testemunhas = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="py-5 bg-light" style={{ minHeight: '100vh' }}>
      <div className="container text-center">
        <h2 className="mb-5">O que nossos clientes dizem</h2>

        {/* Grid de Testemunhos */}
        <div className="row justify-content-center d-flex align-items-center">
          {/* Testemunho 1 */}
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="fade-up">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-muted mb-3">
                "A Mecs transformou a nossa forma de trabalhar! O site ficou rápido, seguro e super fácil de navegar."
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={testemunha} // Imagem do Testemunho 1
                  alt="Testemunha 1"
                  className="rounded-circle me-3 w-25"
                />
                <div>
                  <h5 className="mb-0">João Silva</h5>
                  <p className="text-muted">CEO da Empresa XYZ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testemunho 2 */}
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-muted mb-3">
                "O suporte da equipe foi excepcional. Eles entenderam nossas necessidades e entregaram um trabalho incrível!"
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={testemunha} // Imagem do Testemunho 2
                  alt="Testemunha 2"
                  className="rounded-circle me-3 w-25"
                />
                <div>
                  <h5 className="mb-0">Maria Oliveira</h5>
                  <p className="text-muted">Fundadora da Startup ABC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testemunho 3 */}
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-muted mb-3">
                "Recomendo a Mecs para todos! A qualidade de trabalho e o atendimento são excepcionais. Meus clientes adoram o novo site!"
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={testemunha} // Imagem do Testemunho 3
                  alt="Testemunha 3"
                  className="rounded-circle me-3 w-25"
                />
                <div>
                  <h5 className="mb-0">Carlos Mendes</h5>
                  <p className="text-muted">Co-Fundador da Tech Ventures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemunhas;
