// src/components/vantagens.tsx

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Vantagens = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section
      className="py-5 d-flex align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      <div className="container text-center">
        <h2 className="mb-5">Por que escolher a <span style={{ color: 'blue' }} >MECS Conecta?</span></h2>
        <div className="row g-4 justify-content-center">
          {[
            {
              icon: 'bi-speedometer2',
              title: 'Desempenho Otimizado',
              desc: 'Sites rápidos e fluidos com tecnologia de ponta como Vite e React.',
            },
            {
              icon: 'bi-shield-lock',
              title: 'Segurança Garantida',
              desc: 'Proteção de dados e navegação segura para todos os usuários.',
            },
            {
              icon: 'bi-people',
              title: 'Comunidade Conectada',
              desc: 'Facilitamos a ligação entre empresas, profissionais e clientes.',
            },
            {
              icon: 'bi-phone',
              title: 'Compatível com Mobile',
              desc: 'Navegação intuitiva e visual incrível em qualquer dispositivo.',
            },
            {
              icon: 'bi-lightning',
              title: 'Implantação Rápida',
              desc: 'Lançamento ágil com automação de processos e integração contínua.',
            },
            {
              icon: 'bi-heart-pulse',
              title: 'Experiência do Usuário',
              desc: 'Foco total na usabilidade, performance e satisfação do cliente.',
            },
          ].map((vantagem, index) => (
            <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div
                className="p-4 shadow-sm rounded h-100 bg-white"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, 0.075)';
                }}
              >
                <i className={`bi ${vantagem.icon} fs-1 text-primary mb-3`}></i>
                <h5>{vantagem.title}</h5>
                <p className="text-muted">{vantagem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vantagens;
