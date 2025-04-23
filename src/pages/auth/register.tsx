// src/pages/Register.tsx

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import registerImage from '../../assets/login.svg'; // imagem SVG

export default function Register() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
      </div>
    </div>
  );
}
