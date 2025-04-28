import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fotoPadrao from '../../../assets/background.jpg'; // Imagem padrão
import { db } from '../../../../firebaseConfig.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'react-tooltip'; // Importa o Tooltip da versão 5

type Empresa = {
  nome: string;
  email: string;
  contacto: string;
  website: string;
  fotoUrl?: string;
};

const Home = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [search, setSearch] = useState('');

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
          fotoUrl: data.fotoEmpresa || '',
        });
      });

      setEmpresas(listaEmpresas);
    };

    fetchEmpresas();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredEmpresas = empresas.filter((empresa) =>
    empresa.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className="home"
      style={{ background: 'white', minHeight: '100vh', paddingTop: '0px' }}
    >
      <div className="container-fluid px-3">
        {/* Input de Pesquisa – fixo no topo */}
        <div
          className="search-container py-3"
          style={{ position: 'sticky', top: 0, zIndex: 1020, background: 'white' }}
        >
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Pesquisar empresas..."
            value={search}
            onChange={handleSearch}
            style={{
              padding: '14px 22px',
              borderRadius: '30px',
              border: '1px solid #ccc',
              width: '100%',
              fontSize: '16px',
            }}
          />
        </div>

        {/* Cards */}
        <div className="row g-4 mt-2">
          {filteredEmpresas.map((empresa, index) => {
            // Cria o HTML do tooltip com as informações detalhadas
            const tooltipHtml = `
              <div style="text-align: center;">
                <img src="${empresa.fotoUrl || fotoPadrao}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; margin-bottom: 10px;" />
                <h6 style="color: #007bff; margin-bottom: 6px;">${empresa.nome}</h6>
                <p style="color: #666; margin: 4px 0;">📧 ${empresa.email}</p>
                <p style="color: #666; margin: 4px 0;">📞 ${empresa.contacto}</p>
                ${
                  empresa.website
                    ? `<p style="color: #666; margin: 4px 0;">🌐 <a href="${empresa.website}" target="_blank" rel="noopener noreferrer" style="color: #007bff;">${empresa.website}</a></p>`
                    : ''
                }
              </div>
            `;
            return (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div
                  className="empresa-card shadow-sm p-4 bg-white rounded-4 text-center position-relative"
                  data-aos="fade-up"
                  // Atributos usados pelo react-tooltip v5:
                  data-tooltip-id="card-tooltip"
                  data-tooltip-html={tooltipHtml}
                >
                  <img
                    src={empresa.fotoUrl || fotoPadrao}
                    alt={empresa.nome}
                    className="empresa-foto mb-3"
                  />
                  <h6 className="fw-bold text-primary mb-3 empresa-nome">
                    {empresa.nome}
                  </h6>
                  <button className="btn btn-primary btn-sm">Conectar</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contador de Empresas */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="text-muted small">
            Total de empresas encontradas: <strong>{filteredEmpresas.length}</strong> 🚀
          </p>
        </div>
      </div>

      {/* Tooltip Global para os cards */}
      <Tooltip
        id="card-tooltip"
        place="top"
        delayHide={300}
        style={{ zIndex: 1050 }} 
        // Você pode customizar mais as propriedades conforme necessário
      />

      {/* Estilos Internos */}
      <style>{`
        .empresa-card {
          transition: all 0.3s ease;
          height: auto;
          min-height: 250px;
          background: linear-gradient(145deg, #ffffff, #f3f3f3);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .empresa-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
          background: linear-gradient(145deg, #e0e0e0, #ffffff);
        }
        .empresa-foto {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid #007bff20;
        }
        .empresa-nome {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
          margin: 0 auto;
        }
        .search-container {
          max-width: 600px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .empresa-card {
            padding: 20px;
          }
          .empresa-foto {
            width: 70px;
            height: 70px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
